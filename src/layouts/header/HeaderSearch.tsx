
// HeaderSearch.tsx
// import close from '../assets/icons/close.svg';
// import Button from '../components/Button';

// const HeaderSearch = () => {
//   return (
//     <div className="w-[1640px] h-[72px] flex items-center justify-center bg-my-black-100/75">
//       <div className='w-[1100px] flex items-center gap-3'>
//         <div className="w-[970px] h-10 flex bg-white">
//           <svg
//             width="40"
//             height="40"
//             viewBox="0 0 40 40"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
//               fill="#A5A5A5"
//             />
//           </svg>
//           <input
//             className="ml-4 w-full font-Geometria font-medium text-sm outline-none"
//             type="search"
//           />
//         </div>
//         <Button className="w-[86px] h-10 flex justify-center items-center border-4 border-my-red text-white font-bold">
//           НАЙТИ
//         </Button>
//         <img className="self-start" src={close} alt="" />
//       </div>
//     </div>
//   );
// };

// export default HeaderSearch;


import { useState } from 'react';
import close from '../../assets/icons/close.svg';
import Button from '../../components/Button';

interface HeaderSearchProps {
  onClose: () => void;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery); // Здесь можно заменить на вызов API или другое действие
      alert(`Поиск: ${searchQuery}`);
    } else {
      alert('Введите запрос для поиска!');
    }
  };

  return (
    <div className="w-164 h-[72px] flex items-center justify-center bg-my-black-100/75">
      <div className='w-[1100px] flex items-center gap-3'>
        <div className="w-[970px] h-10 flex bg-white">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
              fill="#A5A5A5"
            />
          </svg>
          <input
            className="ml-4 w-full font-medium text-sm outline-none"
            type="search"
            placeholder="Введите запрос..."
            value={searchQuery}
            onChange={handleInputChange}
          />
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
  );
};

export default HeaderSearch;