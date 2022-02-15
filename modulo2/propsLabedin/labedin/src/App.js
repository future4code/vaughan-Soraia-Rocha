import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from "./foto.jpeg"
import balanca from "./balanca.png"
import CardPequeno from "./components/cardPequeno/CardPequeno.js"
import styled from 'styled-components';

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`
const ButtonContainer= styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 15px 30px;
  width: 30px;
   border-radius: 50%;
  width: 70px;
  flex-direction: column;
  justify-items: flex-start;
  `

const CardGrandeContainer = styled.div `
  display: flex;
  align-items: center;
  
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;

  flex-direction: column;
  justify-items: flex-start;
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
  `
const CardPEquenoContainer = styled.div `
  aligne.items:center;
`

function App() {
  return (
    <AppContainer>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto} 
          nome="Soraia" 
          descricao="Oi, meu nome é Soraia. Sou advogada e dev nas horas vagas."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardGrandeContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {balanca} 
          nome="Advogada" 
          descricao="Resolver tretas!" 
        />
      </CardGrandeContainer>


      <ButtonContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"  
          texto="Facebook" 
        />        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ButtonContainer>
      

      <CardPEquenoContainer>
        <h2>Contatos</h2>
        <CardPequeno 
          email="soraia@gmail.com" 
          telefone="123 456 789" 
        />     
        </CardPEquenoContainer > 

    </AppContainer>
  );
}

export default App;
