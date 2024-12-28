// HeaderSearchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeaderSearchState } from '../../types/HeaderSearch.types';

const initialState: HeaderSearchState = {
  filter: {
    minPrice: '',
    maxPrice: '',
    selectedBrand: '',
    batteryCapacity: '',
  },
  searchResults: [],
  searchHistory: [],
};

const headerSearchSlice = createSlice({
  name: 'headerSearch',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addToSearchHistory: (state, action: PayloadAction<string>) => {
      const newHistory = [action.payload, ...state.searchHistory.filter(item => item !== action.payload)];
      state.searchHistory = newHistory.slice(0, 5);
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { updateFilter, setSearchResults, addToSearchHistory, clearSearchHistory } = headerSearchSlice.actions;
export default headerSearchSlice.reducer;
