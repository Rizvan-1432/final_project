import { FC } from 'react';
import { ServiceModalProps } from '../../types/Modal.types';
import Modal from '../Modal';

const PaymentModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[600px]">
        <h2 className="text-2xl font-bold mb-6">Способы оплаты</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-bold mb-2">Наличный расчет</h3>
            <p>Оплата наличными при получении товара</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold mb-2">Безналичный расчет</h3>
            <ul className="list-disc pl-4">
              <li>Банковской картой онлайн</li>
              <li>Банковской картой при получении</li>
              <li>Перевод для юридических лиц</li>
              <li>QR-код (СБП)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Документы</h3>
            <ul className="list-disc pl-4">
              <li>Кассовый чек</li>
              <li>Товарный чек</li>
              <li>Счет-фактура для юр. лиц</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal; 