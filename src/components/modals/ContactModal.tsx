import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceModalProps } from '../../types/Modal.types';
import { IContactForm } from '../../types/Contact.types';
import { setFormData, setLoading, setError, setSuccess, resetForm } from '../../redux/slice/contactSlice';
import { RootState } from '../../redux/store';
import Modal from '../Modal';
import Button from '../Button';

const ContactModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state: RootState) => state.contact);
  const [localForm, setLocalForm] = useState<IContactForm>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocalForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      dispatch(setFormData(localForm));
      
      // Здесь будет логика отправки данных на сервер
      await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
      
      dispatch(setSuccess(true));
      setLocalForm({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
        dispatch(resetForm());
      }, 1500);
    } catch (err) {
      dispatch(setError(err instanceof Error ? err.message : 'Произошла ошибка'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-8 rounded-lg max-w-[600px] w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Задать вопрос
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Сообщение успешно отправлено!
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={localForm.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-my-red focus:outline-none text-black"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={localForm.phone}
                onChange={handleChange}
                placeholder="Ваш телефон"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-my-red focus:outline-none text-black"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={localForm.email}
                onChange={handleChange}
                placeholder="Ваш email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-my-red focus:outline-none text-black"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={localForm.message}
                onChange={handleChange}
                placeholder="Введите ваше сообщение..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-my-red focus:outline-none min-h-[150px] resize-none text-black"
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <Button 
              type="submit"
              disabled={loading}
              className={`w-full h-[52px] flex items-center justify-center border-4 border-my-red text-black hover:bg-my-red hover:text-white transition-colors font-bold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center pt-2">
            Нажимая кнопку «Отправить», вы соглашаетесь с условиями обработки персональных данных
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal; 