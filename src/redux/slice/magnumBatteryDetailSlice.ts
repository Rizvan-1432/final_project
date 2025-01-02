import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMagnumBatteryDetail } from '../../types/magnumBatteryDetail.types';
import { magnumBattery } from '../../db/database';

export const initialState: {
  battery: IMagnumBatteryDetail;
  loading: boolean;
  error: string | null;
} = {
  battery: magnumBattery,
  loading: false,
  error: null
};

const magnumBatteryDetailSlice = createSlice({
  name: 'magnumBatteryDetail',
  initialState,
  reducers: {
    setBattery: (state, action: PayloadAction<IMagnumBatteryDetail>) => {
      state.battery = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setBattery, setLoading, setError } = magnumBatteryDetailSlice.actions;
export default magnumBatteryDetailSlice.reducer; 