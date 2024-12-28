import Button from '../../components/Button';
import Headings from '../../components/Headings';
import { database } from '../../db/database';

const { services } = database;

const Services = () => {
  return (
    <div className="h-[1100px] flex flex-col items-center bg-services text-white">
      <Headings className="w-42 uppercase">услуги</Headings>
      <p className="w-[892px] mt-8 mb-9 text-2xl text-center font-medium">
        Менеджеры компании с радостью ответят на ваши вопросы и помогут с
        выбором продукции.
      </p>
      <div className='flex justify-between'>
      <ul className='flex flex-col'>
        {services.map((e, i) => (
          <li key={i} className="box w-[605px] h-52 pl-10 flex items-center hover:bg-gradient-to-r from-my-red/50 to-my-red/0">
            <div className="flex items-center gap-5">
              <div>
                <img src={e.icon} alt="" />
              </div>
              <div className="w-[352px] text-base">
                <h2 className="font-bold">{e.title}</h2>
                <p className='font-medium'>{e.descr}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
        <div>
          <img src={services[0].img} alt="" />
        </div>
      </div>
      <Button className="mt-8 flex items-center justify-center w-[236px] h-14 font-bold border-4 border-my-red text-white text-sm cursor-pointer">ЗАДАТЬ ВОПРОС</Button>
    </div>
  );
};

export default Services;
