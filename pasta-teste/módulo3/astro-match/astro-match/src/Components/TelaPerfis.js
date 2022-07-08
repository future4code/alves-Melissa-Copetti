import React from 'react';
import axios from "axios";
import Like from "./imagens/Like.png";
import Dislike from "./imagens/Dislike.png";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import LimparMatchs from './LimparMatchs';



const MainCard = styled.div`
margin-top:50px;
border: 1px black;
width:347px;
height: 600px;
padding:5px;
border-radius:20px;
box-shadow: 10px 10px 10px 10px #696969;
flex-wrap: wrap;
  background: #ffff;
  display:flex;
  justify-content:center;
`

const ImgCard = styled.img`
width:95%;
height: 25rem;
object-fit:cover;
box-shadow: #696969 0px 10px 20px;
margin:5px;
border-radius:20px;
`
const ButtonsCard = styled.button`
width:50px;
cursor:pointer;
border-radius:45%;
border:none;

`
const ButtonImg = styled.img`
width:70%;
`

const ButtonBox = styled.div`
display:flex;
justify-content:space-between;
align-self:flex-end;


`


function TelaPerfis(props) {
    const [profile, setProfile] = useState([])
    const [matches, setMatches] = useState([])



    const getProfile = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:copetti/person").then(
                (resposta) => {
                    setProfile(resposta.data.profile)
                    console.log(resposta.data)
                }
            ).catch((erro) => {
                console.log(erro)
            });
    };


    useEffect(() => {
        getProfile()
    }, [])


    const postMatchs = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:copetti/choose-person", body).then((resposta) => {
                if (resposta.data.isMatch) {
                    alert('Deu match')
                    
                    console.log(resposta.data)
                } else {
                    alert('não foi dessa vez :(')
                }
                 setProfile() 

            })

            .catch((erro) => {
                console.log(erro)

            })
    }



    const changeProfile = (event) => {
        setProfile(event.target.value)
    };

    return (
        <div>
            <MainCard>
                <header>
                    <h1>astromatch</h1>
                    <button onClick={props.TrocaTela}>Matchs</button>
                    <hr />
                </header>
                <ImgCard src={profile.photo}></ImgCard>
                <br />
                <p><strong>{profile.name},</strong>&nbsp;&nbsp;</p>
                <br />
                <p>{profile.age}</p>
                <br />
                <p>{profile.bio}</p>
                <br />


                <ButtonBox>
                    <ButtonsCard onClick={changeProfile}><ButtonImg src={Dislike} /></ButtonsCard>
                    <ButtonsCard onClick={postMatchs}><ButtonImg src={Like} /></ButtonsCard>
                </ButtonBox>
            </MainCard>
            <footer>
                {LimparMatchs}
            </footer>
            {matches}
        </div>
    );
}

export default TelaPerfis;
