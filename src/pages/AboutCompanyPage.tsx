import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import AboutCompany from '../components/AboutCompany';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutCompanyPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <Breadcrumbs />
        <AboutCompany />
        <Footer />
      </div>
    </div>
  );
};

export default AboutCompanyPage; 