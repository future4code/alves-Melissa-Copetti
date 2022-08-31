import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LimparMatchs from "../TelaMatchs/LimparMatchs";
import {
  ButtonsCardD,
  ButtonsCardL,
  QuadroImg,
  ButtonBox,
  ImgCard,
  ImgFundo,
  NameAge,
} from "./Stiled";
import Swal from "sweetalert2";

function TelaPerfis(props) {
  const [profile, setProfile] = useState([]);
  const [matches] = useState([]);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/person"
      )
      .then((resposta) => {
        setProfile(resposta.data.profile);
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const postMatchs = () => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/choose-person",
        body
      )
      .then((resposta) => {
        if (resposta.data.isMatch) {
          Swal.fire({
            title: "Não foi dessa vez!",
            text: ":(",
            imageUrl:
              "https://media2.giphy.com/media/2CdwFeWTJ2xFK/giphy.gif?cid=ecf05e479j7jp6e9uwpd0mrsi97p101fb9cszgkt8hasudyy&rid=giphy.gif&ct=g",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
          console.log(resposta.data);
        } else {
          Swal.fire({
            title: "Deu match!",
            text: "<3",
            imageUrl: "https://c.tenor.com/E6DwOqSl2REAAAAC/beijo-kiss.gif",
            imageWidth: 300,
            imageHeight: 250,
            imageAlt: "Custom image",
          });
        }
        setProfile(true);
        getProfile();
      })

      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div>
      <section>
        <QuadroImg>
          <ImgFundo src={profile.photo}></ImgFundo>
         <ImgCard src={profile.photo}></ImgCard>
        </QuadroImg>
      </section>
      <NameAge>
        <p>
          <strong>{profile.name},</strong>&nbsp;&nbsp;
        </p>
        <p>{profile.age}</p>
      </NameAge>
      <p>{profile.bio}</p>
  
      <ButtonBox>
        <ButtonsCardD onClick={getProfile}>X</ButtonsCardD>
        <ButtonsCardL onClick={() => postMatchs(true)}>❤</ButtonsCardL>
      </ButtonBox>
      <footer>{LimparMatchs}</footer>
      {matches}
    </div>
  );
}

export default TelaPerfis;
