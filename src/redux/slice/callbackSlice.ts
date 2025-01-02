import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICallbackRequest {
  name: string;
  phone: string;
  time: string;
}

interface ICallbackState {
  requests: ICallbackRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: ICallbackState = {
  requests: [],
  loading: false,
  error: null
};

const callbackSlice = createSlice({
  name: 'callback',
  initialState,
  reducers: {
    addCallbackRequest: (state, action: PayloadAction<ICallbackRequest>) => {
      state.requests.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { addCallbackRequest, setLoading, setError } = callbackSlice.actions;
export default callbackSlice.reducer; 