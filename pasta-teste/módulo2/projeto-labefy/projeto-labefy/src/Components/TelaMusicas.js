import axios from "axios";
import React from "react";
import TelaListaPlaylists from "./ListaDePlaylists";


export default class TelaMusicas extends React.Component {
    state = {
        name: "",
        artist: "",
        url: ""

    }


    handleNome = (event) => {
        this.setState({ name: event.target.value })
    }

    handleArtist = (event) => {
        this.setState({ artist: event.target.value })
    }

    handleUrl = (event) => {
        this.setState({ url: event.target.value })
    }




    inserirMusica = (PlaylistId) => {
        const url1 = `https://us-cenhttps://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/ ${PlaylistId}/track`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url

        }

        axios.post(url1, body, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            alert("música adicionada")
            this.setState({ name: "", artist:"", url:"" })
        })
            .catch((error) => {
                alert(error.response.data.message)
            })

    }

    deletarMusica = (trackId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/${trackId}`
        axios.delete(url, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            alert("Música apagada")
            this.inserirMusica()

        })
            .catch((error) => {
                console.log(error.response.data.message)
                alert("ocorreu um problema, tente novamente")
            })
    }




    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Playlists</button>

                <h2> Inserir nova Playlist</h2>
                <input
                    placeholder={"Música"}
                    value={this.state.name}
                    onChange={this.handleNome}
                />


                <input
                    placeholder={"Artista"}
                    value={this.state.artist}
                    onChange={this.handleArtist}
                />


                <input
                    placeholder={"Link"}
                    value={this.state.url}
                    onChange={this.handleUrl}
                />
                <button onClick={this.inserirMusica}>Inserir nova Música</button>
            </div>
        )
    }

}