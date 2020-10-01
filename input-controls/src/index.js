// controlled inputs

import React, {useState}  from 'react';
import ReactDOM, { render } from 'react-dom'
import { useRef } from 'react';


// a classic uncontrolled input form
// agrego una funcion que 'capture' lo que se ha ingresado en el form 
// usando ref
class UncontrolledForms extends React.Component{
    handle =() =>{
        const input = this.input.value
        console.log(input)
    }
    render(){
        return(
            <div>
                <input type='text' ref={input => this.handle=input}/>
            </div>
        );
    }
}

// controlled form 
const InputExample =() => {
    // controla el state del texto que se ingresara en el input
    const [text, setText] = useState('');

    // esta funcion al invocar set actualiza lo qe se ingrese en el texto
    // cuando se llame se hara con los valores que tiene el input (todos)
    // event.target.value captura lo que se ingresa a la caja input
    const handleChange = event => {
        setText(event.target.value);
    };
    return (
        <>
        <input
        type = 'text'
        // pasamos un value como propiedad del input entonces indicamos
        // explicitamente que es lo que queremos desplegar 
        value={text}
        onChange={handleChange}
        />
        <div>{text}</div>
        </>
    );
}

// este componente es como la oposicion chilena, no hace nada 
const TrickyExample = () =>{
    const [text, setText] = useState('try')

    const handleChange = event => {
        setText('no no nooooooo')
    }
    console.log(handleChange)

    return(
        <input
            type='text'
            value={text}
            onChange ={handleChange}
        />
    )
}

// este componente tiene un input que no deja ingresar numeros en el input
const NoNumbersInput = () => {
    const [text, setText] = useState('no numeros cochino ql');

    const handleChange = event =>{
        // event target value retrieves a value o lo que ingreses cuando 
        // llamas al input
        let text = event.target.value;
        setText(
            text.replace(/[0-9]/g,'')
        )
    }

    return(
        <input
            type='text'
            value={text}
            onChange={handleChange}
        />
    )
    
}



// este componente tiene una caja de texto y un boton
// al ingresar un texto cualquiera a la caja si pulsas el boton aparece 
// una alerta que muestra lo que ingresaste
// In function components, we can call the useRef hook to create an empty ref, and then pass that into a ref prop on the input.
const RefInput = () => {
    const input = useRef();
    // esta funcion muestra una alerta con lo que ingresaste a la caja de texto
    const showValue = () => {
        alert(`Input contains: ${input.current.value}`);
    }
    return(
        <div>
        <input type="text" ref={input} /> 
        <button onClick={showValue}>
                Alert the Value!
        </button>
        </div>
    )
}



ReactDOM.render(
    <InputExample/>,
    document.getElementById('root')
)



