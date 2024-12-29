export interface IBattery {
  id: number;
  title: string;
  brand: string;
  capacity: number;
  voltage: number;
  price: number;
  image: string;
  inStock: boolean;
}

export interface IBatteryState {
  batteries: IBattery[];
  loading: boolean;
  error: string | null;
  selectedBattery: IBattery | null;
  filters: {
    brand: string;
    minCapacity: number;
    maxCapacity: number;
    minPrice: number;
    maxPrice: number;
  };
} 