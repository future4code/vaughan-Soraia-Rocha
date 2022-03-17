import React from "react"
import TelaCadastro from "./Components/TelaCadastro"
import ListaUsuarios from "./Components/ListaUsuarios"


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  };

  changePage = () => {
    if (this.state.telaAtual === "cadastro") {
      this.setState({ telaAtual: "usuarios" });
    } else {
      this.setState({ telaAtual: "cadastro" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.telaAtual === "cadastro" ? <TelaCadastro /> : <usuários/>}
      </div>
    );
  }
}