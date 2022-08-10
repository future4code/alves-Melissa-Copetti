import axios from "axios";
import { BASE_URL } from "../Constants/Urls";

export const createRecipe = (body, clear, setIsLoading) => {
    setIsLoading(true);
  axios
    .post(`${BASE_URL}/recipe`, body, {
      headers: {
        Authorizarion: localStorage.getItem("token"),
      },
    })
    .then((resposta) => {
      alert(resposta.data.message);
      clear();
      setIsLoading(false);
    })
    .catch((error) => {
      alert(error.response.message);
      setIsLoading(false);
    });
};
