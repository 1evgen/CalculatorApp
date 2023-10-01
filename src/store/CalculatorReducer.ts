import {evaluate} from 'mathjs'

export type stateType = {
    value: string | number
    result: string
}
export const initialState = {
    value: '0',
    result: '= 0'
}
export type setValueActionType = {
    type: "SET-VALUE"
    value: string
}
export type countResultActionType = {
    type: "COUNT-RESULT"
}
export type clearResultActionType = {
    type: "CLEAR-RESULT"
}
export type clearLastCharacterActionType = {
    type: "REMOVE-LAST-CHARACTER"
}
export type makePositiveNegativeNumbersAT = {
    type: "MAKE-POSITIVE-NEGATIVE-NUMBERS"
}

export type ActionType = setValueActionType | countResultActionType |
    clearResultActionType | clearLastCharacterActionType | makePositiveNegativeNumbersAT

export const calculatorReducer = (state = initialState, actions: ActionType): stateType => {
    switch (actions.type) {

        case "SET-VALUE": {
            if (state.value.length >= 56) {
                return state
            }
            if (state.value === '0' || state.value === "You can not divide on null") {
                if (!Number.isNaN(+actions.value)) {
                    return {...state, value: actions.value};
                }
                return {...state, value: state.value + actions.value};
            } else {
                const lastChar = state.value[state.value.length - 1];
                if (lastChar.match(/[+\-*/.]/) && actions.value.match(/[+\-*/.]/)) {
                    return state;
                } else {
                    return {...state, value: state.value + actions.value};
                }
            }
        }
        case  "COUNT-RESULT": {
            try {
                const result = evaluate(state.value)
                if (isFinite(result)) {
                    return {...state, value: result.toString(), result: result.toString()}
                } else if (result === isNaN(+result)) {
                    console.log(result)
                    return {...state, value: '0'}
                } else {
                    return {
                        ...state, result: state.value = "You can not divide on null",
                        value: state.value = "You can not divide on null"
                    }
                }
            } catch (error) {
                if (error) {
                    return {...state, value: state.value}
                }
                return {
                    ...state, result: 'the calculate broke, please contacting support',
                    value: 'the calculate broke, please contacting support'
                };
            }
        }
        case "CLEAR-RESULT": {
            return {...state, result: "0", value: "0"}
        }
        case "REMOVE-LAST-CHARACTER": {
            if (state.value.length <= 1) {
                return {...state, value: state.value = '0'}
            } else {
                return {...state, value: state.value.slice(0, -1)}
            }
        }
        case "MAKE-POSITIVE-NEGATIVE-NUMBERS": {
            let newNumber = +state.value * -1
            return {...state, value: newNumber.toString()}
        }
        default:
            return state
    }
}
