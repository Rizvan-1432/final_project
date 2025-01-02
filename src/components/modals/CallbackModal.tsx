import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';
import { ServiceModalProps } from '../../types/Modal.types';
import Button from '../Button';
import { addCallbackRequest } from '../../redux/slice/callbackSlice';

const CallbackModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name?.trim();
    const phone = formData.phone?.trim();
    
    if (!name || !phone) return;
    
    dispatch(addCallbackRequest({
      name,
      phone,
      time: formData.time?.trim() || ''
    }));

    // Показываем уведомление
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 shadow-lg z-50';
    notification.textContent = 'Заявка на звонок отправлена';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2000);

    onClose();
    setFormData({ name: '', phone: '', time: '' });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[400px] w-full">
        <h2 className="text-2xl font-bold mb-6">Заказать звонок</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Удобное время для звонка"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <Button 
            type="submit"
            className="w-full bg-my-red text-white p-2 rounded hover:bg-red-700 transition-colors"
          >
            Заказать звонок
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CallbackModal; 