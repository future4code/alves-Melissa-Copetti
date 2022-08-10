import axios from "axios";
import { BASE_URL } from "../Constants/Urls";
import { goToRecipesList } from "../Router/Cordinator";

export const login = (
  body,
  clear,
  navigate,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((resposta) => {
      localStorage.setItem("token", resposta.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(navigate);
      setRightButtonText("logout");
    })
    .catch((error) => {
      setIsLoading(false);
    });
};

export const SignUp = (
  body,
  clear,
  navigate,
  setRightButtonText,
  setIsLoading
) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((resposta) => {
      localStorage.setItem("token", resposta.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(navigate);
      setRightButtonText("logout");
    })
    .catch((error) => {
      alert(error.response.message);
    });
};
