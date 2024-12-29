export interface IAboutCompany {
  id: number;
  title: string;
  description: string;
}

export interface IAboutState {
  aboutData: IAboutCompany | null;
  loading: boolean;
  error: string | null;
  showRequisites: boolean;
  showContactForm: boolean;
} 