export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
} 