import React  from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
// import TelaMatchs from './Components/TelaMatchs';

function TelaPerfis(props) {
  const [profile, setProfile] = useState([])
  const [matches, setMatches] = useState("")
  
  

  const getProfile = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/person").then(
        (resposta) => {
          setProfile(resposta.data.profile)
          console.log(resposta.data)
        }
      ).catch((erro) => {
        console.log(erro)
      });
  };


  useEffect(()=>{
    getProfile()
  },[])



const getMatchs = () => {
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/choose-person").then((resposta)=> {
        setMatches(resposta.data)
        console.log(resposta.data)
    }
    ).catch((erro)=> {
        console.log(erro)
    })
}

useEffect(()=>{
    getMatchs()
},[matches])







  const changeProfile = (event) =>{
    setProfile(event.target.value)
  };

 






  return (
    <div>
      <header>
        <h1>Perfis:</h1>
        <img src={profile.photo}></img>
        <br/>
        <p><strong>{profile.name}</strong></p>
        <br/>
        <p>{profile.age}</p>
        <br/>
        <p>{profile.bio}</p>
        <br/>
      </header>
      <hr/>
     <main>
    
   
      <button onClick={changeProfile}>Deslike</button>
      <button onClick={getMatchs}>Like</button>
     </main>
<footer>
  <button>Limpar Matchs</button>
</footer>
    </div>
  );
}

export default TelaPerfis;
