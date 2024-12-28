import { FC, useState } from 'react';
import { ServiceModalProps } from '../../types/Modal.types';
import Modal from '../Modal';
import Button from '../Button';

const ConsultationModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    question: '',
    preferredTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных
    console.log(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="p-8 max-w-[500px] w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Получить консультацию</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full p-2 border rounded outline-none focus:border-my-red"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full p-2 border rounded outline-none focus:border-my-red"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Модель автомобиля"
            className="w-full p-2 border rounded outline-none focus:border-my-red"
            value={formData.carModel}
            onChange={(e) => setFormData({...formData, carModel: e.target.value})}
          />
          <textarea
            placeholder="Ваш вопрос"
            className="w-full p-2 border rounded outline-none focus:border-my-red"
            value={formData.question}
            onChange={(e) => setFormData({...formData, question: e.target.value})}
            required
            rows={4}
          />
          <select
            className="w-full p-2 border rounded outline-none focus:border-my-red"
            value={formData.preferredTime}
            onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
            required
          >
            <option value="">Выберите удобное время</option>
            <option value="9-12">9:00 - 12:00</option>
            <option value="12-15">12:00 - 15:00</option>
            <option value="15-18">15:00 - 18:00</option>
          </select>
          <Button 
            className="w-full bg-my-red text-white py-2 rounded hover:bg-red-700 transition-colors"
            onClick={() => {}}
          >
            Отправить
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ConsultationModal; 