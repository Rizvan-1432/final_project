import { FC } from 'react';
import { ButtonProps } from '../types/Button.types';

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button className={`border-4 border-my-red text-sm font-bold ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
