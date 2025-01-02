import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

const MagnumBatteriesPage = () => {
  const { batteries, loading, error } = useSelector((state: RootState) => state.magnumBatteries);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBatteryClick = (batteryId: number) => {
    navigate(`/batteries/magnum/${batteryId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <Breadcrumbs />
        <div className="max-w-[1128px] mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Аккумуляторы MAGNUM</h1>
          <p className="text-xl text-center mb-12">
            Высококачественные аккумуляторы для любого типа транспорта
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batteries.map((battery) => (
              <div 
                key={battery.id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <div className="flex-1">
                  <img 
                    src={battery.image}
                    alt={battery.model}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-xl font-bold mb-2">{battery.model}</h2>
                  <p className="text-gray-600 mb-4">{battery.shortDescription}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>Емкость:</div>
                    <div>{battery.capacity} Ач</div>
                    <div>Напряжение:</div>
                    <div>{battery.voltage} В</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-2xl font-bold">{battery.price} ₽</div>
                  <div className={battery.inStock ? 'text-green-600' : 'text-red-600'}>
                    {battery.inStock ? 'В наличии' : 'Нет в наличии'}
                  </div>
                  <Button
                    className="w-full bg-my-red text-white py-2 rounded hover:bg-red-700 transition-colors"
                    onClick={() => handleBatteryClick(battery.id)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MagnumBatteriesPage; 