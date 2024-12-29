export interface ISparkPlug {
  id: number;
  title: string;
  brand: string;
  model: string;
  type: string;  // Тип свечи
  thread: string;  // Размер резьбы
  price: number;
  image: string;
  inStock: boolean;
}

export interface ISparkPlugState {
  sparkPlugs: ISparkPlug[];
  loading: boolean;
  error: string | null;
  selectedSparkPlug: ISparkPlug | null;
} 