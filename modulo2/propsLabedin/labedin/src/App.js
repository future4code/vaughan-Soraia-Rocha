import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto.jpeg from "./foto.jpeg"
import balanca.png from "./balanca.png"
import CardPequrno from "./components/CardPequeno/CardPequeno"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="/home/soraia/LABENU/vaughan-Soraia-Rocha/modulo2/propsLabedin/labedin/src/balanca.png" 
          nome="Soraia" 
          descricao="Oi, meu nome é Soraia. Sou advogada e dev nas horas vagas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="/home/soraia/LABENU/vaughan-Soraia-Rocha/modulo2/propsLabedin/labedin/src/balanca.png" 
          nome="Advogada" 
          descricao="Resolver tretas!" 
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
      
      <div className="cardPequeno-container">
        <h2>Contatos</h2>
        <ImagemButton 
          email="soraia@gmail.com" 
          telefone="123456" 
        />      
    </div>
  );
}

export default App;
