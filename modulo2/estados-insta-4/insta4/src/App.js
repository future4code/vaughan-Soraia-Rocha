import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Foto1 from './components/Fotos/Foto1.jpeg'
import Foto2 from './components/Fotos/Foto2.jpeg'

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
        />

        <Post
          nomeUsuario={'laurinha'}
          fotoUsuario={Foto1}
          fotoPost={Foto2}
        />

        <Post
          nomeUsuario={'joaninha'}
          fotoUsuario={Foto2}
          fotoPost={Foto1}
        />
      </MainContainer>
    );
  }
}

export default App;
