import { database } from '../../db/database.ts';

const {banner} = database;

const HomeFirstBanner = () => {
    return (
        <div className='w-164 h-70 bg-my-black-200'>
            <ul className='flex justify-center text-white'>
                {banner.map((el, i) => (
                    <li key={i} className='w-71 h-70 flex flex-col items-center justify-center gap-7 first:bg-my-red'>
                        <img src={el.img} alt="" />
                        <h2 className='text-center text-base w-56'>{el.title}</h2>
                        <img src={el.arrow} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeFirstBanner;