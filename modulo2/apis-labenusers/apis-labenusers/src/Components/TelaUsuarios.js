import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalhesUsuarios from "./DetalhesUsuarios"


const DeleteButton = styled.span
  color: red;
  cursor: pointer;
;

const axiosConfig = {
  headers: {
    Authorization: "soraia-rocha-vaughan"
  }
};

class usuarios extends React.Component {
  state = {
    usersList: [],
    telaAtual: "usersList",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      });
  };

  handleUserDeletion = userId => {
    if (confirm("Tem certeza que deseja deletar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário deletado com sucesso!");
          this.fetchUsersList();
        })
        .catch(e => {
          alert("Erro ao deletar usuário");
        });
    }
  };

  changePage = userId => {
    if (this.state.telaAtual === "usersList") {
      this.setState({ telaAtual: "DetalhesUsuarios", userId: userId });
    } else {
      this.setState({ telaAtual: "usersList", userId: "" });
    }
  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${
          this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.telaAtual === "usersList" ? (
          <div>
            <ul>
              {this.state.usersList.length === 0 && <div>Carregando...</div>}
              {this.state.usersList.map(user => {
                return (
                  <li>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <DeleteButton
                      onClick={() => this.handleUserDeletion(user.id)}
                    >
                      X
                    </DeleteButton>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </div>
        ) : (
          <DetalhesUsuarios userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default TelaUsuarios;
