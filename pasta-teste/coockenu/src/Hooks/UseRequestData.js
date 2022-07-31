import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((resposta) => {
        setData(resposta.data);
      })
      .catch((error) => {
        console.log(error);
        alert("ocorreu um erro, tente novamente");
      });
  }, [url]);

  return data;
};
