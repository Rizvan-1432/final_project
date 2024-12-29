import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/logo.png';
import search from '../../assets/icons/search.svg';
import basket from '../../assets/icons/basket.svg';
import Button from '../../components/Button';
import HeaderSearch from './HeaderSearch';
import { toggleBasket, removeFromBasket } from '../../redux/slice/basketSlice';
import { RootState } from '../../redux/store';
import { BasketItem } from '../../types/BasketState.types';
import OrderModal from '../../components/modals/OrderModal';
import { useNavigate, Link } from 'react-router-dom';

const Navigation = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCompanyMenuVisible, setIsCompanyMenuVisible] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isBasketOpen = useSelector((state: RootState) => state.basket.isOpen);
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const itemsCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const toggleSearch = () => {
    if (isBasketOpen) {
      dispatch(toggleBasket());
    }
    setIsSearchVisible(!isSearchVisible);
  };

  const handleBasketClick = () => {
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
    dispatch(toggleBasket());
  };

  const handleCloseBasket = () => {
    dispatch(toggleBasket());
  };

  const handleRemoveItem = (item: BasketItem) => {
    dispatch(removeFromBasket(item));
  };

  const handleNavigateToAbout = () => {
    navigate('/about');
    setIsCompanyMenuVisible(false);
  };

  return (
    <>
      <nav className="w-full bg-black/85 text-white">
        <div className="max-w-[1128px] h-[100px] mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex gap-7 items-center justify-between mt-3">
            <ul className="mt-7 h-[50px] flex gap-8">
              <li 
                className="relative"
                onMouseEnter={() => setIsCompanyMenuVisible(true)}
                onMouseLeave={() => setIsCompanyMenuVisible(false)}
              >
                <span className="hover:border-b-4 border-my-red cursor-pointer">КОМПАНИЯ</span>
                {isCompanyMenuVisible && (
                  <div className="absolute left-0 mt-2 bg-black/35 text-white rounded shadow-lg min-w-[228px]">
                    <ul className="w-full">
                      <li 
                        className="hover:bg-red-500 flex items-center pl-1 h-10 mb-2 font-Geometria font-medium cursor-pointer whitespace-nowrap"
                        onClick={handleNavigateToAbout}
                      >
                        О компании
                      </li>
                      <li className="hover:bg-red-500 flex items-center pl-1 h-10 mb-2 font-Geometria font-medium cursor-pointer whitespace-nowrap">
                        <Link 
                          to="/license" 
                          className="w-full h-full flex items-center"
                          onClick={() => setIsCompanyMenuVisible(false)}
                        >
                          Лицензии
                        </Link>
                      </li>
                      <li className="hover:bg-red-500 flex items-center pl-1 h-10 mb-2 font-Geometria font-medium cursor-pointer whitespace-nowrap">
                        Партнеры
                      </li>
                      <li className="hover:bg-red-500 flex items-center pl-1 h-10 mb-2 font-Geometria font-medium cursor-pointer whitespace-nowrap">
                        Отзывы Клиентов
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="hover:border-b-4 border-my-red">КАТАЛОГ</li>
              <li className="hover:border-b-4 border-my-red">УСЛУГИ</li>
              <li className="hover:border-b-4 border-my-red">ИНФОРМАЦИЯ</li>
              <li className="hover:border-b-4 border-my-red">КОНТАКТЫ</li>
            </ul>
            <Button className="w-[168px] h-10 pt-0.5 flex justify-center items-center border-4 border-my-red font-Geometria font-bold text-xs">
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
            <button onClick={toggleSearch}>
              <img src={search} alt="search" />
            </button>
            <div className="flex items-center gap-1">
              <img src={basket} alt="" onClick={handleBasketClick} />
              <div className="w-8 h-8 flex justify-center items-center bg-my-red rounded-full font-Geometria font-bold tracking-tighter pt-0.5">
                {itemsCount}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isSearchVisible && <HeaderSearch onClose={toggleSearch} />}
      {isBasketOpen && (
        <div className="absolute top-[100px] right-0 w-[400px] bg-white shadow-lg rounded-l-lg z-50">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-center">Корзина</h2>
          </div>
          
          <div className="max-h-[500px] overflow-y-auto">
            {basketItems.length > 0 ? (
              <div className="p-4">
                {basketItems.map((item, index) => (
                  <div key={index} className="mb-4 p-3 border rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">{item.brand}</p>
                        <p className="text-gray-800">{item.price} ₽ x {item.quantity}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-lg font-bold">
                          {item.price * item.quantity} ₽
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item)}
                          className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center font-bold mb-4">
                    <span>Итого:</span>
                    <span>
                      {basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)} ₽
                    </span>
                  </div>
                  <Button 
                    className="w-full p-2 bg-my-red text-white rounded hover:bg-red-600 transition-colors mb-3"
                    onClick={() => setIsOrderModalOpen(true)}
                  >
                    Оформить заказ
                  </Button>
                  <Button
                    className="w-full p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    onClick={handleCloseBasket}
                  >
                    Закрыть
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                Корзина пуста
              </div>
            )}
          </div>
        </div>
      )}
      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
};

export default Navigation;
