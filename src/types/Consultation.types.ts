export interface ConsultationFormData {
  name: string;
  phone: string;
  carModel: string;
  question: string;
  preferredTime: string;
}

export interface ConsultationState {
  formData: ConsultationFormData;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
} 