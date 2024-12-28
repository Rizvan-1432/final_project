import logo from '../assets/img/logo.png';
import tel from '../assets/icons/tel.svg';
import email from '../assets/icons/email.svg';
import Button from '../components/Button';

const Footer = () => {
  return (
    <div className="w-164 h-[342px] flex justify-center bg-footer text-white font-medium">
      <div className="w-128 pt-[54px] flex">
        <div className="w-69">
          <img src={logo} alt="" />
          <h2 className="mt-12 opacity-50">
            © 2019 PRO Auto.
            <br />
            Все права защищены.
          </h2>
        </div>
        <nav className="w-[574px] flex justify-between">
          <ul className="max-w-[130px] flex flex-col gap-4">
            <li className="mb-1">КОМПАНИЯ</li>
            <li className="text-xs opacity-50">О КОМПАНИИ</li>
            <li className="text-xs opacity-50">ЛИЦЕНЗИИ</li>
            <li className="text-xs opacity-50">ПАРТНЕРЫ</li>
            <li className="text-xs opacity-50">ОТЗЫВЫ КЛИЕНТОВ</li>
            <li className="text-xs opacity-50">РЕКВИЗИТЫ</li>
            <li className="text-xs opacity-50">ВАКАНСИИ</li>
          </ul>
          <ul className="max-w-[130px] flex flex-col gap-4">
            <li className="mb-1">КАТАЛОГ</li>
            <li className="text-xs opacity-50">АККУМУЛЯТОРЫ</li>
            <li className="text-xs opacity-50">АВТОМАСЛА</li>
            <li className="text-xs opacity-50">АКСЕССУАРЫ</li>
            <li className="text-xs opacity-50">АВТОХИМИЯ</li>
          </ul>
          <ul className="max-w-[130px] flex flex-col gap-4">
            <li className="mb-1">УСЛУГИ</li>
            <li className="text-xs opacity-50">ДИАГНОСТИКА АККУМУЛЯТОРА</li>
            <li className="text-xs opacity-50">ПРИЕМ АККУМУЛЯТОРОВ</li>
          </ul>
          <ul className="max-w-[130px] flex flex-col gap-4">
            <li className="mb-1">ИНФОРМАЦИЯ</li>
            <li className="text-xs opacity-50">АКЦИИ</li>
            <li className="text-xs opacity-50">НОВОСТИ</li>
            <li className="text-xs opacity-50">СТАТЬИ</li>
            <li className="text-xs opacity-50">ВОПРОС - ОТВЕТ</li>
          </ul>
        </nav>
        <div className="flex flex-col gap-5 items-start ml-[70px]">
          <div className='flex flex-col gap-3'>
            <div className="flex gap-2">
              <img src={tel} alt="" />
              <h2>+7 (342) 279-36-13</h2>
            </div>
            <div className="flex gap-2">
              <img src={email} alt="" />
              <h2>proauto59@yandex.ru</h2>
            </div>
          </div>
          <Button className="w-44 h-10 text-xs">ЗАКАЗАТЬ ЗВОНОК</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
