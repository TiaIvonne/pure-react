import React, {useReducer} from 'react'

const initialState = {
    contador1: 0,
    contador2: 0
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'addition1':
            return {...state, contador1: state.contador1 + action.value}
        case 'addition2':
            return {...state, contador2: state.contador2 + action.value}
        case 'multiplication':
            return {...state, contador1: state.contador1 * action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function MathComplex2 () {
    const [count, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            {count.contador1}
            <button onClick={() => dispatch({ type: 'addition1', value: 5})}> Agrega 5 al contador 1</button>
            <button onClick={() => dispatch({ type: 'multiplication', value: 2})}>Multiplica el numero por 2 </button>
            {count.contador2}
            <button onClick={() => dispatch({ type: 'addition2', value: 10})}>Agrega 10 al contador 2</button>
            <button onClick={() => dispatch({type: 'reset'})}> RESET</button>
        </div>
    )
}