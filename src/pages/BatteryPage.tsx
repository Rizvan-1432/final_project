import { useEffect } from 'react';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setBatteries } from '../redux/slice/batterySlice';
import { addToBasket } from '../redux/slice/basketSlice';
import { database } from '../db/database';
import Breadcrumbs from '../components/Breadcrumbs';

const BatteryPage = () => {
  const dispatch = useAppDispatch();
  const { batteries, loading, error } = useAppSelector(state => state.battery);

  useEffect(() => {
    dispatch(setBatteries(database.batteries));
  }, [dispatch]);

  const handleAddToBasket = (battery: typeof batteries[0]) => {
    dispatch(addToBasket({
      name: battery.title,
      brand: battery.brand,
      price: battery.price,
      batteryCapacity: battery.capacity,
      quantity: 1
    }));

    // Уведомление о добавлении в корзину
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
            <h1 className="text-3xl font-bold mb-6">Аккумуляторы</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batteries.map(battery => (
                <div key={battery.id} className="border rounded-lg p-4">
                  <img src={battery.image} alt={battery.title} className="w-full h-48 object-cover" />
                  <h2 className="text-xl font-bold mt-2">{battery.title}</h2>
                  <p className="text-gray-600">{battery.brand}</p>
                  <p>Емкость: {battery.capacity} Ач</p>
                  <p>Напряжение: {battery.voltage} В</p>
                  <p className="text-xl font-bold mt-2">{battery.price} ₽</p>
                  <div className="mt-4">
                    {battery.inStock ? (
                      <button 
                        onClick={() => handleAddToBasket(battery)}
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

export default BatteryPage; 