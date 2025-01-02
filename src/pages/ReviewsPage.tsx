import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setSortBy, deleteReview, setEditingReview } from '../redux/slice/reviewsSlice';
import Header from '../layouts/header/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Headings from '../components/Headings';
import Button from '../components/Button';
import AddReviewModal from '../components/modals/AddReviewModal';
import EditReviewModal from '../components/modals/EditReviewModal';
import { IReview } from '../types/reviews.types';

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const { 
    reviews, 
    sortBy, 
    loading, 
    error, 
    editingReview,
    currentUserId 
  } = useSelector((state: RootState) => state.reviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSort = (value: 'date' | 'rating') => {
    dispatch(setSortBy(value));
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  const handleDeleteReview = (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот отзыв?')) {
      dispatch(deleteReview(id));
    }
  };

  const handleEditReview = (review: IReview) => {
    dispatch(setEditingReview(review));
    setIsEditModalOpen(true);
  };

  const canEditReview = (review: IReview) => {
    return currentUserId === review.userId;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1640px]">
        <Header />
        <Breadcrumbs />
        <div className="w-full flex flex-col items-center bg-white">
          <div className="max-w-[1128px] w-full px-4 py-8">
            <Headings className="w-[400px] text-center text-4xl pb-5 font-bold uppercase border-b-4 border-my-red mx-auto mb-8">
              ОТЗЫВЫ КЛИЕНТОВ
            </Headings>

            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value as 'date' | 'rating')}
                  className="p-2 border rounded"
                >
                  <option value="date">По дате</option>
                  <option value="rating">По оценке</option>
                </select>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-my-red text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Оставить отзыв
              </Button>
            </div>

            <div className="space-y-6">
              {sortedReviews.map((review) => (
                <div 
                  key={review.id}
                  className="bg-white rounded-lg shadow-lg p-6 relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{review.author}</h3>
                      <p className="text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      {canEditReview(review) && (
                        <>
                          <button
                            onClick={() => handleEditReview(review)}
                            className="text-gray-400 hover:text-blue-500 mr-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteReview(review.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {(review.carModel || review.purchaseType) && (
                    <div className="mb-4 text-sm text-gray-600">
                      {review.carModel && <p>Автомобиль: {review.carModel}</p>}
                      {review.purchaseType && <p>Покупка: {review.purchaseType}</p>}
                    </div>
                  )}
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
        <AddReviewModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <EditReviewModal 
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            dispatch(setEditingReview(null));
          }}
          review={editingReview}
        />
      </div>
    </div>
  );
};

export default ReviewsPage; 