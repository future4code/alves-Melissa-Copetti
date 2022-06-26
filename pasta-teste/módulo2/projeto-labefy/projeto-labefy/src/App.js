import React from 'react';
import TelaCadastro from './Components/CadastroPlaylists';
import TelaListaPlaylists from './Components/ListaDePlaylists';
import TelaMusicas from './Components/TelaMusicas';
import styled from 'styled-components';

const PaginaTotal = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,66,121,1) 35%, rgba(0,212,255,1) 100%);


`

 

export default class App extends React.Component {
  state = {
    telaAtual: "criar nova Playlist"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criar nova Playlist":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista de playlists":
        return <TelaListaPlaylists irParaCadastro={this.irParaCadastro} />
        
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

irParaCadastro = ()=>{
this.setState({telaAtual:"criar nova Playlist"})
}

irParaLista =()=>{
this.setState({telaAtual:"lista de playlists"})
}

inserirMusica =()=>{
  this.setState({telaAtual:"inserir nova música"})
}


  render() {
    return (
      <div>
        <PaginaTotal>
{this.escolheTela()}
</PaginaTotal>
      </div>
    );
  }
}
