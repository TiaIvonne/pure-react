import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// componente Room que inicia el estado de la luz en apagado
const Room = () => {
    const [luz, setLuz] = useState({lu: false})

    // esta funcion cambia el estado de la luz
    const changeLightA =() => (
        setLuz(luz => ({
            ...luz,
            lu: !luz.lu
        })) 
    );
    console.log(luz.lu)
    // esta funcion cambia el color del texto dependiendo del estado de la luz
    const stateLight = (l) => {
        if (l === true) {
            return <span className='on'>prendida</span>
        } else {
            return <span className='off'>apagada</span>
        }
    }
    // lo que se ve en pantalla
    return (
        <>
            <div>Estoy {stateLight(luz.lu)}</div>
            <button onClick={changeLightA}>
            change light
            </button>
        </>
    );
}


ReactDOM.render(
    <Room/>,
    document.getElementById('root')
)



