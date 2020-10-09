import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

export function Counter() {
    const [sum, dispatch] = useReducer((state, action) => {
        return state + action
    }, 0)

    return (
        <>
            {sum}
            <button onClick={() => dispatch(1)}>
                Add 1
        </button>
        </>
    )
}

ReactDOM.render(<Counter />, document.getElementById('root'))

