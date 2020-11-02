import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

export function Counter() {

    // hook useReducer, state hace referencia al estado inicial
    // le puedo poner el nombre que quiera, en este caso es sum en vez de state
    const [sum, dispatch] = useReducer((state, action) => {
        return state + action
    }, 0)

    return (
        <>
            
            {sum}
            {/* cada vez que haga click se activa el event handling onClick y a su vez el despachador  */}
            {/* en este caso el despachador hace una operacion matematica o simplemente suma 1, o agrega una palabra  */}
            {/* lo que se estime conveniente, en este caso agrega un 1 al ultimo estado*/}
            <button onClick={() => dispatch(1)}>
                Add 1
        </button>
        </>
    )
}

ReactDOM.render(<Counter />, document.getElementById('root'))

