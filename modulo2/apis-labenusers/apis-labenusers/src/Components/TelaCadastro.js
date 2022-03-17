import React from "react";
import axios from "axios";
import styledComponents from "styled-components";


class TelaCadastro extends React.Component {
    state = {
      name: "",
      email: "",
      inputValue:""
    };


  componentDidMount(){
    this.handleCreateUser()
  }

  handleInput=(event)=>{
    this.setState({inputValue:event.target.value})


  }
  
    handleName = event => {
      const newNameValue = event.target.value;
  
      this.setState({ name: newNameValue });
    };
  
    handleEmail = event => {
      const newEmailValue = event.target.value;
  
      this.setState({ email: newEmailValue });
    };
  
    handleCreateUser = () => {
      const dadosAxios = {
        headers: {
          Authorization: "soraia-rocha-vaughan"
        }
      };
  
      const body = {
        name: this.state.inputValue,
        email: this.state.inputValue
        
      };

      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  
      axios
        .post(
          url,
          body,
         dadosAxios
        )

        .then(() => {
          alert(`Usuário ${this.state.name} criado com sucesso!`);
          this.setState({inputValue:""})
        })
        .catch(error => {
          alert("Erro ao criar o usuário");
          console.log(error);
        });
    };
  
    render() {
      return (
        <div>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleNameChange}
          />
          <input
            placeholder="E-mail"
            type="email"
            onChange={this.handleEmailChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleCreateUser}>Criar Usuário</button>
          
        </div>
      );
    }
  }
  
  export default TelaCadastro;
  