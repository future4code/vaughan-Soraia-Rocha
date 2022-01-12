import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import joaninha from './joaninha.jpeg';
import laurinha from './laurinha.jpeg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}

          Post
          nomeUsuario={'joaninha'}
          fotoUsuario={joaninha}
          fotoPost={laurinha}
          

          Post
          nomeUsuario={'laurinha'}
          fotoUsuario={laurinha}
          fotoPost={joaninha}
        />
      </MainContainer>
    );
  }
}

export default App;
