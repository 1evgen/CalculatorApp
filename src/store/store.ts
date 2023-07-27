import {combineReducers, legacy_createStore} from "redux";
import {calculatorReducer} from "./CalculatorReducer";

const rootReducer = combineReducers({
    calculator: calculatorReducer
})


export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
