import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import SliderLine from '../../components/SliderLine';
import Navigation from './Navigation';
import CallbackModal from '../../components/modals/CallbackModal';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  // Цвета для каждой линии
  const colors = ['bg-my-red', 'bg-white', 'bg-white', 'bg-white'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Интервал в 2 секунды
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <header className="w-full h-[720px] bg-header bg-cover bg-center bg-no-repeat">
      <Navigation/>
      <div className="max-w-[1128px] mx-auto px-4">
        <div className="flex flex-col items-start">
          <h1 className='max-w-[582px] mt-[140px] mb-[52px] text-white text-5xl font-bold'>
            НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ
          </h1>
          <Button className="flex items-center justify-center w-[216px] h-[52px] font-bold border-4 border-my-red text-white text-sm">
            ПЕРЕЙТИ В КАТАЛОГ
          </Button>
        </div>
      </div>
      <div className="mt-[100px] flex justify-center gap-3">
        {colors.map((_color, index) => (
          <SliderLine
            key={index}
            className={index === activeIndex ? 'bg-my-red' : 'bg-white'}
          />
        ))}
      </div>
      <CallbackModal 
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </header>
  );
};

export default Header;