import axios from "axios";
import React from "react";
import {
  ButtonAdd,
  ButtonPage,
  IconButton,
  SvgIcon,
  Card,
  MainBack,
  Inputs,
  Title,
  BoxInputs,
} from "./Styled";

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };
  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "melissa-copetti-alves",
        },
      })
      .then((resposta) => {
        alert("usuario cadastrado com sucesso");
        this.setState({ nome: "", email: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  render() {
    return (
      <MainBack>
        <Card>
          <ButtonPage onClick={this.props.irParaLista}>
            {" "}
            Ir para Lista de Usuários
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
<BoxInputs>
          <Title> Cadastro</Title>
          <Inputs
            placeholder={"nome"}
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <Inputs
            placeholder={"E-mail"}
            value={this.state.email}
            onChange={this.handleEmail}
          />
          </BoxInputs>
          <ButtonAdd onClick={this.fazerCadastro}>Cadastrar</ButtonAdd>
        </Card>
      </MainBack>
    );
  }
}
