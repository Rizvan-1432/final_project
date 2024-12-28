// BasketState.types.ts
import { Product } from './HeaderSearch.types';
import { HeaderSearchState } from './HeaderSearch.types';

export interface BasketItem extends Product {
  quantity: number;
}

export interface BasketState {
  items: BasketItem[];
  isOpen: boolean;
}

export interface RootState {
  basket: BasketState;
  headerSearch: HeaderSearchState;
}
  