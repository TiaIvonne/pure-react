import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// tengo un panel de control base que es el que mostrara en pantalla los botones y el estilo
const Control = ({
    value,
    children,
    onIncrease,
    onDecrease
}) => (
    // aqui esta el panel de los botones y le entrego una variable
        <div className="control">
            <button onClick={onDecrease}>&ndash;</button>
            <div>
                <span className="value">{value}</span>
                <span className="label">{children}</span>
            </div>
            <button onClick={onIncrease}>+</button>
        </div>
    );

const AudioControlsWithOneObject = () => {
    const [{ volume, bass, mid, treble }, setValues] = useState({
        volume: 53,
        bass: 17,
        mid: 51,
        treble: 32
    });




    // la doble arrow function significa que es una funcion que retorna otra 
    // el escribir esta funcion de este modo ahorra codigo pues pasa a un nivel mas alto de abstraccion 
    // en caso contrario se deberia escribir funciones para cada boton increaseVolume, increaseTreble y asi

    const increase = function(key){
        return function(){
            setValues(function(values){
                return{
                    ...values,
                    [key]: values[key] + 1
                }
            })
            console.log(key)
        }
    }
    
    // const increase = key => () => {
    //     setValues(values => ({
    //         ...values,
    //         [key]: values[key] + 1
    //     }));
    //     console.log(key)
    // }


    const decrease = key => () => {
        setValues(values => ({
            ...values,
            [key]: values[key] - 1
        }));
    }

    // retorno la plantilla base de control y le agrego las funciones que suman o restan numeros 
    return <div className="audio-controls">
        <Control
            value={volume}
            // a la variable onIncrease declarada en control le entrego la funcion increase 
            onIncrease={increase('volume')}
            onDecrease={decrease('volume')}
        >
            Volume
      </Control>

        <Control
            value={treble}
            onIncrease={increase('treble')}
            onDecrease={decrease('treble')}
        >
            Treble
      </Control>

        <Control
            value={mid}
            onIncrease={increase('mid')}
            onDecrease={decrease('mid')}
        >
            Mid
      </Control>

        <Control
            value={bass}
            onIncrease={increase('bass')}
            onDecrease={decrease('bass')}
        >
            Bass
      </Control>
    </div>
};

ReactDOM.render(
    <>

        <h1>With A Single Object</h1>
        <AudioControlsWithOneObject />
    </>,
    document.querySelector('#root')
);
