
export type stateType = {
   value: number | string

}

export const initialState = {
    value: ''
}

type setValueActionType = {
    type: "SET-VALUE"
    value: number | string
}
type sumValueActionType = {
    type: "SUM-VALUE"
}

type ActionType = setValueActionType | sumValueActionType


export const calculatorReducer = (state = initialState, actions: ActionType):stateType => {
        switch(actions.type){
            case "SET-VALUE": {
                debugger
                return {...state, value: actions.value}
            }
            case  "SUM-VALUE": {
                return  {...state}

            }
            default:
                return  state
        }
}

export const setValueAC = (value: number | string): setValueActionType => {
    return {type: 'SET-VALUE', value: value}
}
//
export  const  sumNumberAC = (): sumValueActionType => {
    return {type: "SUM-VALUE"}
}
