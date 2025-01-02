export interface IReview {
  id: number;
  author: string;
  text: string;
  date: string;
  rating: number;
  carModel: string;
  purchaseType: string;
  userId: string;
}

export interface IReviewsState {
  reviews: IReview[];
  loading: boolean;
  error: string | null;
  userId: string | null;
  sortBy: 'date' | 'rating';
  filterBy: string;
  editingReview: IReview | null;
} 