import React, {Component}from 'react'
import {BasicForm} from './BasicForm.js'
import { BasicFormClass } from './BasicFormClass.js'

class App extends Component {
    render() {
        return (
            <div>
            <h1>Formulario con hooks</h1>
            <BasicForm />
            <h1>Formulario con clases </h1>
            <BasicFormClass/>
            </div>
            
        )
    } 
}

export default App
