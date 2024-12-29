export interface Product {
  name: string;
  price: number;
  brand: string;
  batteryCapacity: number;
  quantity?: number;
}

export interface HeaderSearchState {
  filter: {
    minPrice: string;
    maxPrice: string;
    selectedBrand: string;
    batteryCapacity: string;
  };
  searchResults: Product[];
  searchHistory: string[];
}

export interface HeaderSearchProps {
  onClose: () => void;
}
  
  