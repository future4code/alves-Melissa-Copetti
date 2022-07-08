import React from "react";
import axios from "axios";

function Clear() {


const limparMatchs = () => {
const body ={
    message:"sucess"
}
axios 
.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/copetti/clear",body)
.then(
    (resposta) => {
        alert("sucess")
    }
).catch((erro) => {
    console.log(erro)
});
};



    return(
<div>
<button onClick={limparMatchs}>Limpar Matchs</button>
</div>
    )
}
export default Clear()