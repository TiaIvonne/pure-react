import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// funcion texto, esta funcion cambia el color del texto dependiendo del estado on-off.
// si esta funcion estuviese dentro de la clase, necesito invocarla con this.
const texto = (t) => {
    if (t === true) {
        return <span className='on'>ON</span>
    }
    else {
        return <span className='off'>OFF</span>
    }
}

// inicializo clase House
class House extends React.Component {
    state = {
        piezas : {
            kitchen: true,
            bathroom: false,
            livingRoom: true,
            bedroom: false
        }
    }

    // esta funcion realiza los cambios de estado al prender o apagar la luz, si esta en true pasa a falso y viceversa
    // utilizo el prev State para evitar que si pulso un boton cambie las luces del resto de las piezas
    handleChanges = pieza => {
        console.log(pieza)
        this.setState(prevState => ({
            piezas: { 
                // pieza: prevState,
                ...prevState,
                [pieza] : !prevState.piezas[pieza]
            }
        }))
        console.log(this.state)
    }


    // esta funcion apaga las luces de toda la pieza, toma el estado que tenga y lo cambia a falso
    turnOffAllLights = () => {
        this.setState({
            piezas: {
            kitchen: false,
            bathroom: false
            }
        })
    }
 
    // lo que se ve por pantalla
    render(){
        
        return(
            <div>
            <p>La luz de la cocina esta {texto(this.state.piezas.kitchen)}</p>
                <button onClick={() => this.handleChanges('kitchen')}>
                Kitchen
                </button>
            <p> La luz del bano esta {texto(this.state.piezas.bathroom)}</p>
                <button onClick={() => this.handleChanges('bathroom')}>
                Bathroom
                </button>
            <p>Quieres apagar todas las luces?</p>
                <button onDoubleClick ={this.turnOffAllLights}>Turn off the lights </button>
            </div>
        )
    }
}




ReactDOM.render(
    <House/>,
    document.getElementById('root')
)