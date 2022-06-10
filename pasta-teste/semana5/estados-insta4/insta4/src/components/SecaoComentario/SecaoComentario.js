import { render } from '@testing-library/react';
import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends React.Component {
	state = {

	valorImputComentario:""

	};

	adicionaComentario = () => {

		const novoComentário = this.state.valorImputComentario;
	}
	}
this.setState({comentario:novoComentário});

onChangeInputComentario = (event)=> {
	this.setState({valorImputComentario:event.target.value});
};

render();{
	
return(
<div>
	<><input
		value={this.state.valorImputComentario}
		onchange={this.onChangeInputComentario}
		placeholder={"Comentário"} /><button onClick={this.adicionaComentario}>Enviar</button>
		</>
</div>
);
}

export default SecaoComentario;