
import React, { ReactNode } from 'react';

type StyleForButtonEqualType = {
    backgroundColor: string;
}
type StyleForButtonPlusType = {
    backgroundColor: string;
}
type StyleForButtonClearType = {
    width: string;
    height: string;
    backgroundColor: string;
}

type TypeButtonProps = {
    callback: () => void;
    children: ReactNode;
    xType?: string;
    className?: string;
    styleForButton?: StyleForButtonEqualType | StyleForButtonPlusType | StyleForButtonClearType
};

export const Button = ({ callback, children, xType, styleForButton }: TypeButtonProps) => {
    // let classNameFinely = `${style.button} ${xType === 'clear' ? style.buttonClear : ''}`;
    let styleObj = xType === 'equal' || xType === "plus" || xType === "clear" ? styleForButton : undefined

    return (
        <div>
            <button style={styleObj} onClick={callback}>
                {children}
            </button>
        </div>
    );
};



// type TypeButtonProps = {
//     callback: ()=> void
//     children: ReactNode
//     xType?: string
//     className?: string
// }
//
// export const Button = ({
//                            callback,
//                            children,
//                            className,
//                        }: TypeButtonProps
// ) => {
//
//     let classNameFinely = `${style.button}  ${className}`
//
//     return (
//         <div>
//          <button className={classNameFinely} onClick={callback}>{children}</button>
//         </div>
//     );
// };