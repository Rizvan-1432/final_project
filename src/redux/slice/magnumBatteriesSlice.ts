import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMagnumBatteriesState, IMagnumBattery } from '../../types/magnumBatteries.types';
import batteryImage from '../../assets/img/batteryvarta.jpg';

const initialState: IMagnumBatteriesState = {
  batteries: [
    {
      id: 1,
      model: 'MAGNUM 60.0 LA',
      capacity: 60,
      voltage: 12,
      price: 5500,
      image: batteryImage,
      inStock: true,
      shortDescription: 'Идеально подходит для легковых автомобилей среднего класса'
    },
    {
      id: 2,
      model: 'MAGNUM 75.0 LA',
      capacity: 75,
      voltage: 12,
      price: 6800,
      image: batteryImage,
      inStock: true,
      shortDescription: 'Оптимальный выбор для автомобилей с высоким энергопотреблением'
    },
    {
      id: 3,
      model: 'MAGNUM 90.0 LA',
      capacity: 90,
      voltage: 12,
      price: 8200,
      image: batteryImage,
      inStock: true,
      shortDescription: 'Мощный аккумулятор для крупных внедорожников и коммерческого транспорта'
    }
  ],
  selectedBattery: null,
  loading: false,
  error: null
};

const magnumBatteriesSlice = createSlice({
  name: 'magnumBatteries',
  initialState,
  reducers: {
    setBatteries: (state, action: PayloadAction<IMagnumBattery[]>) => {
      state.batteries = action.payload;
    },
    setSelectedBattery: (state, action: PayloadAction<IMagnumBattery | null>) => {
      state.selectedBattery = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setBatteries, setSelectedBattery, setLoading, setError } = magnumBatteriesSlice.actions;
export default magnumBatteriesSlice.reducer; 