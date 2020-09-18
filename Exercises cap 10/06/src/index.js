import React from 'react';
import ReactDOM from 'react-dom';
import cards from './cards.js';
import './index.css'

const Cards = () => (
    <>
    {/* despliego la lista de elementos desde el json cards */}
    {cards.map(card =>
        <Card key={card.id} card={card}/>
        )}
    </>
)

const Card = ({card}) => (
    <div class='grid-container'>
    <div class="card-deck">
        <div class="card">
            <img class="card-img-top" src={card.mainImg}/>
                <div class="card-body">
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-text">pins {card.pins}</p>
                    <img src={card.subImg1}/>
                    <img src={card.subImg2} />  
               </div>
        </div>
    </div>
    </div>

)


ReactDOM.render(
    <Cards/>,
    document.getElementById('root')
)