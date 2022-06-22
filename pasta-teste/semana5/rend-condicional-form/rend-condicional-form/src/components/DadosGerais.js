import { render } from "@testing-library/react";
import React from "react";

import './App.css';


class DadosGerais extends React.Component {
    state =
        nome = "";
    idade = "";
    email = "";
    escolaridade = ""
}
textoResposta = (event) => {
    this.setState({ nome: event.target.value });
    this.setState({ idade: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ escolaridade: event.target.value });

}
render() {
    return (
    <>
            <h1><b>ETAPA 1 - DADOS GERAIS</b></h1><ul>
                <li>Qual seu nome?</li>
                <input value={this.state.nome} onChage=""
                ></input>
                <li>Qual sua idade?</li>
                <input value={this.state.idade} onChage=""
                ></input>
                <li>Qual seu email?</li>
                <input value={this.state.email} onChage=""
                ></input>
                <li>Qual sua escolaridade?</li>
                <input value={this.state.escolaridade} onChage=""
                ></input>

            </ul>
        </>
    )
    
}


export default DadosGerais;
