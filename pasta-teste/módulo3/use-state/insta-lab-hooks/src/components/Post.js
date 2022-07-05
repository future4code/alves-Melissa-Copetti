import { useState } from "react";

function Post(props) {
  const [curtido, setCurtidoValue] = useState(false)
  const [numeroCurtidas, setNumeroCurtidasValue] = useState(0)
  const [comentando, setComentandoValue] = useState(false)
  const [numeroComentarios, setNumeroComentariosValue] = useState(0)
  const [comentarios, setComentariosValue] = useState([])
  const [inputValue, setInputValue] = useState('')



  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setCurtidoValue(!curtido)
      setNumeroCurtidasValue(numeroCurtidas - 1)
    } else {
      setCurtidoValue(!curtido)
      setNumeroCurtidasValue(numeroCurtidas + 1)
    }
  };

  // Passo7
  const onClickComentario = () => {
    setComentandoValue(comentando)
  };

  // Passo7
  const onChangeComentario = (event) => {
    setInputValue({ inputValue: event.target.value })
  };

  // Passo7
  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
    console.log(comentario)
setComentariosValue (listaDeComentarios)
    setComentandoValue( false )
    setNumeroComentariosValue(numeroComentarios + 1)
    setInputValue('')

  };

  {/* Passo6 */ }
  const caixaDeComentario = setComentandoValue ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>

      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={() => { enviarComentario(setInputValue) }} >Enviar</button>
    </>
  ) :
    // Passo8
    <>Lógica de exibir lista de comentarios</>
  {
    comentarios.map((comentario, index) => {
      return <p key={index}> {comentario}</p>;
    })
  }
  ;


  return (
    <main>
      <header>
        <figure>
          { }
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3*/}

          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida} >
            {/* Passo6 */}
            {numeroCurtidas === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;