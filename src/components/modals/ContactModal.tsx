import { FC, useEffect, useState } from 'react';
import { ServiceModalProps } from '../../types/Modal.types';
import Modal from '../Modal';
import Button from '../Button';

const ContactModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const [isWorkingHours, setIsWorkingHours] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Проверяем рабочее время при открытии модального окна
    const checkWorkingHours = () => {
      const hours = currentTime.getHours();
      setIsWorkingHours(hours >= 9 && hours < 18);
    };

    // Обновляем время каждую минуту
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      checkWorkingHours();
    }, 60000);

    checkWorkingHours();
    return () => clearInterval(interval);
  }, [currentTime]);

  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки сообщения
    console.log('Сообщение:', message);
    setMessage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[500px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Связаться с нами</h2>
          <div className={`flex items-center ${isWorkingHours ? 'text-green-500' : 'text-red-500'}`}>
            <div className={`w-3 h-3 rounded-full mr-2 ${isWorkingHours ? 'bg-green-500' : 'bg-red-500'}`} />
            {isWorkingHours ? 'Мы онлайн' : 'Нерабочее время'}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-bold mb-4">Контактная информация</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-medium w-24">Телефон:</span>
                <a href="tel:+7XXXXXXXXXX" className="text-my-red hover:underline">
                  +7 (XXX) XXX-XX-XX
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Email:</span>
                <a href="mailto:info@example.com" className="text-my-red hover:underline">
                  info@example.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Адрес:</span>
                <span>г. Город, ул. Примерная, д. 123</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Режим работы:</span>
                <span>9:00 - 18:00</span>
              </p>
            </div>
          </div>

          {isWorkingHours ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold">Отправить сообщение</h3>
              <textarea
                className="w-full p-3 border rounded-lg resize-none focus:border-my-red outline-none"
                rows={4}
                placeholder="Введите ваше сообщение..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button 
                className="w-full bg-my-red text-white py-2 rounded hover:bg-red-700 transition-colors"
                onClick={() => {}}
              >
                Отправить
              </Button>
            </form>
          ) : (
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-gray-600">
                В данный момент мы не работаем. Пожалуйста, свяжитесь с нами в рабочее время: 
                <br />
                <span className="font-medium">9:00 - 18:00</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal; 