import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ConsultationState, ConsultationFormData } from '../../types/Consultation.types';

const initialState: ConsultationState = {
  formData: {
    name: '',
    phone: '',
    carModel: '',
    question: '',
    preferredTime: '',
  },
  isLoading: false,
  error: null,
  successMessage: null,
};

export const submitConsultation = createAsyncThunk(
  'consultation/submit',
  async (formData: ConsultationFormData) => {
    // Здесь будет API запрос
    // Имитация задержки
    await new Promise(resolve => setTimeout(resolve, 1000));
    return formData;
  }
);

const consultationSlice = createSlice({
  name: 'consultation',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<ConsultationFormData>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.error = null;
      state.successMessage = null;
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitConsultation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitConsultation.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = 'Ваша заявка успешно отправлена!';
        state.formData = initialState.formData;
      })
      .addCase(submitConsultation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Произошла ошибка при отправке';
      });
  },
});

export const { updateFormData, resetForm, clearMessages } = consultationSlice.actions;
export default consultationSlice.reducer; 