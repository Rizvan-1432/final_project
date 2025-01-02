import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPartnersState, IPartner } from '../../types/partners.types';

const initialState: IPartnersState = {
  partners: [
    {
      id: 1,
      name: 'BOSCH',
      logo: '/src/assets/img/batteryvarta.jpg',
      description: 'Ведущий мировой поставщик технологий и услуг в области автомобильных компонентов.',
      website: 'https://www.bosch.com'
    },
    {
      id: 2,
      name: 'VARTA',
      logo: '/src/assets/img/batteryvarta.jpg',
      description: 'Один из крупнейших производителей аккумуляторных батарей в Европе.',
      website: 'https://www.varta-automotive.com'
    },
    // Добавьте других партнеров
  ],
  loading: false,
  error: null
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    setPartners: (state, action: PayloadAction<IPartner[]>) => {
      state.partners = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setPartners, setLoading, setError } = partnersSlice.actions;
export default partnersSlice.reducer; 