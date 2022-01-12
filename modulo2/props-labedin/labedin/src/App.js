import React from 'react';
import './App.css';
import foto.jpeg from '/home/soraia/LABENU/vaughan-Soraia-Rocha/modulo2/props-labedin/labedin/src/foto.jpeg'
import balanca.png from '/home/soraia/LABENU/vaughan-Soraia-Rocha/modulo2/props-labedin/labedin/src/balanca.png'


function App() {
  
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto.peg}
          nome="Soraia Rocha" 
          descricao="Oi, eu sou Soraia Rocha, estudante de programação e advogada nas horas vagas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        
        <CardGrande 
          imagem= {balanca.png}
          nome="Advogada" 
          descricao="Resolver conflitos" 
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
    </div>
  );
}

export default App;
