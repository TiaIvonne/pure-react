import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Control = ({
    value,
    children,
    onIncrease,
    onDecrease
}) => (
        <div className="control">
            <button onClick={onDecrease}>&ndash;</button>
            <div>
                <span className="value">{value}</span>
                <span className="label">{children}</span>
            </div>
            <button onClick={onIncrease}>+</button>
        </div>
    );

const AudioControls = () => {
    return (
        <div className= 'audio-controls'>
            <Control/>
        </div>
        )
}

ReactDOM.render(
    <AudioControls/>,
    document.getElementById('root')
)