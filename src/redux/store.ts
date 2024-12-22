import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Импортируйте ваши редьюсеры здесь
// import someReducer from './features/someSlice';

export const store = configureStore({
  reducer: {
    // Добавьте редьюсеры сюда
    // example: some: someReducer,
  },
});

// Типы для Dispatch и State
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Хуки для работы с типизированным Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
