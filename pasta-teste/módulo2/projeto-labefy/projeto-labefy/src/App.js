import React from "react";
import axios from "axios";
// import styled from "styled-components";



export default class App extends React.Component {
    state = {
        nome: ""
    }
    componentDidMount() {
        this.escolherPlaylist()
    }


    escolherPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlist"
        const body = {
            name: this.state.nome,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            console.log("playlist criada:", resposta)
            this.setState({ nome: "" })
        })
            .catch((error) => {
                console.log(error)
                alert(error.response.data.message)
            })

    }

    mostrarTodasPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.gel(url, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            this.setState({ playlists: resposta.data.result.list })
        })
            .catch((error) => {
                console.log(error.data)
                alert(error.response.data.message)
            })

    }

    render() {
        const listaDePlaylists = () => {
            return this.state.playlists.map((playlist) => {
                <p key={playlist.id}>{playlist.name}</p>
            })
        }
        return (
            <div>
                <h1>Lista de Playlists</h1>
                <input onChange={this.onChangeNamePlaylist}
                    placeholder="nome da Playlist" />
                <button onClick={this.escolherPlaylist}
                    type='submit'>Criar Playlist</button>
            </div>
        )
    }
}