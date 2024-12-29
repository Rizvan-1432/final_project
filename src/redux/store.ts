// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import headerSearchReducer from '../redux/slice/HeaderSearchSlice';
import basketReducer from '../redux/slice/basketSlice';
import batteryReducer from './slice/batterySlice';
import oilReducer from './slice/oilSlice';
import breadcrumbsReducer from './slice/breadcrumbsSlice';
import sparkPlugReducer from './slice/sparkPlugSlice';
import aboutReducer from './slice/aboutSlice';
import contactReducer from './slice/contactSlice';
import licenseReducer from './slice/licenseSlice';

export const store = configureStore({
  reducer: {
    headerSearch: headerSearchReducer, 
    basket: basketReducer,
    battery: batteryReducer,
    oil: oilReducer,
    breadcrumbs: breadcrumbsReducer,
    sparkPlug: sparkPlugReducer,
    about: aboutReducer,
    contact: contactReducer,
    license: licenseReducer,
  },
});

// Типы для Dispatch и State
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Хуки для работы с типизированным Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
