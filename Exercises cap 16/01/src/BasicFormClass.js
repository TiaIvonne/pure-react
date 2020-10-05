import React, {Component} from 'react'
// El mismo ejercicio pero hecho con clases en vez de react hooks
export class BasicFormClass extends Component{
    state = {
        firstName : '',
        lastName : ''
    }

    // esta funcion captura cada input del formulario
    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const {firstName, lastName} = this.state
        return(
            <>
            <div>Con clases</div>
               <input type='text'
                    // el value del event.target.value va a ser el equivalente al fname
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                />
            <div>{this.state.firstName}</div>
                <input type='text'
                    // el value del event.target.value va a ser el equivalente al fname
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                />
                <div>{this.state.lastName}</div>
            </>
        )
    }
}