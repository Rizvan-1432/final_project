export interface ILicense {
  id: number;
  title: string;
  image: string;
  certificate?: string;
}

export interface ILicenseState {
  licenses: ILicense[];
  loading: boolean;
  error: string | null;
  selectedLicense: ILicense | null;
} 