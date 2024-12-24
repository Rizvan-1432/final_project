// Button.types.ts
import { ReactNode } from 'react';

export interface ButtonProps {
    className?: string; 
    children: ReactNode; 
    onClick?: () => void; 
}

