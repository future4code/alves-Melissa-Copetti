import React from "react";


class MensagemEnviar extends React.Component {

    state = {
        mensagem: " "
    }


    onChangeMensagem = (event) => {
        this.setState({
            mensagem: event.target.value
        })
        return (this.state.mensagem)
    }

    render() {
        return (
            <containerMensagem>
                <input
                    placeholder={'mensagem'}
                    type="string"
                    onChange={this.onChangeMensagem}
                />
                <button onClick={this.props.MensagemEnviar}>Enviar</button>
            </containerMensagem>
        );
    }
}
export default MensagemEnviar;