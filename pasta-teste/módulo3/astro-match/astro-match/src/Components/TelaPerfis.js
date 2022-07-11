import React from 'react';
import axios from "axios";
import Like from "./imagens/Like.png";
import Dislike from "./imagens/Deslike.png";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import LimparMatchs from './LimparMatchs';
import { Container } from '@mui/system';





const ImgCard = styled.img`

object-fit:cover contain;
max-width: 100%;
max-height: 100%;
z-index:1;
`


const QuadroImg = styled.div`
/* width: 20vw; */
    height: 20vw;
    border-radius:20px;
    display: flex;
    overflow: hidden;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    justify-self: center;
    box-shadow: #696969 0px 10px 20px;


`

const ImgFundo = styled.img`
position: absolute;
    height: 100%;
    width: 100%;
    filter: blur(10px);
    `



const ButtonsCard = styled.button`
width:50px;
cursor:pointer;
border-radius:45%;
border:none;
box-shadow: #696969 0px 1px 2px;

`
const ButtonImg = styled.img`
width:70%;

`

const ButtonBox = styled.div`
display:flex;
justify-content:space-evenly;
align-self:center;


`
const NameAge = styled.div`
font-size: 25px;
margin-bottom: 10px;
font-weight: normal;
display:flex;
align-self:center;

`


function TelaPerfis(props) {
    const [profile, setProfile] = useState([])
    const [matches, setMatches] = useState([])



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
                if (resposta.data.isMatch) {
                    alert('Deu match!<3')
                    console.log(resposta.data)
                } else {
                    alert('não foi dessa vez :(')
                }
                setProfile(true)
                getProfile()

            })

            .catch((erro) => {
                console.log(erro)

            })
    }


    return (
        <div>
            
                <section>
                <QuadroImg>
                <ImgFundo src={profile.photo}></ImgFundo>
                <ImgCard src={profile.photo}></ImgCard>
                </QuadroImg>
                </section>
                <br />
                <NameAge>
                <p><strong>{profile.name},</strong>&nbsp;&nbsp;</p>
                <p>{profile.age}</p>
                </NameAge>
                <p>{profile.bio}</p>
                <br />


                <ButtonBox>
                    <ButtonsCard onClick={getProfile}><ButtonImg src={Dislike} /></ButtonsCard>
                    <ButtonsCard onClick={() => postMatchs(true)}><ButtonImg src={Like} /></ButtonsCard>
                </ButtonBox>
           
            <footer>
                {LimparMatchs}
            </footer>
            {matches}
        </div>
    );
}

export default TelaPerfis;
