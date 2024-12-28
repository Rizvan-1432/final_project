import { FC, useState } from 'react';
import { ServiceModalProps } from '../../types/Modal.types';
import Modal from '../Modal';
import Button from '../Button';

const OrderModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки заказа
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccess(true);
    
    // Закрываем модальное окно через 2 секунды
    setTimeout(() => {
      onClose();
      setSuccess(false);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[500px]">
        <h2 className="text-2xl font-bold mb-6">Оформление заказа</h2>
        {success ? (
          <div className="p-4 bg-green-100 text-green-700 rounded">
            Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-2 border rounded outline-none focus:border-my-red"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full p-2 border rounded outline-none focus:border-my-red"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded outline-none focus:border-my-red"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Адрес доставки"
                className="w-full p-2 border rounded outline-none focus:border-my-red"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Комментарий к заказу"
                className="w-full p-2 border rounded outline-none focus:border-my-red"
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                rows={3}
              />
            </div>
            <Button
              className="w-full p-2 bg-my-red text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Оформление...' : 'Подтвердить заказ'}
            </Button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default OrderModal; 