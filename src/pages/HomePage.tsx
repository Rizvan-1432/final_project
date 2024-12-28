import AboutTheCompany from '../layouts/home/AboutTheCompany';
import CarAccessories from '../layouts/home/CarAccessories';
import FooterBanner from '../layouts/home/FooterBanner';
import HomeFirstBanner from '../layouts/home/HomeFirstBanner';
import News from '../layouts/home/News';
import Services from '../layouts/home/Services';

const HomePage = () => {
  return (
    <div className="">
      <HomeFirstBanner />
      <CarAccessories />
      <Services />
      <AboutTheCompany />
      <News />
      <FooterBanner />
    </div>
  );
};

export default HomePage;
