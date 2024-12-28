import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketState, BasketItem } from '../../types/BasketState.types';
import { Product } from '../../types/HeaderSearch.types';

const initialState: BasketState = {
  items: [],
  isOpen: false,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => 
        item.name === action.payload.name && item.brand === action.payload.brand
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action: PayloadAction<BasketItem>) => {
      state.items = state.items.filter(item => 
        !(item.name === action.payload.name && item.brand === action.payload.brand)
      );
    },
    toggleBasket: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToBasket, removeFromBasket, toggleBasket } = basketSlice.actions;
export default basketSlice.reducer;
