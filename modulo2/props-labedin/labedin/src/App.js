import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from "./foto.jpeg"
import balanca from "./balanca.png"
import styled from 'styled-components';

const AppContainer= styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px; `

function App() {
  return (
    <AppContainer>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Soraia Rocha" 
          descricao="Meu nome é Soraia Rocha e sou estudante de programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="{balanca}" 
          nome="Advogada" 
          descricao="Resolução de conflitos" 
        />
        
      
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      </AppContainer>
  );
}

export default App;
