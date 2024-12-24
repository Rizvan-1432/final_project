
// Navigation.tsx
// import logo from '../assets/img/logo.png';
// import search from '../assets/icons/search.svg';
// import basket from '../assets/icons/basket.svg';
// import Button from '../components/Button';

// const Navigation = () => {
//   return (
//     <nav className="flex items-center justify-center h-[100px] bg-black/85 text-white">
//       <div className="w-[1104px] h-full flex justify-between items-center">
//         <img src={logo} alt="" />
//         <div className="flex gap-7 items-center justify-between mt-3">
//           <ul className="mt-7 h-[50px] flex gap-8">
//             <li className="hover:border-b-4 border-my-red">КОМПАНИЯ</li>
//             <li className="hover:border-b-4 border-my-red">КАТАЛОГ</li>
//             <li className="hover:border-b-4 border-my-red">УСЛУГИ</li>
//             <li className="hover:border-b-4 border-my-red">ИНФОРМАЦИЯ</li>
//             <li className="hover:border-b-4 border-my-red">КОНТАКТЫ</li>
//           </ul>
//           <Button className="w-[168px] h-10 pt-0.5 flex justify-center items-center border-4 border-my-red font-Geometria font-bold text-xs">
//             ЗАКАЗАТЬ ЗВОНОК
//           </Button>
//           <button>
//             <img src={search} alt="" />
//           </button>
//           <div className="flex items-center gap-1">
//             <img src={basket} alt="" />
//             <div className="w-8 h-8 flex justify-center items-center bg-my-red rounded-full font-Geometria font-bold tracking-tighter pt-0.5">
//               0
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;


import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import search from '../../assets/icons/search.svg';
import basket from '../../assets/icons/basket.svg';
import Button from '../../components/Button';
import HeaderSearch from './HeaderSearch';

const Navigation = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCompanyMenuVisible, setIsCompanyMenuVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <nav className="flex items-center justify-center h-[100px] bg-black/85 text-white">
        <div className="w-[1104px] h-full flex justify-between items-center">
          <img src={logo} alt="" />
          <div className="flex gap-7 items-center justify-between mt-3">
            <ul className="mt-7 h-[50px] flex gap-8">
              <li 
                className="relative"
                onMouseEnter={() => setIsCompanyMenuVisible(true)}
                onMouseLeave={() => setIsCompanyMenuVisible(false)}
              >
                <span className="hover:border-b-4 border-my-red cursor-pointer">КОМПАНИЯ</span>
                {isCompanyMenuVisible && (
                  <div className="absolute left-0 mt-2 bg-black/35 text-white  rounded shadow-lg">
                    <ul>
                      <li className="hover:bg-red-500 flex items-center pl-1 w-[228px] h-10 mb-2 font-Geometria font-medium cursor-pointer">О компании</li>
                      <li className="hover:bg-red-500 flex items-center pl-1 w-[228px] h-10 mb-2 font-Geometria font-medium cursor-pointer">Лицензии</li>
                      <li className="hover:bg-red-500 flex items-center pl-1 w-[228px] h-10 mb-2 font-Geometria font-medium cursor-pointer">Партнеры</li>
                      <li className="hover:bg-red-500 flex items-center pl-1 w-[228px] h-10 mb-2 font-Geometria font-medium cursor-pointer">Отзывы Клиентов</li>
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
              <img src={basket} alt="" />
              <div className="w-8 h-8 flex justify-center items-center bg-my-red rounded-full font-Geometria font-bold tracking-tighter pt-0.5">
                0
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isSearchVisible && <HeaderSearch onClose={toggleSearch} />}
    </>
  );
};

export default Navigation;

