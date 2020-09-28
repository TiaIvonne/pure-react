import React, { useState } from 'react';
import ReactDOM from 'react-dom'
// {useState es para no llamar Reac.useState cada vez}
function StepTracker() {
    // inicializa el hook como un arreglo y el estado de la hook en 0
    const [steps, setSteps] = useState(0);

    // esta funcion incrementa los pasos en 1
    const increment = () => {
        // setSteps(steps => steps + 1)
        // updater
        setSteps(steps => steps + 1);
    }

    return(
        <div>
            Hola! caminaste {steps} pasos
            <br/>
            {/* tambien puede ser onClick{() => setSteps(steps => steps +1)} */}
            <button onClick={increment}> Pasito a pasito</button>
        </div>
    )
}

ReactDOM.render(
    <StepTracker/>,
    document.querySelector('#root')
)