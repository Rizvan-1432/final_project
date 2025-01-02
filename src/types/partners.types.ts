export interface IPartner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

export interface IPartnersState {
  partners: IPartner[];
  loading: boolean;
  error: string | null;
} 