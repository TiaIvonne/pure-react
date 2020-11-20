//  es el mismo ejercicio que MathComponent pero usando un objeto
import React, { useReducer } from "react"

// primero crear el reducer
const initialState = {
    value: 0
}


const reducer = (state, action) => {
    switch(action.type){
        case 'addition':
            return { value: state.value + 1 }
        case 'substraction':
            return { value: state.value - 1 }
        case 'multiply':
            return {value : state.value * 2 }
        case 'divide':
            return {value: state.value / 2  }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export function MathComplex() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> Tu resultado es = {count.value}</div>
            <button onClick={() => dispatch({type: 'addition'})}>+</button>
            <button onClick={() => dispatch({type: 'substraction'})}>-</button>
            <button onClick={() => dispatch({ type: 'multiply' })}>*</button>
            <button onClick={() => dispatch({ type: 'divide' })}>/</button>
            <button onClick={() => dispatch({ type: 'reset'})}>RESET</button>
        </div>
    )
}


