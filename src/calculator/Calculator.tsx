import React, {useCallback} from 'react';
import style from "./Calculator.module.css"
import {Button} from "./Button";
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
        const inputNumberinDisplay = useSelector<AppRootStateType, stateType>(state => state.calculator)
        let outputNumbersInDisplay = inputNumberinDisplay.value
        let outputResult = inputNumberinDisplay.result
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

        const removeLastElement = ()=> {
            dispatch(removeLastElementAC())
        }

        const makeNegOrPostNumbers = () => {
            dispatch(makePositiveNegativeNumbersAC())
        }

    let styleForButtonEqual = {
            backgroundColor: 'red'

        }
    let styleForButtonPlus = {
            backgroundColor: '#32dcdc',
    }
    let styleForButtonClear = {
        backgroundColor: '#32dcdc',
        width: "245px"
    }

    return (
        <div className={style.wrapper}>
            <div className={style.display}>
                <div className={style.placeForInput}>{outputNumbersInDisplay}</div>
                <div className={style.placeForResult}><div>{outputResult}</div></div>
            </div>
            <div className={style.calculatorBody}>
            <div className={`${style.button}`}>
                <Button callback={()=>setCharacter('7')}>7</Button>
                <Button callback={()=>setCharacter('8')}>8</Button>
                <Button callback={()=>setCharacter('9')}>9</Button>
                <Button callback={()=>setCharacter('/')}>/</Button>
                <Button callback={()=>setCharacter('4')}>4</Button>
                <Button callback={()=>setCharacter('5')}>5</Button>
                <Button callback={()=>setCharacter('6')}>6</Button>
                <Button callback={()=>setCharacter('*')}>*</Button>
                <Button callback={()=>setCharacter('1')}>1</Button>
                <Button callback={()=>setCharacter('2')}>2</Button>
                <Button callback={()=>setCharacter('3')}>3</Button>
                <Button callback={()=>setCharacter('-')}>-</Button>
                <Button callback={()=>setCharacter('0')}>0</Button>
                <Button callback={()=>setCharacter('.')}>.</Button>
                <Button styleForButton={styleForButtonEqual}
                        callback={getResult}
                        xType={'equal'}>
                    =
                </Button>
                <Button styleForButton={styleForButtonPlus}
                        callback={()=>setCharacter('+')}
                        xType={'plus'}>
                    +
                </Button>
                <Button styleForButton={styleForButtonClear} xType={'clear'} callback={clearResult}>С</Button>
                <Button callback={removeLastElement}> --c </Button>
                <Button callback={makeNegOrPostNumbers}>+/-</Button>
            </div>
        </div>
        </div>
    );
};

