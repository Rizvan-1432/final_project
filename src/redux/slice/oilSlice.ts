import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOilState, IOil } from '../../types/oil.types';

const initialState: IOilState = {
  oils: [],
  loading: false,
  error: null,
  selectedOil: null
};

const oilSlice = createSlice({
  name: 'oil',
  initialState,
  reducers: {
    setOils: (state, action: PayloadAction<IOil[]>) => {
      state.oils = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedOil: (state, action: PayloadAction<IOil | null>) => {
      state.selectedOil = action.payload;
    }
  }
});

export const { setOils, setLoading, setError, setSelectedOil } = oilSlice.actions;
export default oilSlice.reducer; 