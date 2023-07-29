import {calculatorReducer, stateType} from "./CalculatorReducer";
import {
    clearResultAC,
    countResultAC,
    makePositiveNegativeNumbersAC,
    removeLastElementAC,
    setValueAC
} from "./functionsActionCreater";

test('remove last element in value', ()=> {

    let state = {
        value: '100',
        result: ''
    }
    let checkedResultSplice = calculatorReducer(state, removeLastElementAC())
    expect(checkedResultSplice.value).toEqual('10')
    expect(typeof checkedResultSplice.result).toEqual('string')
})


test("check to sum number in calculate", ()=> {
    let initialState = {
        value: '100 + 100 + 100',
        result: '0'
    }
    let resultOfSum = calculatorReducer(initialState, countResultAC())
    expect(typeof resultOfSum.result).toEqual('string')
    expect(resultOfSum.value).toEqual('300')

    let decimalNumber = {
        value: "2.5 + 2.5",
        result: '0'
    }
    let sumDecimalNumber = calculatorReducer(decimalNumber, countResultAC())
    expect(sumDecimalNumber.result).toEqual('5')

})

test("check to equal of subtract numbers ", ()=> {
    let initialState = {
        value: '13 - 10',
        result: '0'
    }
    let resultOfSub = calculatorReducer(initialState, countResultAC())
    expect(resultOfSub.result).toEqual('3')

   let newState = {
       value: '3 - 5',
       result: '3'
    }
    let getNegativeNumber =  calculatorReducer(newState, countResultAC())
    expect(getNegativeNumber.result).toEqual('-2')

})

test('check to equal of divide numbers ',()=> {
    let state = {
        value: '3 / 0',
        result: '0'
    }
    const divideOnNull = calculatorReducer(state, countResultAC())
    expect(divideOnNull.value).toEqual('You can not divide on null')
//////////////////////////////////////////////////////////////////////////////
    let state_2 = {
            value: '1 / 3',
            result: '0'
    }
    let exampleDivide = calculatorReducer(state_2, countResultAC())
    expect(exampleDivide.result.length > 6).toEqual(true)

    let state_3 = {
        value: '125 / 5 / 5',
        result: '0'
    }
    let exampleDivide_2 = calculatorReducer(state_3, countResultAC())
    expect(exampleDivide_2.result).toEqual('5')
})

    test("examples are execution priority ", ()=> {
        let state = {
            value: '2 + 2 * 2',
            result: '0'
        }
        let example_1 = calculatorReducer(state, countResultAC())
        expect(example_1.result).toEqual('6')

        let state_2 = {
            value: '55 * 5 + 44 * 4 + 9',
            result: '0'
        }
        let example_2 = calculatorReducer(state_2, countResultAC())
        expect(example_2.result).toEqual('460')
    })

test('check clean result', ()=> {
    let state = {
        value: '6',
        result: '6'
    }
    let example = calculatorReducer(state, clearResultAC())
    expect(example.result).toEqual('0')
    expect(example.value).toEqual('0')
})


test('check how work set value in display', ()=> {
    let state = {
        value: '0',
        result: '0'
    }
    let example = calculatorReducer(state, setValueAC('.'))
    expect(example.value).toEqual('0.')

    let state_1 = {
        value: '0',
        result: '0'
    }
    let example_1 = calculatorReducer(state_1, setValueAC('5'))
    expect(example_1.value).toEqual('5')
    let state_2 = {
        value: '1+',
        result: '0'
    }
    let example_2 = calculatorReducer(state_2, setValueAC("+"))
    expect(example_2.value).not.toEqual('1++')

})


test('change number for negative or positive', ()=> {
    let state = {
        value: '-1',
        result: '0'
    }
    let makePositiveNumber = calculatorReducer(state, makePositiveNegativeNumbersAC())
    expect(makePositiveNumber.value).toEqual('1')

    let state_1 = {
        value: '1',
        result: '0'
    }
    let makeNegativeNumber = calculatorReducer(state_1, makePositiveNegativeNumbersAC())
    expect(makeNegativeNumber.value).toEqual('-1')
    expect(typeof makeNegativeNumber.value).toEqual('string')
})


test('check is not Nan, undefined,error', ()=> {
    let state_1 = {
        value: '-1-',
        result: '0'
    }
    let isNotNan = calculatorReducer(state_1, countResultAC())
    expect(isNotNan.value).toEqual('-1-')
})