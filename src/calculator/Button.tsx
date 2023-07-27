import React from 'react';

export type ButtonProps = {
    children?: React.ReactNode
    callback: (value: number | string)=> void
    value: number | string
}




export const Button = ({children, ...atributes}: ButtonProps)=> {
    return (
        <div>
            <button {...atributes}>
                {children}
            </button>
        </div>
    )
}
