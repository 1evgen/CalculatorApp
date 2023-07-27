import React, {ChangeEvent} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setValueAC, stateType} from "./store/CalculatorReducer";
import {Calculator} from "./calculator/Calculator";

export function CalculatorApp() {

  let calculator = useSelector<AppRootStateType, stateType>(state => state.calculator)
  let dispatch = useDispatch()

    const onchangeHandler = ((e: ChangeEvent<HTMLInputElement>)=> {
            dispatch(setValueAC(e.currentTarget.value))
    })
    const onClickPlusButton = ()=> {

    }

  return (
    <div className="AppCalculator">
        <Calculator />

    </div>
  );
}

