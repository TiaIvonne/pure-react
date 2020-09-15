import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({card}){
    // tambien puedo traer las keys del objeto de esta forma y abajo solo llamar al nombre en vez de props.key (card.name)
    // const {name, expirationDate, creditNumber,bankName} = card
    return(
        <>
        <div className= 'credit-card'>
                <div className = 'bank-name'>{card.bankName}</div>
                <div className='name'>{card.name}</div>
                <div className='card-number'>{card.creditNumber}</div>
                <div className='first-four-digits'>{card.firstNumbers}</div>
                <div className='expiration'>
                    <span className='valid-thru'>
                        Valid Thru </span> {card.expirationDate}
                    
                </div>
        </div>
        </>
    )
}

const cardInfo = {
    name: "John Doe",
    expirationDate: '22/10',
    creditNumber: '1234 5678 8765 4321',
    firstNumbers: 1234,
    bankName: "Devil's bank"

}

// card va a contener el objeto card info, card va a ser la propiedad del componente Credit
ReactDOM.render(
    <CreditCard card = {cardInfo}/>,
    document.querySelector('#root')
)
