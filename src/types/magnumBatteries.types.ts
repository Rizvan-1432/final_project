export interface IMagnumBattery {
  id: number;
  model: string;
  capacity: number;
  voltage: number;
  price: number;
  image: string;
  inStock: boolean;
  shortDescription: string;
}

export interface IMagnumBatteriesState {
  batteries: IMagnumBattery[];
  selectedBattery: IMagnumBattery | null;
  loading: boolean;
  error: string | null;
} 