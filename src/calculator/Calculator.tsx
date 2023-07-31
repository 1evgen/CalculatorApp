import React, {useCallback} from 'react';
import style from "./Calculator.module.css"
import {Button, ButtonVariant} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {stateType} from "../store/CalculatorReducer";
import {
    clearResultAC,
    countResultAC,
    makePositiveNegativeNumbersAC,
    removeLastElementAC,
    setValueAC
} from "../store/functionsActionCreater";

export const Calculator = () => {
        const inputNumberInDisplay = useSelector<AppRootStateType, stateType>(state => state.calculator)
        let outputNumbersInDisplay = inputNumberInDisplay.value
        let outputResult = inputNumberInDisplay.result
        let dispatch = useDispatch()

        const setCharacter = useCallback(
            (value: string) => {
                    dispatch(setValueAC(value));
            },
            [dispatch]
        );
        const getResult = useCallback (()=> {
                dispatch(countResultAC())
        }, [dispatch])

        const clearResult = useCallback( () => {
            dispatch(clearResultAC())
        }, [dispatch])

        const removeLastElement = useCallback( ()=> {
            dispatch(removeLastElementAC())},[dispatch])

        const makeNegOrPostNumbers =useCallback( () => {
            dispatch(makePositiveNegativeNumbersAC())},[dispatch])

    return (
        <div className={style.wrapper}>
            <div className={style.display}>
                <div className={style.windowCalculator}>
                <div className={style.placeForInput}>{outputNumbersInDisplay}</div>
                <div className={style.placeForResult}>{outputResult}</div>
                </div>
            </div>
            <div className={style.calculatorBody}>
            <div className={`${style.button}`}>
                <Button  callback={()=>setCharacter('7')}>7</Button>
                <Button callback={()=>setCharacter('8')}>8</Button>
                <Button callback={()=>setCharacter('9')}>9</Button>
                <Button variant={ButtonVariant.PRIMARY} callback={()=>setCharacter('/')}>/</Button>
                <Button callback={()=>setCharacter('4')}>4</Button>
                <Button callback={()=>setCharacter('5')}>5</Button>
                <Button callback={()=>setCharacter('6')}>6</Button>
                <Button variant={ButtonVariant.PRIMARY} callback={()=>setCharacter('*')}>*</Button>
                <Button callback={()=>setCharacter('1')}>1</Button>
                <Button callback={()=>setCharacter('2')}>2</Button>
                <Button callback={()=>setCharacter('3')}>3</Button>
                <Button variant={ButtonVariant.PRIMARY} callback={()=>setCharacter('-')}>-</Button>
                <Button callback={()=>setCharacter('0')}>0</Button>
                <Button callback={()=>setCharacter('.')}>.</Button>
                <Button variant={ButtonVariant.SECONDARY} callback={getResult}>=</Button>
                <Button variant={ButtonVariant.PRIMARY} callback={()=>setCharacter('+')}>+</Button>
                <Button  variant={ButtonVariant.CLEAR} callback={clearResult}>С</Button>
                <Button callback={removeLastElement}> --c </Button>
                <Button callback={makeNegOrPostNumbers}>+/-</Button>
            </div>
        </div>
        </div>
    );
};

