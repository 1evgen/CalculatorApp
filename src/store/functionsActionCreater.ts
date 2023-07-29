import {
    clearLastCharacterActionType,
    clearResultActionType,
    countResultActionType, makePositiveNegativeNumbersAT,
    setValueActionType
} from "./CalculatorReducer";


export const setValueAC = (value: string): setValueActionType => {
    return {type: 'SET-VALUE', value: value}
}
export  const countResultAC = (): countResultActionType  => {
    return {type: "COUNT-RESULT"}
}
export  const clearResultAC = (): clearResultActionType => {
    return {type: "CLEAR-RESULT"}
}
export const removeLastElementAC = (): clearLastCharacterActionType  => {
    return {type: "REMOVE-LAST-CHARACTER"}
}
export const makePositiveNegativeNumbersAC = (): makePositiveNegativeNumbersAT => {
    return {type:"MAKE-POSITIVE-NEGATIVE-NUMBERS"}
}