export interface IOil {
  id: number;
  title: string;
  brand: string;
  type: string;  // Тип масла (синтетическое, полусинтетическое и т.д.)
  viscosity: string;  // Вязкость (например, 5W-40)
  volume: number;  // Объем в литрах
  price: number;
  image: string;
  inStock: boolean;
}

export interface IOilState {
  oils: IOil[];
  loading: boolean;
  error: string | null;
  selectedOil: IOil | null;
} 