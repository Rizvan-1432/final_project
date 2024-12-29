import { useEffect } from 'react';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setSparkPlugs } from '../redux/slice/sparkPlugSlice';
import { addToBasket } from '../redux/slice/basketSlice';
import { database } from '../db/database';

const SparkPlugPage = () => {
  const dispatch = useAppDispatch();
  const { sparkPlugs, loading, error } = useAppSelector(state => state.sparkPlug);

  useEffect(() => {
    dispatch(setSparkPlugs(database.sparkPlugs));
  }, [dispatch]);

  const handleAddToBasket = (sparkPlug: typeof sparkPlugs[0]) => {
    dispatch(addToBasket({
      name: sparkPlug.title,
      brand: sparkPlug.brand,
      price: sparkPlug.price,
      batteryCapacity: 0,
      quantity: 1
    }));

    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
    notification.textContent = 'Товар добавлен в корзину';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <Breadcrumbs />
        <div className="w-full">
          <div className="max-w-[1640px] mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Свечи накаливания</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sparkPlugs.map(sparkPlug => (
                <div key={sparkPlug.id} className="border rounded-lg p-4">
                  <img src={sparkPlug.image} alt={sparkPlug.title} className="w-full h-48 object-cover" />
                  <h2 className="text-xl font-bold mt-2">{sparkPlug.title}</h2>
                  <p className="text-gray-600">{sparkPlug.brand}</p>
                  <p>Модель: {sparkPlug.model}</p>
                  <p>Тип: {sparkPlug.type}</p>
                  <p>Резьба: {sparkPlug.thread}</p>
                  <p className="text-xl font-bold mt-2">{sparkPlug.price} ₽</p>
                  <div className="mt-4">
                    {sparkPlug.inStock ? (
                      <button 
                        onClick={() => handleAddToBasket(sparkPlug)}
                        className="bg-my-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                      >
                        В корзину
                      </button>
                    ) : (
                      <span className="text-gray-500">Нет в наличии</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SparkPlugPage; 