import React from "react";
import { ErrorImage, ErrorPageContiner } from "./Styled";
import Error from "../../Assets/error.png";
import Typography from "@material-ui/core/Typography";
export const ErrorPage = () => {
  return (
    <ErrorPageContiner>
      <ErrorImage src={Error} />
      <Typography color={"primary"} variant={"h4"} align={"center"}>
        Erro 404 - Página não encontrada
      </Typography>
    </ErrorPageContiner>
  );
};
