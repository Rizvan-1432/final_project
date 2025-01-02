import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Headings from '../components/Headings';
import Button from '../components/Button';

const PartnersPage = () => {
  const { partners, loading, error } = useSelector((state: RootState) => state.partners);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <Breadcrumbs />
        <div className="w-full flex flex-col items-center bg-white">
          <div className="max-w-[1128px] w-full px-4 py-8">
            <Headings className="w-[200px] text-center text-4xl pb-5 font-bold uppercase border-b-4 border-my-red mx-auto mb-8">
              ПАРТНЕРЫ
            </Headings>
            
            <p className="text-xl text-center mb-12">
              Мы гордимся сотрудничеством с ведущими производителями автомобильных компонентов и аксессуаров
            </p>

            <div className="flex flex-wrap justify-center gap-8 max-w-[800px] mx-auto">
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 w-[350px] flex flex-col"
                >
                  <div className="flex-1">
                    <div className="h-40 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">{partner.name}</h3>
                    <p className="text-gray-600 text-center mb-4">{partner.description}</p>
                  </div>
                  {partner.website && (
                    <div className="text-center mt-auto pt-4">
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-my-red hover:text-red-700 transition-colors"
                      >
                        Посетить сайт
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button
                className="w-[236px] h-14 flex items-center justify-center border-4 border-my-red text-black hover:bg-my-red hover:text-white transition-colors font-bold"
                onClick={() => navigate('/catalog')}
              >
                ПЕРЕЙТИ В КАТАЛОГ
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PartnersPage; 