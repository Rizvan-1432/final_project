import { useDispatch, useSelector } from 'react-redux';
import Headings from './Headings';
import { RootState } from '../redux/store';
import { toggleRequisites, toggleContactForm } from '../redux/slice/aboutSlice';
import ContactModal from './modals/ContactModal';
import RequisitesModal from './modals/RequisitesModal';
import { database } from '../db/database';

const AboutCompany = () => {
  const dispatch = useDispatch();
  const { showRequisites, showContactForm } = useSelector((state: RootState) => state.about);

  return (
    <div id="about" className="w-full flex flex-col items-center bg-company text-white">
      <div className="max-w-[1640px] w-full px-4 py-16">
        <Headings className="w-[500px] mx-auto">
          О КОМПАНИИ
        </Headings>
        
        <div className="max-w-[1640px] mx-auto mt-8 flex items-center justify-center gap-8">
          <div className="max-w-[1128px] border-4 border-my-red p-6 border-cut">
            <p className="w-[892px] text-2xl text-center font-medium mx-auto mb-9">
              Мы рады приветствовать вас на нашем сайте.
            </p>
            
            <div className="text-base font-medium space-y-6">
              <p>
                Компания «PROавто» - это надежные, качественные аккумуляторы в широком ассортименте,
                разнообразные в по форме и характеристикам, а также качественные масла и автохимия именитых
                брендов.
              </p>
              
              <p>
                Сеть магазинов «PROавто» более 20-и лет занимается продажей автомобильных аккумуляторов, масел,
                расходных материалов, химией и аксессуаров. Мы зарекомендовали себя как надежная компания,
                специалисты которой всегда готовы проконсультировать по любому вопросу: от подбора автощеток, до
                рекомендаций по подбору аккумулятора для Вашего автомобиля.
              </p>
              
              <p>
                Мы дорожим своей репутацией и даём гарантию на весь ассортимент продукции, представленной на нашем сайте!
              </p>
              
              <p>
                Убедитесь в этом сами!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-8">
            <img 
              src={database.icons.recvisite} 
              alt="Реквизиты" 
              className="w-[92px] h-[84px] mb-2"
            />
            <div 
              onClick={() => dispatch(toggleRequisites())}
              className="w-[216px] h-[52px] flex items-center justify-center cursor-pointer"
            >
              <span className="text-white font-bold hover:text-my-red hover:underline transition-colors">Реквизиты</span>
            </div>
            
            <img 
              src={database.icons.askAquestion} 
              alt="Задать вопрос" 
              className="w-[92px] h-[84px] mb-2 mt-4"
            />
            <div 
              onClick={() => dispatch(toggleContactForm())}
              className="w-[216px] h-[52px] flex items-center justify-center cursor-pointer"
            >
              <span className="text-white font-bold hover:text-my-red hover:underline transition-colors">Задать вопрос</span>
            </div>
          </div>
        </div>
      </div>

      <RequisitesModal 
        isOpen={showRequisites} 
        onClose={() => dispatch(toggleRequisites())} 
      />
      <ContactModal 
        isOpen={showContactForm} 
        onClose={() => dispatch(toggleContactForm())} 
      />
    </div>
  );
};

export default AboutCompany; 