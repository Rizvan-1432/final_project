import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../redux/slice/reviewsSlice';
import Modal from '../Modal';
import { ServiceModalProps } from '../../types/Modal.types';
import Button from '../Button';
import { RootState } from '../../redux/store';

const AddReviewModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { userId: currentUserId } = useSelector((state: RootState) => state.reviews);
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    text: '',
    carModel: '',
    purchaseType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const author = formData.author?.trim();
    const text = formData.text?.trim();
    
    if (!author || !text) return;
    
    dispatch(addReview({
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      author,
      text,
      rating: formData.rating,
      carModel: formData.carModel?.trim() ?? '',
      purchaseType: formData.purchaseType?.trim() ?? '',
      userId: currentUserId || 'user1'
    }));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[500px] w-full">
        <h2 className="text-2xl font-bold mb-6">Оставить отзыв</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex items-center gap-2">
            <span>Оценка:</span>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
              className="p-2 border rounded"
            >
              {[5, 4, 3, 2, 1].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Модель автомобиля"
            value={formData.carModel}
            onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Что приобрели"
            value={formData.purchaseType}
            onChange={(e) => setFormData({ ...formData, purchaseType: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Ваш отзыв"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="w-full p-2 border rounded h-32"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-my-red text-white p-2 rounded hover:bg-red-700 transition-colors"
          >
            Отправить отзыв
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddReviewModal; 