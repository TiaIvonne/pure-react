import React, { useState } from 'react'


export const BasicForm = () => {

    // declarar los states como string
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
    })

    // en el ejemplo antertipr
    /* const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = ( event) => {
        setLastName(event.target.value)
    }
    */


    // esta funcion captura lo que tenga en el formulario con el tag name sin necesidad de 
    const handleChange = (event) => {
        setValues({
            // spread operator ...values trae los valores por defecto 
            ...values,
            [event.target.name]: event.target.value
        })
    }


    return (
        <>
            <div>
                <input type='text'
                    // el value del event.target.value va a ser el equivalente al fname
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                />
                <div>{values.firstName}</div>
                <input type='text'
                    // el value del event.target.value va a ser el equivalente al fname
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                />
                <div>{values.lastName}</div>
            </div>
        </>
    )
}