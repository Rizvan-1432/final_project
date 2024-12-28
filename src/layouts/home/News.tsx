import ArrowRight from '../../components/ArrowRight';
import Button from '../../components/Button';
import Headings from '../../components/Headings';
import { database } from '../../db/database';
import ArrowUp from '../../components/ArrowUp';
const { news } = database;

const News = () => {
  return (
    <div className="w-164 h-[870px] flex flex-col items-center bg-my-gray-100 relative">
      <div className="w-128 flex flex-col items-center">
        <Headings className="w-[216px] mb-[74px] ">новости</Headings>
        <ul className="flex gap-6">
          {news.map((e, i) => (
            <li key={i} className="w-91 h-[422px]">
              <img src={e.img} alt="" />
              <div className="flex flex-col justify-between pt-3 pb-4 px-5 w-91 h-[138px] bg-my-black-100">
                <span className="text-my-red text-xs font-medium">
                  {e.date}
                </span>
                <h2 className="text-base text-white font-bold">{e.text}</h2>
                <div className="self-end">
                  <ArrowRight color='#C53720' />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button className='w-[236px] h-14 text-sm uppercase text-my-red mt-[72px]'>Читать все новости</Button>
      </div>
      <div className='flex flex-col gap-3 absolute bottom-[38px] right-[42px]'>
        <ArrowUp className=''/>
        <ArrowUp className='rotate-180'/>
      </div>
    </div>
  );
};

export default News;
