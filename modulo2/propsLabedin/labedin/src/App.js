import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from "./foto.jpeg"
import balanca from "./balanca.png"
import CardPequrno from "./components/CardPequeno/CardPequeno.js"

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
          imagem= {foto} 
          nome="Advogada" 
          descricao="Resolver tretas!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={balanca} 
          texto="Facebook" 
        />        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      
      <div className="CardPequeno-container">
        <h2>Contatos</h2>
        <CardPequrno 
          email="soraia@gmail.com" 
          telefone="123456" 
        />     
        </div> 
    </div>
  );
}

export default App;
