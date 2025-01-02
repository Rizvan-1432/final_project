import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/slice/basketSlice';
import { setBattery } from '../redux/slice/magnumBatteryDetailSlice';
import { initialState } from '../redux/slice/magnumBatteryDetailSlice';
import { IMagnumBatteryDetail } from '../types/magnumBatteryDetail.types';
import { setBreadcrumbsForMagnumBattery } from '../redux/slice/breadcrumbsSlice';

const MagnumBatteryDetailPage = () => {
  const { id } = useParams();
  const { battery, loading, error } = useSelector((state: RootState) => state.magnumBatteryDetail);
  const dispatch = useDispatch();
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id && initialState.battery) {
      dispatch(setBattery({
        ...initialState.battery,
        id: Number(id)
      } as IMagnumBatteryDetail));
      
      dispatch(setBreadcrumbsForMagnumBattery());
    }
  }, [id, dispatch]);

  const handleAddToBasket = () => {
    if (battery) {
      dispatch(addToBasket({
        name: battery.model,
        brand: 'MAGNUM',
        price: battery.price,
        batteryCapacity: battery.capacity,
        quantity: 1
      }));

      // Создаем и показываем уведомление
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 shadow-lg z-50';
      notification.textContent = 'Товар добавлен в корзину';
      document.body.appendChild(notification);
      
      // Удаляем уведомление через 2 секунды
      setTimeout(() => {
        notification.remove();
      }, 2000);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!battery) return <div>Аккумулятор не найден</div>;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <Breadcrumbs />
        <div className="max-w-[1128px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Галерея изображений */}
            <div className="space-y-4">
              {battery.images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${battery.model} view ${index + 1}`}
                  className="w-full rounded-lg shadow-md"
                />
              ))}
            </div>

            {/* Информация о товаре */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{battery.model}</h1>
              <p className="text-gray-600">{battery.shortDescription}</p>
              
              {/* Характеристики */}
              <div className="border-t border-b py-4">
                <h2 className="text-xl font-bold mb-4">Характеристики:</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>Емкость:</div>
                  <div>{battery.capacity} Ач</div>
                  <div>Напряжение:</div>
                  <div>{battery.voltage} В</div>
                  <div>Полярность:</div>
                  <div>{battery.specifications.polarity}</div>
                  <div>Тип клемм:</div>
                  <div>{battery.specifications.terminals}</div>
                  <div>Размеры (ДxШxВ):</div>
                  <div>
                    {battery.specifications.length}x{battery.specifications.width}x{battery.specifications.height} мм
                  </div>
                  <div>Вес:</div>
                  <div>{battery.specifications.weight} кг</div>
                  <div>Пусковой ток:</div>
                  <div>{battery.specifications.startingCurrent} А</div>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Дополнительная информация</h2>
                  <Button
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 focus:outline-[0.5px]
                      ${isDetailsVisible 
                        ? 'text-my-red outline-[0.5px]' 
                        : 'text-gray-600 outline-[0.5px]'
                      }`}
                    onClick={() => setIsDetailsVisible(!isDetailsVisible)}
                  >
                    {isDetailsVisible ? 'СВЕРНУТЬ' : 'ПОКАЗАТЬ'}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isDetailsVisible ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>

                {isDetailsVisible && (
                  <>
                    {/* Особенности */}
                    <div>
                      <h2 className="text-xl font-bold mb-4">Особенности:</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {battery.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Применение */}
                    <div className="mt-6">
                      <h2 className="text-xl font-bold mb-4">Применение:</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {battery.applications.map((app, index) => (
                          <li key={index}>{app}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Рекомендации */}
                    <div className="mt-6">
                      <h2 className="text-xl font-bold mb-4">Рекомендации:</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {battery.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              {/* Цена и кнопки */}
              <div className="space-y-4">
                <div className="text-3xl font-bold">{battery.price} ₽</div>
                <div className="text-green-600">Гарантия: {battery.warranty}</div>
                <div className={battery.inStock ? 'text-green-600' : 'text-red-600'}>
                  {battery.inStock ? 'В наличии' : 'Нет в наличии'}
                </div>
                {battery.inStock && (
                  <Button
                    className="w-full md:w-auto px-8 py-3 bg-my-red text-white rounded hover:bg-red-700 transition-colors"
                    onClick={handleAddToBasket}
                  >
                    В корзину
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MagnumBatteryDetailPage; 