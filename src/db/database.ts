import banner1 from '../assets/icons/banner1.svg';
import banner2 from '../assets/icons/banner2.svg';
import banner3 from '../assets/icons/banner3.svg';
import banner4 from '../assets/icons/banner4.svg';
import card1 from '../assets/img/carAccessories1.png';
import card2 from '../assets/img/carAccessories2.png';
import card3 from '../assets/img/carAccessories3.png';
import card4 from '../assets/img/carAccessories4.png';
import card5 from '../assets/img/carAccessories5.png';
import card6 from '../assets/img/carAccessories6.png';
import servicesicon1 from '../assets/icons/services1.svg';
import servicesicon2 from '../assets/icons/services2.svg';
import servicesicon3 from '../assets/icons/services3.svg';
import services1 from '../assets/img/services1.png';
import services2 from '../assets/img/services2.png';
import services3 from '../assets/img/services3.png';
import newscard1 from '../assets/img/newscard1.png';
import newscard2 from '../assets/img/newscard2.png';
import newscard3 from '../assets/img/newscard3.png';

export const database = {
  banner: [
    {
      title: 'Наличный и безналичный расчет',
      img: banner1,
    },
    {
      title: 'Техническая помощь и консультация',
      img: banner2,
    },
    {
      title: 'Только качественная и проверенная продукция',
      img: banner3,
      arrow: true,
    },
    {
      title: 'Мы всегда на связи с 9:00 до 18:00!',
      img: banner4,
      arrow: true,
    },
  ],
  carCard: [
    {
      title: 'АККУМУЛЯТОРЫ',
      img: card1,
    },
    {
      title: 'АККУМУЛЯТОРЫ',
      img: card2,
    },
    {
      title: 'АККУМУЛЯТОРЫ',
      img: card3,
    },
    { 
      title: 'АККУМУЛЯТОРЫ',
      img: card4 },
    {
      title: 'АККУМУЛЯТОРЫ',
      img: card5,
    },
    {
      title: 'АККУМУЛЯТОРЫ',
      img: card6,
    },
  ],
  services: [
    {
      icon: servicesicon1,
      img: services1,
      title: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА',
      descr: 'Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. '
    },
    {
      icon: servicesicon2,
      img: services2,
      title: 'ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ',
      descr: 'Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!'
    },
    {
      icon: servicesicon3,
      img: services3,
      title: 'БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА',
      descr: 'Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!'
    },
  ],
  news: [
    {
      date: '12 февраля 2020 года',
      text: 'У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!',
      img: newscard1
    },
    {
      date: '10 февраля 2020 года',
      text: 'ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA ',
      img: newscard2
    },
    {
      date: '5 февраля 2020 года',
      text: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE',
      img: newscard3
    }
  ]
};
