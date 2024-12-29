import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBatteryState, IBattery } from '../../types/battery.types';

const initialState: IBatteryState = {
  batteries: [],
  loading: false,
  error: null,
  selectedBattery: null,
  filters: {
    brand: '',
    minCapacity: 0,
    maxCapacity: 1000,
    minPrice: 0,
    maxPrice: 100000
  }
};

const batterySlice = createSlice({
  name: 'battery',
  initialState,
  reducers: {
    setBatteries: (state, action: PayloadAction<IBattery[]>) => {
      state.batteries = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedBattery: (state, action: PayloadAction<IBattery | null>) => {
      state.selectedBattery = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<IBatteryState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    }
  }
});

export const {
  setBatteries,
  setLoading,
  setError,
  setSelectedBattery,
  updateFilters,
  resetFilters
} = batterySlice.actions;

export default batterySlice.reducer; 