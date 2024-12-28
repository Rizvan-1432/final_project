import { useState } from 'react';
import Button from '../../components/Button';
import Headings from '../../components/Headings';
import { database } from '../../db/database';

const { carCard } = database;

const CarAccessories = () => {
  // Создаем массив состояний для каждой карточки
  const [hoverStates, setHoverStates] = useState<boolean[]>(new Array(carCard.length).fill(false));

  const handleHover = (index: number, isHovered: boolean) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="w-164 h-[1244px] flex flex-col items-center bg-carPhone">
      <Headings className="w-[756px] text-center text-4xl pb-5 font-bold uppercase border-b-4 border-my-red">
        Автотовары: аксессуары, расходники и многое другое
      </Headings>
      <p className="w-[892px] mt-8 mb-9 text-2xl text-center font-medium">
        PROAuto - это специализированный интернет магазин востребованных товаров
        для автомобилей.{' '}
      </p>
      <ul className="w-128 flex flex-wrap gap-6">
        {carCard.map((e, i) => (
          <li
            className="relative w-91 h-97"
            key={i}
            onMouseEnter={() => handleHover(i, true)}
            onMouseLeave={() => handleHover(i, false)}
          >
            <div className={`transition-all duration-300 ${hoverStates[i] ? '' : 'opacity-0'}`}>
              <div
                className={`w-full h-full flex flex-col gap-[66px] pt-[186px] items-center absolute transition-all duration-300 ${
                  hoverStates[i] ? 'bg-black/80' : ''
                }`}
              >
                <h2 className="text-2xl font-medium text-white">{e.title}</h2>
                <Button className="flex items-center justify-center w-[216px] h-[52px] font-bold border-4 border-my-red text-white text-sm cursor-pointer">
                  ЗАКАЗАТЬ ОНЛАЙН
                </Button>
              </div>
            </div>
            <img src={e.img} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarAccessories;
