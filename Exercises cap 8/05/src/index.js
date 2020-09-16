import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

function Email({email}){
    return(
        <div className = 'email'>
            <input type='checkbox'/>
            <i className="fa fa-thumb-tack pin"/>
            <div className='content'>
                <div className  = 'line1'>
                <div className = 'sender'>{email.sender}</div>
                 <div className = 'subject'>{email.subject}</div>
                 <div className = 'date'>{email.date}</div>
            </div>
                <div className='message'>{email.message}</div>
            </div>
        </div>
    )
}

// prop types

Email.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired
}

const pruebaEmail = {
    sender: 'Gatuna',
    subject: "Te amo gato",
    date: '14-09-2019',
    message: 'prrr prrrr prrrrrrrrr'
}


ReactDOM.render(
    <Email email={pruebaEmail}/>,
    document.getElementById('root')
)