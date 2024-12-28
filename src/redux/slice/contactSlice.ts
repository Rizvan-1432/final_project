import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ContactState } from '../../types/Contact.types';

const initialState: ContactState = {
  message: '',
  isLoading: false,
  error: null,
  success: false
};

export const sendMessage = createAsyncThunk(
  'contact/sendMessage',
  async (message: string) => {
    // Имитация отправки на сервер
    await new Promise(resolve => setTimeout(resolve, 1000));
    return message;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetContactState: (state) => {
      state.message = '';
      state.error = null;
      state.success = false;
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.message = '';
      })
      .addCase(sendMessage.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Ошибка при отправке сообщения';
      });
  }
});

export const { setMessage, resetContactState } = contactSlice.actions;
export default contactSlice.reducer; 