import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

function Poster({poster}){
    return(
        <div className = 'poster'>
            <div className = 'image-container'>
                <img alt='poster' src={poster.image}></img>
            </div>
            <div className = 'title'>
                {/* extrae la primera letra de la cadena */}
                <span className='first-letter'>
                    {poster.title.substring(0,1)}
                </span>
                {/* extrae el contenido del medio */}
                <span className = 'center'>
                    {poster.title.substring(1, poster.title.length -1)}
                </span>
                {/* extrae la ultima letra de la cadena */}
                <span className = 'last-letter'>
                    {poster.title.substring(poster.title.length -1)}
                </span>
                <div className = 'caption'>
                {poster.text}
                </div>
            </div>
        </div>
    )
}

Poster.propTypes = {
    poster: PropTypes.shape ({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired

    }).isRequired
}


const testPoster ={
    image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
    title: 'REACT',
    text: 'The best thing since jQuery, probably'
}



ReactDOM.render(
    <Poster poster={testPoster}/>,
    document.getElementById('root')
)