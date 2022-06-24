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

export default class App extends React.Component {
    state = {
       nome:""
    }
    componentDidMount() {
        this.escolherPlaylist()
    }


    fazerCadastro = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
          name: this.state.nome,
          
          axios.post(url,body, {
            headers: {
                Authorization:"melissa-copetti-alves"
            }
        }).then((resposta)=>{
    this.setState({nome:""})
        })
        .catch((error)=>{
    alert(error.response.data.message)
        })
    
    }



    render() {
            


            <div>
               
                
            </div>
        
    }
  }}