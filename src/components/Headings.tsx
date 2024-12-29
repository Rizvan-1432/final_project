import { HeadingsProps } from '../types/Headings.types';

const Headings: React.FC<HeadingsProps> = ({children, className}) => {
    return (
        <h2 className={`${className} mt-22 text-center text-4xl pb-5 font-bold uppercase border-b-4 border-my-red`}>
          {children}  
        </h2>
    );
};

export default Headings;