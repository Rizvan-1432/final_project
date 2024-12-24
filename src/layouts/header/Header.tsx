
// import Button from '../components/Button';
// import SliderLine from '../components/SliderLine';
// // import HeaderSearch from './HeaderSearch';
// import Navigation from './Navigation';

// const Header = () => {

//   return (
//     <header className="w-full h-[720px] bg-header">
//       <Navigation/>
//      {/* <HeaderSearch /> */}
//       <div className="w-[1128px] mx-auto">
//         <h1 className='w-[582px] mt-[140px] mb-[52px] text-white text-[48px] font-bold'>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
//         <Button className="flex items-center justify-center w-[216px] h-[52px] font-bold border-4 border-my-red text-white text-sm">
//           ПЕРЕЙТИ В КАТАЛОГ
//         </Button>
//       </div>
//       <div className='mt-[100px] flex justify-center gap-3'>
//       <SliderLine className='bg-my-red' />
//       <SliderLine className='bg-white' />
//       <SliderLine className='bg-white' />
//       <SliderLine className='bg-white' />
//       </div>
//     </header>
//   );
// };

// export default Header;




import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import SliderLine from '../../components/SliderLine';
import Navigation from './Navigation';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Цвета для каждой линии
  const colors = ['bg-my-red', 'bg-white', 'bg-white', 'bg-white'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Интервал в 2 секунды
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <header className="w-full h-[720px] bg-header">

      <Navigation/>
      <div className="w-[1128px] mx-auto">
        <h1 className='w-[582px] mt-[140px] mb-[52px] text-white text-5xl font-bold'>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
        <Button className="flex items-center justify-center w-[216px] h-[52px] font-bold border-4 border-my-red text-white text-sm">
          ПЕРЕЙТИ В КАТАЛОГ
        </Button>
      </div>
      <div className="mt-[100px] flex justify-center gap-3">
        {colors.map((_color, index) => (
          <SliderLine
            key={index}
            className={index === activeIndex ? 'bg-my-red' : 'bg-white'}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;