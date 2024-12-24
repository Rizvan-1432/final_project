import { FC } from 'react';
import { SliderLineProps } from '../types/SliderLine.types';

const SliderLine: FC<SliderLineProps> = ({ className }) => {
    return (
        <div className={`w-[112px] h-1 ${className || ''}`}>
        </div>
    );
};

export default SliderLine;
