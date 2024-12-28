import { FC } from 'react';
import { ServiceModalProps } from '../../types/Modal.types';
import Modal from '../Modal';

const QualityModal: FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 max-w-[700px]">
        <h2 className="text-2xl font-bold mb-6">Гарантии качества</h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-bold mb-2">Сертификаты</h3>
            <ul className="list-disc pl-4">
              <li>Сертификаты соответствия на всю продукцию</li>
              <li>Гарантийные талоны от производителей</li>
              <li>Паспорта качества</li>
            </ul>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold mb-2">Гарантийные обязательства</h3>
            <ul className="list-disc pl-4">
              <li>Гарантия на аккумуляторы - 24 месяца</li>
              <li>Гарантия на работы - 12 месяцев</li>
              <li>Возврат товара в течение 14 дней</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Наши преимущества</h3>
            <ul className="list-disc pl-4">
              <li>Только оригинальная продукция от производителей</li>
              <li>Строгий контроль качества</li>
              <li>Профессиональная консультация</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QualityModal; 