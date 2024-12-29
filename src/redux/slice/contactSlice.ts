import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContactState, IContactForm } from '../../types/Contact.types';

const initialState: IContactState = {
  formData: {
    name: '',
    phone: '',
    email: '',
    message: ''
  },
  loading: false,
  error: null,
  success: false
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IContactForm>) => {
      state.formData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.error = null;
      state.success = false;
    }
  }
});

export const { setFormData, setLoading, setError, setSuccess, resetForm } = contactSlice.actions;
export default contactSlice.reducer; 