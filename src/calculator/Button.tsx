import React, {ReactNode} from 'react';

type TypeButtonProps = {
    callback: ()=> void
    children: ReactNode
}


export const Button = ({callback,children,...atributes}: TypeButtonProps) => {
    return (
        <div>
         <button onClick={callback}>{children}</button>
        </div>
    );
};

