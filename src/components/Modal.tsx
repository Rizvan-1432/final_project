import { FC } from 'react';
import { ModalProps } from '../types/Modal.types';
import close from '../assets/icons/close.svg';

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <img src={close} alt="close" className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 