import style from './Calculator.module.css'
import React, { ReactNode } from 'react';

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    DEFAULT = 'default',
    CLEAR = 'clear'
}

type TypeButtonProps = {
    callback: () => void;
    children: ReactNode;
    className?: string;
    variant? : ButtonVariant
};

export const Button = ({ callback, children, variant = ButtonVariant.DEFAULT}: TypeButtonProps) => {
    // let classNameFinely = `${style.button} ${xType === 'clear' ? style.buttonClear : ''}`;
    // let styleObj = xType === 'equal' || xType === "plus" || xType === "clear" ? styleForButton : undefined
    return (
            <button
                className={`${style.button} ${style[variant]}`}
                onClick={callback}
            >
                {children}
            </button>
    );
};
