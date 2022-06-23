import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
border:1px solid black;
padding: 10px;
margin:10px;
width:300px;
background-color: blueviolet;
display:flex;
justify-content: space-evenly;
font-size:large;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuario: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }


    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "melissa-copetti-alves"
            }
        }).then((resposta) => {
            console.log(resposta.data)
            this.setState({ usuario: resposta.data })
        })
            .catch((error) => {
                console.log(error.response.data.message)
                alert("ocorreu um problema, tente novamente")
            })
    }


     deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "melissa-copetti-alves"
        }
    }).then((resposta) => {
alert("Usuario deletado")
this.pegarUsuarios()

    })
        .catch((error) => {
            console.log(error.response.data.message)
            alert("ocorreu um problema, tente novamente")
        })
}

    render() {
        const listaUsuarios = this.state.usuario.map((user) => {
            


            return ( 
            <CardUsuario key={user.id}>
                <p>{user.name}</p>
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>
            )
        });
        console.log(listaUsuarios)
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>

                <h2> Lista de Usuários</h2>
                {listaUsuarios}
                
            </div>
        )
    }
}