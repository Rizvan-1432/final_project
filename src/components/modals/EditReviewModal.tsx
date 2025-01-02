import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview, setEditingReview } from '../../redux/slice/reviewsSlice';
import Modal from '../Modal';
import { ServiceModalProps } from '../../types/Modal.types';
import Button from '../Button';
import { IReview } from '../../types/reviews.types';

interface EditReviewModalProps extends ServiceModalProps {
  review: IReview | null;
}

const EditReviewModal: FC<EditReviewModalProps> = ({ isOpen, onClose, review }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    text: '',
    carModel: '',
    purchaseType: ''
  });

  useEffect(() => {
    if (review) {
      setFormData({
        author: review.author,
        rating: review.rating,
        text: review.text,
        carModel: review.carModel,
        purchaseType: review.purchaseType
      });
    }
  }, [review]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedAuthor = formData.author.trim();
    const trimmedText = formData.text.trim();
    
    if (!trimmedAuthor || !trimmedText || !review) return;
    
    dispatch(updateReview({
      ...review,
      author: trimmedAuthor,
      text: trimmedText,
      rating: formData.rating,
      carModel: formData.carModel.trim(),
      purchaseType: formData.purchaseType.trim()
    }));
    dispatch(setEditingReview(null));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[500px] w-full">
        <h2 className="text-2xl font-bold mb-6">Редактировать отзыв</h2>
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
            Сохранить изменения
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default EditReviewModal; 