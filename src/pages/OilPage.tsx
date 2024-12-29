import { useEffect } from 'react';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setOils } from '../redux/slice/oilSlice';
import { addToBasket } from '../redux/slice/basketSlice';
import { database } from '../db/database';
import Breadcrumbs from '../components/Breadcrumbs';

const OilPage = () => {
  const dispatch = useAppDispatch();
  const { oils, loading, error } = useAppSelector(state => state.oil);

  useEffect(() => {
    dispatch(setOils(database.oils));
  }, [dispatch]);

  const handleAddToBasket = (oil: typeof oils[0]) => {
    dispatch(addToBasket({
      name: oil.title,
      brand: oil.brand,
      price: oil.price,
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
            <h1 className="text-3xl font-bold mb-6">Моторные масла</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oils.map(oil => (
                <div key={oil.id} className="border rounded-lg p-4">
                  <img src={oil.image} alt={oil.title} className="w-full h-48 object-cover" />
                  <h2 className="text-xl font-bold mt-2">{oil.title}</h2>
                  <p className="text-gray-600">{oil.brand}</p>
                  <p>Тип: {oil.type}</p>
                  <p>Вязкость: {oil.viscosity}</p>
                  <p>Объем: {oil.volume}л</p>
                  <p className="text-xl font-bold mt-2">{oil.price} ₽</p>
                  <div className="mt-4">
                    {oil.inStock ? (
                      <button 
                        onClick={() => handleAddToBasket(oil)}
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

export default OilPage; 