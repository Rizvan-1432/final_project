import Button from '../components/Button';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="w-full h-[720px] bg-header">
      <Navigation />
      <div className="w-[1128px] mx-auto">
        <h1 className='w-[582px] mt-[155px] text-white text-[48px]'>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
        <Button className="flex items-center justify-center w-[216px] border-4 border-my-red text-white">
          ПЕРЕЙТИ В КАТАЛОГ
        </Button>
      </div>
    </header>
  );
};

export default Header;
