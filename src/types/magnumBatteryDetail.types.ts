export interface IMagnumBatteryDetail {
  id: number;
  model: string;
  capacity: number;
  voltage: number;
  price: number;
  image: string;
  images: string[];
  inStock: boolean;
  shortDescription: string;
  specifications: {
    polarity: string;
    terminals: string;
    length: number;
    width: number;
    height: number;
    weight: number;
    startingCurrent: number;
  };
  features: string[];
  warranty: string;
  applications: string[];
  recommendations: string[];
}

export interface IMagnumBatteryDetailState {
  battery: IMagnumBatteryDetail | null;
  loading: boolean;
  error: string | null;
} 

export interface IMagnumBatteryDetailState {
  battery: IMagnumBatteryDetail | null;
  loading: boolean;
  error: string | null;
} 