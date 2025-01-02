import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const AboutTheCompany = () => {
  return (
    <div className="w-full h-[600px] flex justify-center bg-company">
      <div className="max-w-[1128px] w-full flex flex-col items-center">
        <h2 className="mt-22 text-4xl font-bold text-white">
          НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ
        </h2>
        <p className="w-[892px] mt-8 mb-9 text-2xl text-center text-white font-medium">
          Мы предлагаем лучшие цены на продукцию!
        </p>
        <Link to="/catalog">
          <Button 
            className="w-[236px] h-14 flex items-center justify-center border-4 border-my-red text-white hover:bg-my-red transition-colors font-bold"
          >
            ПЕРЕЙТИ В КАТАЛОГ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutTheCompany;
