import ArrowRight from '../../components/ArrowRight.tsx';
import { database } from '../../db/database.ts';

const { banner } = database;

const HomeFirstBanner = () => {
  return (
    <div className="w-164 h-70 bg-my-black-200">
      <ul className="flex justify-center text-white">
        {banner.map((el, i) => (
          <li
            key={i}
            className="background w-71 h-70 flex flex-col items-center pt-10 gap-6"
            
          >
            <img src={el.img} alt="" />
            <h2 className="text-center text-base font-medium w-56">{el.title}</h2>
            {el.arrow && <ArrowRight color='#fff' />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeFirstBanner;
