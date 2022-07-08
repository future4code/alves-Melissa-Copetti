import React from 'react';
import axios from "axios";
import Like from "./imagens/Like.png";
import Dislike from "./imagens/Dislike.png";
import styled from "styled-components";
import { useState, useEffect } from 'react';



const MainCard = styled.div`
border: 1px black;
width:347px;
height: 680px;
padding:5px;
box-shadow: 10px 10px 10px 10px #696969;
flex-wrap: wrap;
  background: #ffff;
`

const ImgCard = styled.img`
width:90%;
box-shadow: 1px 1px 2px 2px #696969;
margin:5px;
display:flex;
justify-content:center;
border-radius:20px;
`
const ButtonsCard = styled.button`
width:50px;
border-radius:45%;
border:none;

`
const ButtonImg = styled.img`
width:70%;
`

const ButtonBox = styled.div`
display:flex;
justify-content:space-evenly;
align-items:flex-end;


`


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


    useEffect(() => {
        getProfile()
    }, [])



    const postMatchs = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/choose-person", body).then((resposta) => {
                setMatches(resposta.data)
                console.log(resposta.data)
            }
            ).catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(() => {
        postMatchs()
    }, [])


    const changeProfile = (event) => {
        setProfile(event.target.value)
    };

    return (
        <div>
            <MainCard>
                <header>
                    <h1>astromatch</h1>
                    <button onClick={props.TelaMatchs}>Matchs</button>
                    <hr />
                </header>
                <ImgCard src={profile.photo}></ImgCard>
                <br />
                <p><strong>{profile.name}</strong></p>
                <br />
                <p>{profile.age}</p>
                <br />
                <p>{profile.bio}</p>
                <br />

                <hr />
                <ButtonBox>
                    <ButtonsCard onClick={changeProfile}><ButtonImg src={Dislike} /></ButtonsCard>
                    <ButtonsCard onClick={postMatchs}><ButtonImg src={Like} /></ButtonsCard>
                </ButtonBox>
            </MainCard>
            <footer>
                <button>Limpar Matchs</button>
            </footer>
            {matches}
        </div>
    );
}

export default TelaPerfis;
