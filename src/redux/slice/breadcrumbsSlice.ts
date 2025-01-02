import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBreadcrumbsState, IBreadcrumb } from '../../types/breadcrumbs.types';

const initialState: IBreadcrumbsState = {
  currentPath: '/',
  breadcrumbs: [{ path: '/', label: 'Главная' }]
};

const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
    setBreadcrumbs: (state, action: PayloadAction<IBreadcrumb[]>) => {
      state.breadcrumbs = action.payload;
    },
    addBreadcrumb: (state, action: PayloadAction<IBreadcrumb>) => {
      state.breadcrumbs.push(action.payload);
    },
    clearBreadcrumbs: (state) => {
      state.breadcrumbs = [{ path: '/', label: 'Главная' }];
    }
  }
});

export const { setCurrentPath, setBreadcrumbs, addBreadcrumb, clearBreadcrumbs } = breadcrumbsSlice.actions;
export default breadcrumbsSlice.reducer;

export const setBreadcrumbsForMagnumBattery = () => ({
  type: 'breadcrumbs/setBreadcrumbs',
  payload: [
    { path: '/', label: 'Главная' },
    { path: '/batteries', label: 'Аккумуляторы' },
    { path: '', label: 'ПОДРОБНЕЕ' }
  ]
}); 