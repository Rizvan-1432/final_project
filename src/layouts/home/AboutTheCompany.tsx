import Headings from '../../components/Headings';
import company from '../../assets/img/company.png';
import Button from '../../components/Button';

const AboutTheCompany = () => {
  return (
    <div className="w-164 h-[667px] bg-company flex justify-center">
      <div className='w-128 flex flex-col items-center'>
        <Headings className="w-71 text-white">о компании</Headings>
        <div className="flex gap-6 mt-[74px]">
          <img className='w-[360px] h-[347px]' src={company} alt="" />
          <div className="pt-6 px-7 w-[744px] h-[255px] text-white border-4 border-my-red bg-my-black-200/60">
            <p className='w-[664px] mb-6 text-base font-medium tracking-tight'>
              Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам
              в «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой
              аккумулятор именно для вашего авто! С 1997 года сеть магазинов
              «PRO Auto» занимается продажей автомобильных аккумуляторов, масел,
              расходных материалов, химией и аксессуаров.
            </p>
            <Button className="w-[216px] h-[52px]">УЗНАТЬ БОЛЬШЕ</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheCompany;
