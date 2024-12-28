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
  ],


  products: [
    { name: "Фильтр воздушный", price: 150, brand: "Bosch", batteryCapacity: 0 },
    { name: "Фильтр масляный", price: 120, brand: "Mann", batteryCapacity: 0 },
    { name: "Аккумулятор автомобильный", price: 5000, brand: "Varta", batteryCapacity: 70 },
    { name: "Аккумулятор автомобильный", price: 4500, brand: "Exide", batteryCapacity: 75 },
    { name: "Аккумулятор автомобильный", price: 5200, brand: "Bosch", batteryCapacity: 80 },
    { name: "Амортизатор передний", price: 1200, brand: "KYB", batteryCapacity: 0 },
    { name: "Амортизатор задний", price: 1200, brand: "KYB", batteryCapacity: 0 },
    { name: "Ремень приводной", price: 400, brand: "ContiTech", batteryCapacity: 0 },
    { name: "Колодки тормозные передние", price: 800, brand: "Ferodo", batteryCapacity: 0 },
    { name: "Колодки тормозные задние", price: 750, brand: "Ferodo", batteryCapacity: 0 },
    { name: "Тормозные диски передние", price: 1500, brand: "Zimmermann", batteryCapacity: 0 },
    { name: "Тормозные диски задние", price: 1400, brand: "Zimmermann", batteryCapacity: 0 },
    { name: "Шаровая опора", price: 500, brand: "Lemforder", batteryCapacity: 0 },
    { name: "Рулевой наконечник", price: 600, brand: "TRW", batteryCapacity: 0 },
    { name: "Насос топливный", price: 2500, brand: "Bosch", batteryCapacity: 0 },
    { name: "Стартер автомобильный", price: 3500, brand: "Denso", batteryCapacity: 0 },
    { name: "Генератор автомобильный", price: 4500, brand: "Valeo", batteryCapacity: 0 },
    { name: "Фары передние", price: 2500, brand: "Hella", batteryCapacity: 0 },
    { name: "Фары задние", price: 2200, brand: "Hella", batteryCapacity: 0 },
    { name: "Покрышка автомобильная", price: 3000, brand: "Michelin", batteryCapacity: 0 },
    { name: "Резина зимняя", price: 3500, brand: "Nokian", batteryCapacity: 0 },
    { name: "Топливный фильтр", price: 500, brand: "Mann", batteryCapacity: 0 },
    { name: "Масляный фильтр", price: 250, brand: "Mann", batteryCapacity: 0 },
    { name: "Сцепление", price: 3000, brand: "LUK", batteryCapacity: 0 },
    { name: "Пружины подвески", price: 1800, brand: "Eibach", batteryCapacity: 0 },
    { name: "Подшипник ступицы", price: 1200, brand: "SKF", batteryCapacity: 0 },
    { name: "Клапан EGR", price: 2500, brand: "Pierburg", batteryCapacity: 0 },
    { name: "Катализатор", price: 7000, brand: "Bosal", batteryCapacity: 0 },
    { name: "Радиатор охлаждения", price: 3500, brand: "Behr", batteryCapacity: 0 },
    { name: "Конденсатор кондиционера", price: 1500, brand: "Valeo", batteryCapacity: 0 },
    { name: "Термостат", price: 800, brand: "Gates", batteryCapacity: 0 },
    { name: "Кожух мотора", price: 2000, brand: "Mann", batteryCapacity: 0 },
    { name: "Трубка кондиционера", price: 1500, brand: "Denso", batteryCapacity: 0 },
    { name: "Фильтр салона", price: 600, brand: "Mann", batteryCapacity: 0 },
    { name: "Лампы галогенные", price: 500, brand: "Osram", batteryCapacity: 0 },
    { name: "Лампы LED", price: 1000, brand: "Philips", batteryCapacity: 0 },
    { name: "Комплект свечей зажигания", price: 1200, brand: "Bosch", batteryCapacity: 0 },
    { name: "Свечи накала", price: 700, brand: "Beru", batteryCapacity: 0 },
    { name: "Трос стояночного тормоза", price: 400, brand: "ATE", batteryCapacity: 0 },
    { name: "Педаль акселератора", price: 1500, brand: "Valeo", batteryCapacity: 0 }
    // не стал добавлять все и вся
  ]

};
