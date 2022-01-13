import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';
const ImagemStyled = styled.img `
width: 70px;
margin-right: 10px;
border-radius: 50%;
}
`

function CardGrande(props) {

    return (
        <div className="bigcard-container">
            <ImagemStyled src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;