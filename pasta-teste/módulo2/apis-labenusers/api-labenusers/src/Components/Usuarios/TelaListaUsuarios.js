import React from "react";
import axios from "axios";
import {
  ButtonPage,
  SvgIcon,
  IconButton,
  Card,
  Title,
  MainBack,
  CardButton,
  CardUsuario,
  CardDedails,
  Usuario,
  MainUsuarios,
  Cabecalho,
} from "./styled";

export default class TelaListaUsuarios extends React.Component {
  state = {
    usuario: [],
  };
  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, {
        headers: {
          Authorization: "melissa-copetti-alves",
        },
      })
      .then((resposta) => {
        console.log(resposta.data);
        this.setState({ usuario: resposta.data });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert("ocorreu um problema, tente novamente");
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "melissa-copetti-alves",
        },
      })
      .then((resposta) => {
        alert("Usuario deletado");
        this.pegarUsuarios();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert("ocorreu um problema, tente novamente");
      });
  };

  render() {
    const listaUsuarios = this.state.usuario.map((user) => {
      return (
       
          <CardUsuario key={user.id}>
            <CardDedails>
              <Usuario>{user.name}</Usuario>
            </CardDedails>
            <CardButton onClick={() => this.deletarUsuario(user.id)}>
              Excluir
            </CardButton>
          </CardUsuario>
       
      );
    });

    console.log(listaUsuarios);
    return (
      <MainBack>
        <Card>
          <Cabecalho>
            <ButtonPage onClick={this.props.irParaCadastro}>
              {" "}
              Ir para Cadastro
              <IconButton>
                <SvgIcon
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </SvgIcon>
              </IconButton>
            </ButtonPage>

            <Title> Lista de Usuários</Title>
          </Cabecalho>
          <MainUsuarios>
          {listaUsuarios}
          </MainUsuarios>
        </Card>
      </MainBack>
    );
  }
}
