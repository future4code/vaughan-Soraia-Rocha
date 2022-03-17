import React from "react";
import styled from "styled-components";
import axios from "axios";



const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const dadosAxios = {
  headers: {
    Authorization: "soraia-rocha-vaughan"
  }
};
const userId = "02ab59d3-910e-440a-a6ae-3d4b73b11b96"
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"

class ListaUsuarios extends React.Component {
  state = {
    usersList: [],
    currentPage: "ListaUsuarios",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.deletUser();
  }

  
  handleUserDeletion = (event) => {
   
      axios
        .delete(
          url,
          userId,
          dadosAxios
        )
        .then(() => {
          alert(`Usuário ${this.state.userId} deletado com sucesso!`);
          this.setState({userId:""})
        })
        .catch(error => {
          alert("Erro ao deletar o usuário");
          console.log(error);
        });
    
  };



  render() {
    return (
      
          <DeleteButton
          onClick={() => this.handleUserDeletion(userId)}
                    >
      
          </DeleteButton>
                
               
    );
  }
}

export default ListaUsuarios;
