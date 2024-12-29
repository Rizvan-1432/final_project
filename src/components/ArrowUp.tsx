import arrow from '../assets/icons/arrowup.svg';


const ArrowUp = ({className, onClick}: {className?: string, onClick?: () => void}) => {
  return (
      <button className={`w-[52px] h-[52px] flex justify-center items-center border-4 border-my-red ${className}`} onClick={onClick}>
        <img src={arrow} alt="" />
      </button>
  );
};

export default ArrowUp;
