export interface ICatalogItem {
  id: number;
  title: string;
  subcategories: ISubCategory[];
}

export interface ISubCategory {
  id: number;
  title: string;
  path: string;
}

export interface ICatalogState {
  categories: ICatalogItem[];
  activeCategory: ICatalogItem | null;
  loading: boolean;
  error: string | null;
} 