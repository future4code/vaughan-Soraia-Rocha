import React from  "react"
import PerguntaAberta from "./PerguntaAberta"
import PerguntaOpcoes from "./PerguntaOpcoes"

class Etapa3 extends React.Component {
  render() {
    return (
      <div>

         <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

          <PerguntaAberta pergunta={"7. Porque você não terminou a graduação?"} />
          <PerguntaOpcoes
          pergunta={"8. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
      />
    </div>
  );
}
}
export default Etapa3;