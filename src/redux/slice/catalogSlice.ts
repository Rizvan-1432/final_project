// redux/slice/catalogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICatalogState, ICatalogItem } from '../../types/catalog.types';

const initialState: ICatalogState = {
  categories: [
    {
      id: 1,
      title: 'АККУМУЛЯТОРЫ',
      subcategories: [
        { id: 1, title: 'АКБ MAGNUM', path: '/batteries/magnum' },
        { id: 2, title: 'АКБ ЗВЕРЬ', path: '/batteries/zver' },
        { id: 3, title: 'ТЮМЕНСКИЙ АККУМУЛЯТОРНЫЙ ЗАВОД', path: '/batteries/tyumen' },
        { id: 4, title: 'АКБ AKOM', path: '/batteries/akom' },
        { id: 5, title: 'АКБ BARS', path: '/batteries/bars' },
        { id: 6, title: 'ТЮМЕНСКИЙ МЕДВЕДЬ', path: '/batteries/tyumen-bear' },
        { id: 7, title: 'АКБ ENRUN', path: '/batteries/enrun' },
        { id: 8, title: 'АКБ UNIX (WESTA)', path: '/batteries/unix' },
        { id: 9, title: 'АКБ EDCON', path: '/batteries/edcon' },
        { id: 10, title: 'АКБ AFA', path: '/batteries/afa' },
        { id: 11, title: 'АКБ BOSCH', path: '/batteries/bosch' },
        { id: 12, title: 'АКБ MUTLU', path: '/batteries/mutlu' },
        { id: 13, title: 'ОРИГИНАЛЬНЫЕ АКБ', path: '/batteries/original' },
        { id: 14, title: 'ГЕЛИЕВЫЕ АКБ OPTIMA', path: '/batteries/optima' }
      ]
    },
    {
      id: 2,
      title: 'АВТОМАСЛА',
      subcategories: [
        { id: 1, title: 'Моторные масла', path: '/oils/motor' },
        { id: 2, title: 'Трансмиссионные масла', path: '/oils/transmission' },
        { id: 3, title: 'Гидравлические масла', path: '/oils/hydraulic' }
      ]
    },
    {
      id: 3,
      title: 'АКСЕССУАРЫ',
      subcategories: [
        { id: 1, title: 'Щетки стеклоочистителя', path: '/accessories/wipers' },
        { id: 2, title: 'Провода прикуривания', path: '/accessories/jumper-cables' },
        { id: 3, title: 'Зарядные устройства', path: '/accessories/chargers' }
      ]
    },
    {
      id: 4,
      title: 'АВТОХИМИЯ',
      subcategories: [
        { id: 1, title: 'Очистители', path: '/autochemistry/cleaners' },
        { id: 2, title: 'Антифризы', path: '/autochemistry/antifreeze' },
        { id: 3, title: 'Тормозные жидкости', path: '/autochemistry/brake-fluid' }
      ]
    }
  ],
  activeCategory: null,
  loading: false,
  error: null
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<ICatalogItem | null>) => {
      state.activeCategory = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setActiveCategory, setLoading, setError } = catalogSlice.actions;
export default catalogSlice.reducer;
