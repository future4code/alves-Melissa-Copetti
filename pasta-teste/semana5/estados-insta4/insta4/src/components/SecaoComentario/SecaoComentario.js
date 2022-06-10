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

	Comentario:""

	};

onChangeInputComentario = (event)=> {
	this.setState({Comentario:event.target.value});
	console.log(this.state.comentario)
};


render() {
	
return(
<CommentContainer>
	<input
		placeholder={'Comentário'}
		tipe="text"
		onChange={this.onChangeComentario}		
/>
<button onClick={this.props.aoEnviar}>Enviar</button>
</CommentContainer>
)}
}

export default SecaoComentario