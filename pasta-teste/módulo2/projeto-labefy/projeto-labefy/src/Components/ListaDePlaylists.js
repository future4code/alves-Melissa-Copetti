import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaMusicas from "./TelaMusicas";


const CardPlaylists = styled.div`
border:1px solid black;
padding: 10px;
margin:10px;
width:300px;
background-color:black;
display:flex;
display:block;
flex-direction:column;
font-size:large;
align-self:center;
align-items:center;
margin-left:10rem;

`

const PlaylistName = styled.p`
color: #00d4ff;
font-size: large;
font-weight: 900;

`

const Title = styled.h2`
color: white;
display:flex;
justify-content:center;


`

const Buttons = styled.button`
border-radius:10px;
background-color:black;
font-weight:500;
border:2px solid #00d4ff;
color:white;


`


export default class TelaListaPlaylists extends React.Component {
    state = {
        playlists: []
    }
    componentDidMount() {
        this.pegarPlaylists()
    }


    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            console.log(resposta.data.result.list)
            this.setState({ playlists: resposta.data.result.list })
        })
            .catch((error) => {
                console.log(error.response.data.message)
                alert("ocorreu um problema, tente novamente")
            })
    }


    deletarPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            alert("Playlist apagada")
            this.pegarPlaylist()

        })
            .catch((error) => {
                console.log(error.response.data.message)
                alert("ocorreu um problema, tente novamente")
            })
    }

    render() {
        const listaDePlaylists = this.state.playlists.map((musics) => {
            return (

                <CardPlaylists
                    key={musics.id}>


                    <PlaylistName>{musics.name}</PlaylistName>


                    <Buttons onClick={() => this.deletarPlaylist(musics.id)}>Apagar</Buttons>

                    <Buttons onClick={inserirMusica = () => {
                        return
                        <TelaMusicas/> }}
                        type='submit'>Inserir música</Buttons>

                </CardPlaylists>
            )
        });

        console.log(listaDePlaylists)
        return (


            <div>
                <Title> Suas Playlists</Title>

                <Buttons onClick={this.props.irParaCadastro}
                    type='submit'>Cadastrar nova Playlist</Buttons>


                {listaDePlaylists}

            </div>
        )
    }
}