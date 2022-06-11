


render() {
    const nome = this.props.nome.toLowerCase()
    if (nome === "eu") {
        return (
            <div>{this.props.conteudo}</div>
                    //Quando o nome do usuário for "eu", o balão 
                    //só vai mostrar o conteúdo da mensagem
        )
    } else {
        return (
            <div>
            <div>{this.props.nome}></div>
            <div>{this.props.conteudo}</div>
            </div>
                    //Quando o nome do usuário for qualquer outra coisa, 
                    //o balão vai mostrar o nome do usuário e o conteúdo da mensagem
        )
    }}}