import { FC } from 'react';
import { ButtonProps } from '../types/Button.types';

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
