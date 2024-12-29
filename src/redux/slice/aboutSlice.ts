import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAboutState, IAboutCompany } from '../../types/about.types';

const initialState: IAboutState = {
  aboutData: null,
  loading: false,
  error: null,
  showRequisites: false,
  showContactForm: false
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setAboutData: (state, action: PayloadAction<IAboutCompany>) => {
      state.aboutData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    toggleRequisites: (state) => {
      state.showRequisites = !state.showRequisites;
    },
    toggleContactForm: (state) => {
      state.showContactForm = !state.showContactForm;
    }
  }
});

export const {
  setAboutData,
  setLoading,
  setError,
  toggleRequisites,
  toggleContactForm
} = aboutSlice.actions;

export default aboutSlice.reducer; 