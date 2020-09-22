import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// inicializo clase House

class House extends React.Component {
    state = {
        kitchen: true,
        bathroom: false,
        livingRoom: true,
        bedroom: false
    }

    handleChanges = (event) => {
        console.log('hola',event)
        this.setState((state, props) => {
            return{
                kitchen: !this.state.kitchen,
                bathroom: !this.state.bathroom,
                livingRoom: !this.state.livingRoom
            }
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
            <p>la luz de la cocina esta { this.state.kitchen == true ? 'prendida' : 'apagada'}</p>
            <Lights onChange={this.handleChanges}/>
            </div>
        )
    }
}

function Lights({onChange}){
    return(
        <button onClick={onChange}>kitchen</button>
    )
}


ReactDOM.render(
    <House/>,
    document.getElementById('root')
)