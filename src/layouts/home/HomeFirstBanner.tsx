import { useState } from 'react';
import { database } from '../../db/database';
import PaymentModal from '../../components/modals/PaymentModal';
import ConsultationModal from '../../components/modals/ConsultationModal';
import QualityModal from '../../components/modals/QualityModal';
import ContactModal from '../../components/modals/ContactModal';

const { banner } = database;

const HomeFirstBanner = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleBannerClick = (index: number) => {
    switch(index) {
      case 0:
        setActiveModal('payment');
        break;
      case 1:
        setActiveModal('consultation');
        break;
      case 2:
        setActiveModal('quality');
        break;
      case 3:
        setActiveModal('contact');
        break;
    }
  };

  return (
    <div className="w-full bg-my-black-200">
      <div className="max-w-[1640px] mx-auto">
        <ul className="flex justify-center text-white">
          {banner.map((el, i) => (
            <li
              key={i}
              className="background w-71 h-70 flex flex-col items-center justify-center gap-6 cursor-pointer"
              onClick={() => handleBannerClick(i)}
            >
              <img src={el.img} alt="" />
              <h2 className="text-center text-base font-medium w-56">{el.title}</h2>
              {el.arrow && <img src={el.arrow} alt="" />}
            </li>
          ))}
        </ul>
      </div>

      <PaymentModal 
        isOpen={activeModal === 'payment'} 
        onClose={() => setActiveModal(null)} 
      />
      <ConsultationModal 
        isOpen={activeModal === 'consultation'} 
        onClose={() => setActiveModal(null)} 
      />
      <QualityModal 
        isOpen={activeModal === 'quality'} 
        onClose={() => setActiveModal(null)} 
      />
      <ContactModal 
        isOpen={activeModal === 'contact'} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
};

export default HomeFirstBanner;
