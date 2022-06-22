import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
 state = {
  name:"",
  email:""
 }
};

componentDidMount = () => {
   this.createUser()
};


const headers = { headers: { Authorization: "melissa-copetti-alves"}}

const body = {body: { nome: this.state.nome, email: this.state.email}}

const url = ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users")

createUser = () => {
  axios.post(url,headers,body)
  .then((response) => {
  this.setState({usuarios:response.data.result.list})
  alert(response.message)
}).catch((error)=> {
  console.log(error.message)
  alert(error.response.message);
});
};

onChangeUsuario = (event) => {
  this.setState({nomeUsuario: event.target.value});
};

onChageEmail = (event) => {
  this.setState({emailUsuario: event.target.value})
};

removeUsuario = (id) => {
  axios.delete('https://documenter.getpostman.com/view/7549981/SzfCT5G2?version=latest#7bf79c51-34eb-4029-96ab-46366d2143d1',
    headers: "melissa-copetti-alves");}

.then((response) => {
  alert("Usuario Removido");
  this.pegarUsuario();}).catch{(error)=>{
    alert(error.response);
  }};
  render() {
    return (<div>
      {this.exibirFormulario()}
    </div>)
  }




export default App;
