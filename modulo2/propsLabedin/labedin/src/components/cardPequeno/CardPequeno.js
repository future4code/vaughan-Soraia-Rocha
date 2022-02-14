import React from 'react';

function CardPequeno(props) {
    return (
        <div className="cardPequeno-container">
           
            <div>
                <h4>{ props.telefone }</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;