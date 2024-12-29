import Footer from '../layouts/Footer';
import Header from '../layouts/header/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import licenseimg from '../assets/img/licenseimg.png';
import zert from '../assets/img/zert.jpg';
import licensecerti from '../assets/icons/licensecerti.svg';

const LicensePage = () => {
  const LicenseCard = () => (
    <div className='w-[312px] h-[380px] flex flex-col items-center justify-center'>
      <img src={licensecerti} alt="certificate" className="mb-8" />
      <div className="w-[220px] h-[120px] flex items-center justify-center">
        <p className="text-lg font-medium font-Geometria text-[24px]">Официальный дистрибьютор материалов марки ELF</p>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className="max-w-[1128px] mx-auto flex flex-col items-center mt-22 mb-11">
        <h2 className="text-4xl font-bold">ЛИЦЕНЗИИ</h2>
        <div className="w-[248px] h-[4px] bg-my-red mt-5"></div>
      </div>
      <div className="max-w-[1128px] mx-auto flex flex-col items-center">
        <div className="flex justify-between w-full mb-6">
          <div className="w-[360px] h-[466px] flex items-center justify-center p-4 text-center">
            <LicenseCard />
          </div>
          <div className="relative w-[360px] h-[466px]">
            <img 
              src={licenseimg} 
              alt="Лицензия" 
              className="w-[360px] h-[466px] object-cover" 
            />
            <img 
              src={zert} 
              alt="Сертификат" 
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[168px] h-[234px]" 
            />
          </div>
          <div className="w-[360px] h-[466px] flex items-center justify-center p-4 text-center">
            <LicenseCard />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div 
              key={index} 
              className="w-[360px] h-[466px] flex items-center justify-center p-4 text-center"
            >
              <LicenseCard />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LicensePage;