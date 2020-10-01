import { render } from '@testing-library/react'
// Create an app with labelled, controlled text inputs for First Name and Last Name, and have it display 
// “Hello, { firstName } { lastName } !” in real time, as you type into the text boxes.


import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const BasicForm = () => {

    // declarar los states como string
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    // Esta es una funcion que captura lo que escriba en el formulario

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastName = ( event) => {
        setLastName(event.target.value)
    }

    
    return(
        <>
        <input type='text'
        // el value del event.target.value va a ser el equivalente al firstName
        value={firstName}
        onChange={handleFirstName}
        />
        <input type='text'
        // el value del event.target.value va a ser el equivalente al firstName
        value={lastName}
        onChange={handleLastName}
        />
        <div>{firstName}</div>
        </>
        
    )        
}

ReactDOM.render(
    <BasicForm/>,
    document.getElementById('root')
)