import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import SecaoComentario from './components/SecaoComentario/SecaoComentario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pessoa: [
      {
          nomeUsuario:{'paulinha'},
          fotoUsuario:{'https://picsum.photos/50/50'},
          fotoPost:{'https://picsum.photos/200/150'},
          novoComentario:{SecaoComentario}
      },
        {
          nomeUsuario:{'ana'},
          fotoUsuario:{'https://picsum.photos/50/50'},
          fotoPost:{'https://picsum.photos/200/150'},
          novoComentario={SecaoComentario},
        
        },
        {
          nomeUsuario:{'João'},
          fotoUsuario:{'https://picsum.photos/50/50'},
          fotoPost:{'https://picsum.photos/200/150'},
          novoComentario:{SecaoComentario}
        }
      
    ],
 
valorImputNome: "",
valorImputFotoUsuario:"",
valorImputFotoPost: ""
} 
adicionaPost = () => {
  const gerandoPost = {
    nomeUsuario: this.state.valorImputNome,
    nomeUsuario:this.state.valorImputFotoUsuario,
    nomeUsuario: this.state.valorImputFotoPost,
  }
  const novoPost = [...this.state.pessoa, gerandoPost]
  this.setState({
    pessoa:novoPost,
    valorImputNome:"",
    valorImputFotoUsuario:"",
    valorImputFotoPost:"",
  })
}

onChangeInputNome = (event) => {
  this.setState({
    valorImputNome:event.target.value
  })
}
onChangeInputFotoUsuario = (event) => {
  this.setState({
    valorInputFotoUsuario: event.target.value
  })
}

onChangeInputFotoPost = (event) => {
  this.setState({
    valorImputFotoUsuario: event.target.value
  })
}

render(){
  const listaDePost = this.state.pessoa.map((post, indice)=>{
    return <post key={indice}
    nomeUsuario={post.nomeUsuario}
    fotoUsuario={post.fotoUsuario}
    fotoPost={post.fotoPost} />

  })
  return(
    <MainContainer>
      <h1>Criação de Post</h1>
      <FormulariodePost>
        {listaDePost}
      </FormulariodePost>
    </MainContainer>

  )
}


}




export default App;
