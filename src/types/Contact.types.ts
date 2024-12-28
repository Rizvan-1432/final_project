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