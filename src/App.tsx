import React  from 'react';
import './App.css';
import {Calculator} from "./calculator/Calculator";
import theme from '../src/calculator/theme/theme.png'


export function CalculatorApp() {

  return (
    <div className="AppCalculator">
        <Calculator />
    </div>
  );
}

