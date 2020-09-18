import React from 'react';
import ReactDOM from 'react-dom';
import genres from './genres.js';
import './index.css'



const Board  = () => (
    <>
    {genres.map((genre, index) => {
        if(index <= 10){
        return (
        <Panel key={index} genre={genre}/>
        )
        }
    })}
    </>
)

const Panel = ({genre}) => (
        <button type='button' class="btn btn-info"> {genre}</button> 
)

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
)