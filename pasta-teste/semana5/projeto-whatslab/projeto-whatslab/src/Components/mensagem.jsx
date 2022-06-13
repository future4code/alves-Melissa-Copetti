import React from "react";
import { ContainerMensagem, InputUsuario } from "./Style";



class MensagemEnviar extends React.Component {

    state = {
        mensagens: [
            {
                nome: "", texto: ""
            }
        ],
        usuario: "",
        mensagem: ""

    }

    onChangeMensagem = (event) => {
        this.setState({
            mensagem: event.target.value
        })
    }

    onChangeUsuario = (event) => {
        this.setState({
            usuario: event.target.value
        })
    }

    AdicionaMensagens = () => {
        const novaMensagem = { nome: this.state.usuario, texto: this.state.mensagem }
        let copiaMensagens = [...this.state.mensagens, this.AdicionaMensagens]
        copiaMensagens.push(novaMensagem)
        this.setState({ mensagens: copiaMensagens })
        this.setState({ usuario: "", mensagem: "" })
    }


    render() {
        const listaMensagens = this.state.mensagens.map((item) => {
            return (
                <div>
                    <p>
                        {item.nome}
                    </p>
                    <p>
                        {item.texto}
                    </p>
                </div>
            )
        })
        return (
            <ContainerMensagem>
                {listaMensagens}
                <div>
                    <InputUsuario
                        placeholder='Usuário'
                        onChange={this.onChangeUsuario}
                        value={this.state.usuario}
                    ></InputUsuario>
                    <input
                        placeholder='Mensagem'
                        onChange={this.onChangeMensagem}
                        value={this.state.mensagem}
                    />
                    <button onClick={this.AdicionaMensagens}>Enviar</button></div>
            </ContainerMensagem>
        );
    }
}
export default MensagemEnviar;