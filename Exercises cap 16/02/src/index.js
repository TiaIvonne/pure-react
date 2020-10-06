import React, {useRef} from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'

//esta funcion crea un uncontrolled form y lo renderiza por pantalla 
/*
const UncontrolledForm = () => {
    const firstName = useRef()
    const lastName = useRef()

    const alertButton=() =>{
        alert(`el formulario contiene los siguientres valores: 
            ${firstName.current.value} ${lastName.current.value}`)
    }
    return(
        <div>
        <input type='text' ref={firstName} name='firstName'/>
        <input type='text' ref={lastName} name='lastName'/>
        <button type='button' onClick={alertButton}>Submit</button>
        </div>
    )
}
*/

//useRef() is only for hooks instead use React.createRef() 
class CUncontrolledForm extends Component {
    constructor(props){
    super(props);
        this.firstName = React.createRef()
        this.lastName = React.createRef()
        this.state={
            firstName: '',
            lastName:''
        }
    }

    names = () => {
        this.setState({
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value
        })
    }


    render(){
        const {firstName, lastName} = this.state
        return (
        <div>
            <input type='text'ref={this.firstName} name='firstName'/>
            <input type = 'text' ref={this.lastName} name='lastName'/>
            <button type='button' onClick={this.names}>Submit</button>
            <p>{this.state.firstName} {this.state.lastName}</p>

            </div>

        );
    }
}


ReactDOM.render(
    <CUncontrolledForm/>,
    document.getElementById('root')
)
