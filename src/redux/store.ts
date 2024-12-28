// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import headerSearchReducer from '../redux/slice/HeaderSearchSlice';
import basketReducer from '../redux/slice/basketSlice';

export const store = configureStore({
  reducer: {
    headerSearch: headerSearchReducer, 
    basket: basketReducer,
  },
});

// Типы для Dispatch и State
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Хуки для работы с типизированным Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
