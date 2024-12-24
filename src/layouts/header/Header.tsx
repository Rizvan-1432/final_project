import Button from '../../components/Button';
import SliderLine from '../../components/SliderLine';
import Navigation from './Navigation';

const Header = () => {

  return (
    <header className="w-full h-[720px] bg-header">
      <Navigation/>
      <div className="w-[1128px] mx-auto">
        <h1 className='w-[582px] mt-[140px] mb-[52px] text-white text-5xl font-bold'>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
        <Button className="flex items-center justify-center w-[216px] h-[52px] font-bold border-4 border-my-red text-white text-sm">
          ПЕРЕЙТИ В КАТАЛОГ
        </Button>
      </div>
      <div className='mt-[100px] flex justify-center gap-3'>
      <SliderLine className='bg-my-red' />
      <SliderLine className='bg-white' />
      <SliderLine className='bg-white' />
      <SliderLine className='bg-white' />
      </div>
    </header>
  );
};

export default Header;
