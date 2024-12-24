import Headings from '../../components/Headings';

const Services = () => {
  return (
    <div className="h-[1100px] flex flex-col items-center pt-22 bg-services">
      <Headings className="w-42 uppercase text-white">услуги</Headings>
      <p className="w-[892px] mt-8 mb-9 text-2xl text-center font-medium text-white">
        Менеджеры компании с радостью ответят на ваши вопросы и помогут с
        выбором продукции.
      </p>
    </div>
  );
};

export default Services;
