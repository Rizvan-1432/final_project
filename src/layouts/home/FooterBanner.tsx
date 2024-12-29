import { useState } from 'react';
import banner1 from '../../assets/icons/logobanner1.png';
import banner2 from '../../assets/icons/logobanner2.png';
import banner3 from '../../assets/icons/logobanner3.png';
import banner4 from '../../assets/icons/logobanner4.png';
import banner5 from '../../assets/icons/logobanner5.png';
import banner6 from '../../assets/icons/logobanner6.png';
import banner7 from '../../assets/icons/logobanner7.png';
import ArrowUp from '../../components/ArrowUp';


const FooterBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannersToShow = 5;

  const banner = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];
  
  const handleNextBanner = () => {
    if (currentIndex < banner.length - bannersToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handlePreviousBanner = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className="w-164 h-52 flex justify-center items-center">
      <div className="w-128 flex justify-between items-center">
        <ArrowUp className={`-rotate-90 ${currentIndex === 0 ? 'opacity-50' : ''}`} onClick={handlePreviousBanner}/>
        <ul className="flex items-center gap-11">
          {banner.slice(currentIndex, currentIndex + bannersToShow).map((e) => (
            <li key={e}>{e.slice(2) && <img className='blur-0' src={e} alt="" />}</li>
          ))}
        </ul>
        <ArrowUp className={`rotate-90 ${currentIndex >= banner.length - bannersToShow ? 'opacity-50' : ''}`} onClick={handleNextBanner} />
      </div>
    </div>
  );
};

export default FooterBanner;
