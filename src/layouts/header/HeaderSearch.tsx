import { useState, useEffect } from 'react';
import close from '../../assets/icons/close.svg';
import Button from '../../components/Button';
import { HeaderSearchProps, Product } from '../../types/HeaderSearch.types';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, setSearchResults, addToSearchHistory, clearSearchHistory } from '../../redux/slice/HeaderSearchSlice';
import { RootState } from '../../redux/store';
import { addToBasket } from '../../redux/slice/basketSlice';
import { database } from '../../db/database';

const HeaderSearch: React.FC<HeaderSearchProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { filter, searchResults, searchHistory } = useSelector((state: RootState) => state.headerSearch);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showHistory, setShowHistory] = useState(false);

  // Используем данные из database
  const { products: mockData } = database;

  // Обработчики изменения фильтров
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilter({ ...filter, minPrice: e.target.value }));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilter({ ...filter, maxPrice: e.target.value }));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilter({ ...filter, selectedBrand: e.target.value }));
  };

  const handleBatteryCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilter({ ...filter, batteryCapacity: e.target.value }));
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      dispatch(addToSearchHistory(searchQuery.trim()));
      // Фильтрация данных с учетом фильтров
      const results = mockData.filter(item => {
        const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMinPrice = filter.minPrice ? item.price >= Number(filter.minPrice) : true;
        const matchesMaxPrice = filter.maxPrice ? item.price <= Number(filter.maxPrice) : true;
        const matchesBrand = filter.selectedBrand ? item.brand.toLowerCase().includes(filter.selectedBrand.toLowerCase()) : true;
        const matchesBatteryCapacity = filter.batteryCapacity ? item.batteryCapacity >= Number(filter.batteryCapacity) : true;

        return (
          matchesSearchQuery &&
          matchesMinPrice &&
          matchesMaxPrice &&
          matchesBrand &&
          matchesBatteryCapacity
        );
      });

      dispatch(setSearchResults(results.length > 0 ? results : []));
      setShowHistory(false);
    } else {
      alert('Введите запрос для поиска!');
    }
  };

  const handleHistoryItemClick = (query: string) => {
    setSearchQuery(query);
    setShowHistory(false);
    // Выполняем поиск с выбранным запросом
    const results = mockData.filter(item => {
      const matchesSearchQuery = item.name.toLowerCase().includes(query.toLowerCase());
      const matchesMinPrice = filter.minPrice ? item.price >= Number(filter.minPrice) : true;
      const matchesMaxPrice = filter.maxPrice ? item.price <= Number(filter.maxPrice) : true;
      const matchesBrand = filter.selectedBrand ? item.brand.toLowerCase().includes(filter.selectedBrand.toLowerCase()) : true;
      const matchesBatteryCapacity = filter.batteryCapacity ? item.batteryCapacity >= Number(filter.batteryCapacity) : true;

      return (
        matchesSearchQuery &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBrand &&
        matchesBatteryCapacity
      );
    });
    dispatch(setSearchResults(results.length > 0 ? results : []));
  };

  const handleClearHistory = () => {
    dispatch(clearSearchHistory());
  };

  const handleAddToBasket = (product: Product) => {
    dispatch(addToBasket(product));
  };

  // Добавляем эффект для управления скроллом
  useEffect(() => {
    // Блокируем скролл при монтировании
    document.body.style.overflow = 'hidden';
    
    // Возвращаем скролл при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div>
      {/* Поисковая панель */}
      <div className="absolute top-[100px] left-0 w-full h-[72px] flex items-center justify-center bg-my-black-100/75 z-50">
        <div className="w-[1100px] flex items-start gap-3">
          <div className="relative w-[970px] h-10">
            <div className="w-full h-full flex bg-white">
              <input
                className="ml-4 w-full font-medium text-sm outline-none"
                type="search"
                placeholder="Введите запрос..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowHistory(true)}
              />
            </div>
            
            {/* История поиска */}
            {showHistory && searchHistory.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-b shadow-lg z-50">
                <div className="flex justify-between items-center p-2 border-b">
                  <span className="text-sm font-medium text-gray-600">История поиска</span>
                  <button 
                    onClick={handleClearHistory}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Очистить историю
                  </button>
                </div>
                <ul>
                  {searchHistory.map((query, index) => (
                    <li 
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleHistoryItemClick(query)}
                    >
                      {query}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Button
            className="w-[86px] h-10 flex justify-center items-center border-4 border-my-red text-white font-bold"
            onClick={handleSearchClick}
          >
            НАЙТИ
          </Button>
          <button onClick={onClose}>
            <img className="self-start" src={close} alt="close" />
          </button>
        </div>
      </div>

      {/* Блок с фильтрами */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[1100px] bg-white p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="flex gap-4">
          <div>
            <label className="block font-medium">Цена (от)</label>
            <input
              type="number"
              value={filter.minPrice}
              onChange={handleMinPriceChange}
              className="border p-2 w-[100px]"
              placeholder="От"
            />
          </div>
          <div>
            <label className="block font-medium">Цена (до)</label>
            <input
              type="number"
              value={filter.maxPrice}
              onChange={handleMaxPriceChange}
              className="border p-2 w-[100px]"
              placeholder="До"
            />
          </div>
          <div>
            <label className="block font-medium">Бренд</label>
            <input
              type="text"
              value={filter.selectedBrand}
              onChange={handleBrandChange}
              className="border p-2 w-[200px]"
              placeholder="Бренд"
            />
          </div>
          <div>
            <label className="block font-medium">Емкость аккумулятора (от)</label>
            <input
              type="number"
              value={filter.batteryCapacity}
              onChange={handleBatteryCapacityChange}
              className="border p-2 w-[100px]"
              placeholder="От"
            />
          </div>
        </div>
      </div>

      {/* Результаты поиска */}
      <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[1100px] p-4 bg-white border border-gray-300 rounded-lg shadow-md">
        <ul className="divide-y">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((product, index) => (
              <li key={index} className="py-2 flex justify-between items-center">
                <div>
                  <div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                  <div>{`Цена: ${product.price}₽`}</div>
                  <div>{`Бренд: ${product.brand}`}</div>
                  {product.batteryCapacity > 0 && <div>{`Емкость аккумулятора: ${product.batteryCapacity} Ач`}</div>}
                </div>
                <Button 
                  className="w-[168px] h-10 flex justify-center items-center border-4 border-my-red text-black hover:bg-my-red hover:text-white transition-colors duration-300"
                  onClick={() => handleAddToBasket(product)}
                >
                  В КОРЗИНУ
                </Button>
              </li>
            ))
          ) : (
            <div>Нет результатов</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderSearch;