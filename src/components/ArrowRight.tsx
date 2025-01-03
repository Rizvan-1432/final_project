import { ArrowRightProps } from '../types/ArrowRight.types';

const ArrowRight: React.FC<ArrowRightProps> = ({ color }) => {
  return (
    <svg
      width="51"
      height="20"
      viewBox="0 0 51 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
