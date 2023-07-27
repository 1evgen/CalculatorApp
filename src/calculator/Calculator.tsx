import React from 'react';
import style from "./Calculator.module.css"
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {setValueAC, stateType} from "../store/CalculatorReducer";


export const Calculator = () => {
        const inputNumberinDisplay = useSelector<AppRootStateType, stateType>(state => state.calculator)
        let outputNumbersInDisplay = inputNumberinDisplay.value
        let dispatch = useDispatch()

        const callBack = ()=> {
                dispatch(setValueAC(7))
        }

    return (
        <div className={style.wrapper}>
            <div className={style.display}>{outputNumbersInDisplay}</div>
            <div className={style.calculatorBody}>
                    <Button callback={callBack} value={7}/>
            <div className={`${style.number_7}  ${style.button}`}>7</div>
            <div className={`${style.number_8}  ${style.button}`}>8</div>
            <div className={`${style.number_9}  ${style.button}`}>9</div>
            <div className={`${style.divide}    ${style.button}`}>/</div>
            <div className={`${style.number_4}  ${style.button}`}>4</div>
            <div className={`${style.number_5}  ${style.button}`}>5</div>
            <div className={`${style.number_6}  ${style.button}`}>6</div>
            <div className={`${style.multiply}  ${style.button}`}>*</div>
            <div className={`${style.number_1}  ${style.button}`}>1</div>
            <div className={`${style.number_2}  ${style.button}`}>2</div>
            <div className={`${style.number_3}  ${style.button}`}>3</div>
            <div className={`${style.subtract}  ${style.button}`}>-</div>
            <div className={`${style.number_0}  ${style.button}`}>0</div>
            <div className={`${style.dort}      ${style.button}`}>.</div>
            <div className={`${style.equal}     ${style.button}`}>=</div>
            <div className={`${style.plus}      ${style.button}`}>+</div>
            <div className={`${style.clear}     ${style.button}`}>clear</div>

        </div>
        </div>
    );
};

