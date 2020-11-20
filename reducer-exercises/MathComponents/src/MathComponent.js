import React, {useReducer} from 'react'


const initialState = 0

const reducer = (state, action) => {
    switch(action){
        case 'addition':
            return state + 1
        case 'substraction':
            return state - 1
        case 'multiply':
            return state * 2
        case 'divide':
            return state / 2
        case 'reset':
            return initialState    
        default:
            return state
    }
}

export default function MathComponent(){
    const[count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            {count}
            <button onClick={() => dispatch('addition')}>+</button>
            <button onClick={() => dispatch('substraction')}>-</button>
            <button onClick={() => dispatch('multiply')}>*</button>
            <button onClick={() => dispatch('divide')}>/</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
        </div>
    )
}