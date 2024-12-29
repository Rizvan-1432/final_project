export interface ContactMessage {
  message: string;
  timestamp: string;
}

export interface ContactState {
  message: string;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export interface IContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface IContactState {
  formData: IContactForm;
  loading: boolean;
  error: string | null;
  success: boolean;
} 