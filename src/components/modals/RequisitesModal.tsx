import Modal from '../Modal';
import { ServiceModalProps } from '../../types/Modal.types';

const RequisitesModal: React.FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Реквизиты компании</h2>
        
        <div className="space-y-4 text-black">
          <div>
            <p className="font-bold">Полное наименование:</p>
            <p>Общество с ограниченной ответственностью "PROавто"</p>
          </div>
          
          <div>
            <p className="font-bold">Сокращенное наименование:</p>
            <p>ООО "PROавто"</p>
          </div>

          <div>
            <p className="font-bold">Генеральный директор:</p>
            <p>Иванов Иван Иванович</p>
          </div>

          <div>
            <p className="font-bold">Дата регистрации:</p>
            <p>01.01.2015</p>
          </div>
          
          <div>
            <p className="font-bold">ИНН:</p>
            <p>7731537604</p>
          </div>
          
          <div>
            <p className="font-bold">КПП:</p>
            <p>773101001</p>
          </div>
          
          <div>
            <p className="font-bold">ОГРН:</p>
            <p>1157746374195</p>
          </div>
          
          <div>
            <p className="font-bold">Юридический адрес:</p>
            <p>121471, г. Москва, ул. Рябиновая, д. 55, стр. 1</p>
          </div>

          <div>
            <p className="font-bold">Фактический адрес:</p>
            <p>121471, г. Москва, ул. Рябиновая, д. 55, стр. 1</p>
          </div>

          <div>
            <p className="font-bold">Телефон:</p>
            <p>+7 (495) 123-45-67</p>
          </div>

          <div>
            <p className="font-bold">Email:</p>
            <p>info@proauto.ru</p>
          </div>
          
          <div>
            <p className="font-bold">Расчетный счет:</p>
            <p>40702810400000123456</p>
          </div>
          
          <div>
            <p className="font-bold">Банк:</p>
            <p>ПАО Сбербанк</p>
          </div>
          
          <div>
            <p className="font-bold">БИК:</p>
            <p>044525225</p>
          </div>

          <div>
            <p className="font-bold">Корр. счет:</p>
            <p>30101810400000000225</p>
          </div>

          <div>
            <p className="font-bold">ОКПО:</p>
            <p>42347552</p>
          </div>

          <div>
            <p className="font-bold">ОКВЭД (основной):</p>
            <p>45.31 - Торговля автомобильными деталями, узлами и принадлежностями</p>
          </div>

          <div>
            <p className="font-bold">Дополнительные ОКВЭД:</p>
            <p>45.32 - Розничная торговля автомобильными деталями</p>
            <p>52.29 - Прочая вспомогательная деятельность, связанная с перевозками</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-my-red text-white rounded hover:bg-red-700 transition-colors"
        >
          Закрыть
        </button>
      </div>
    </Modal>
  );
};

export default RequisitesModal; 