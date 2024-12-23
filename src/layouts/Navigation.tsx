import logo from '../assets/img/logo.png';
import search from '../assets/icons/search.svg';
import basket from '../assets/icons/basket.svg';
import Button from '../components/Button';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center h-[100px] bg-black opacity-85 text-white">
      <div className="w-[1128px] flex justify-between">
        <img src={logo} alt="" />
        <div className='flex mt-5 gap-7 items-center justify-between'>
        <ul className="flex gap-10">
          <li>КОМПАНИЯ</li>
          <li>КАТАЛОГ</li>
          <li>УСЛУГИ</li>
          <li>ИНФОРМАЦИЯ</li>
          <li>КОНТАКТЫ</li>
        </ul>
        <Button className="w-[168px] h-10 flex justify-center items-center border-4 border-my-red font-Geometria font-bold text-xs">
          ЗАКАЗАТЬ ЗВОНОК
        </Button>
        <img src={search} alt="" />
        <div className='flex items-center gap-1'>
          <img src={basket} alt="" />
          <div className="w-8 h-8 flex justify-center items-center bg-my-red rounded-full font-Geometria font-bold tracking-tighter pt-0.5">
            0
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
