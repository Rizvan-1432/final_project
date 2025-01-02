import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReviewsState, IReview } from '../../types/reviews.types';

const initialState: IReviewsState = {
  reviews: [
    {
      id: 1,
      author: 'Александр',
      date: '2024-03-15',
      rating: 5,
      text: 'Отличный магазин! Купил аккумулятор BOSCH, очень доволен качеством и обслуживанием. Менеджеры помогли с выбором, быстро оформили заказ.',
      carModel: 'Toyota Camry',
      purchaseType: 'Аккумулятор BOSCH',
      userId: 'user2'
    },
    {
      id: 2,
      author: 'Михаил',
      date: '2024-03-14',
      rating: 4,
      text: 'Хороший выбор масел, адекватные цены. Немного задержали доставку, но в целом все хорошо.',
      carModel: 'KIA Rio',
      purchaseType: 'Моторное масло Shell',
      userId: 'user3'
    },
    // Добавьте больше отзывов...
  ],
  loading: false,
  error: null,
  sortBy: 'date',
  filterBy: '',
  editingReview: null,
  currentUserId: 'user1'
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<IReview[]>) => {
      state.reviews = action.payload;
    },
    addReview: (state, action: PayloadAction<IReview>) => {
      state.reviews.unshift(action.payload);
    },
    setSortBy: (state, action: PayloadAction<'date' | 'rating'>) => {
      state.sortBy = action.payload;
    },
    setFilterBy: (state, action: PayloadAction<string>) => {
      state.filterBy = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    deleteReview: (state, action: PayloadAction<number>) => {
      state.reviews = state.reviews.filter(review => review.id !== action.payload);
    },
    setEditingReview: (state, action: PayloadAction<IReview | null>) => {
      state.editingReview = action.payload;
    },
    updateReview: (state, action: PayloadAction<IReview>) => {
      const index = state.reviews.findIndex(review => review.id === action.payload.id);
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    }
  }
});

export const { 
  setReviews, 
  addReview, 
  setSortBy, 
  setFilterBy, 
  setLoading, 
  setError,
  deleteReview,
  setEditingReview,
  updateReview 
} = reviewsSlice.actions;
export default reviewsSlice.reducer; 