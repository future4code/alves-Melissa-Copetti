import axios from "axios";
import React from "react";
import styled from "styled-components";



const Title = styled.h2`
color: white;
display:flex;
justify-content:center;


`

const CadastroPlaylists = styled.div`
display:flex;
flex-direction: column;
justify-content:space-between;



`


const Buttons = styled.button `
border-radius:10px;
background-color:black;
font-weight:500;
border:2px solid #00d4ff;
color:white;


`




export default class TelaCadastro extends React.Component {
state = {
    nome:""
    
}
handleNome = (event) => {
    this.setState({nome:event.target.value})
}


cadastrarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
        name: this.state.nome
    
    }

    axios.post(url,body, {
        headers: {
            Authorization:"melissa-copetti-alves"
        }
    }).then((resposta)=>{
alert("playlist cadastrada com sucesso!")
this.setState({nome:""})
    })
    .catch((error)=>{
alert(error.response.data.message)
    })

}



    render(){
        return (
            <CadastroPlaylists>
                
        
               <Title> Inserir nova Playlist</Title>
               <input 
               placeholder={"nome"}
               value={this.state.nome}
               onChange={this.handleNome}
               />
                <Buttons onClick={this.cadastrarPlaylist}>Cadastrar</Buttons>
                <Buttons onClick={this.props.irParaLista}>Ir para Lista de Playlists</Buttons>
            </CadastroPlaylists>
        )
    }

}