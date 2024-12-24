import CarAccessories from '../layouts/home/CarAccessories';
import HomeFirstBanner from '../layouts/home/HomeFirstBanner';
import Services from '../layouts/home/Services';

const HomePage = () => {
  return (
    <div className="text-2xl">
      <HomeFirstBanner />
      <CarAccessories />
      <Services />
    </div>
  );
};

export default HomePage;
