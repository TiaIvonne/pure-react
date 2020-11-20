import React, {useReducer} from 'react'

const initialState = 0

// create reducer function

const reducer = (state, action) =>{
    switch (action){
        case 'suma':
            return state + 1
        case 'resta':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export function MathMultipleReducer(){
    const [primerContador, disptachOne] = useReducer(reducer, initialState)
    const [segundoContador, disptachTwo] = useReducer(reducer, initialState)
    return(
        <div>
            <div> Contador Uno - {primerContador}</div>
            <button onClick={() => disptachOne('suma')}> Suma</button>
            <button onClick={() => disptachOne('resta')}>Resta</button>
            <button onClick={() => disptachOne('reset')}>RESET</button>
            <div> Contador Dos - {segundoContador}</div>
            <button onClick={() => disptachTwo('suma')}> Suma</button>
            <button onClick={() => disptachTwo('resta')}>Resta</button>
            <button onClick={() => disptachTwo('reset')}>RESET</button>
        </div>
    )
}