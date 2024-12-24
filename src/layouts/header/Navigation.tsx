import logo from '../../assets/img/logo.png';
import search from '../../assets/icons/search.svg';
import basket from '../../assets/icons/basket.svg';
import Button from '../../components/Button';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center h-[100px] bg-black/85 text-white">
      <div className="w-[1104px] h-full flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="flex gap-7 items-center justify-between mt-3">
          <ul className="mt-7 h-[50px] flex gap-8">
            <li className="hover:border-b-4 border-my-red">КОМПАНИЯ</li>
            <li className="hover:border-b-4 border-my-red">КАТАЛОГ</li>
            <li className="hover:border-b-4 border-my-red">УСЛУГИ</li>
            <li className="hover:border-b-4 border-my-red">ИНФОРМАЦИЯ</li>
            <li className="hover:border-b-4 border-my-red">КОНТАКТЫ</li>
          </ul>
          <Button className="w-[168px] h-10 pt-0.5 flex justify-center items-center border-4 border-my-red metria font-bold text-xs">
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
          <button>
            <img src={search} alt="" />
          </button>
          <div className="flex items-center gap-1">
            <img src={basket} alt="" />
            <div className="w-8 h-8 flex justify-center items-center bg-my-red rounded-full font-bold tracking-tighter pt-0.5">
              0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
