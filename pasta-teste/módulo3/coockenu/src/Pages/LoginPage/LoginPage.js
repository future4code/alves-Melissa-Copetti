import React from "react";
import { ScreenContainer, LogoImg, SignUpButtonContainer } from "./Styled";
import Logo from "../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import { LoginForm } from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSingUpPage } from "../../Router/Cordinator";
import { UseUnProtectedPage } from "../../Hooks/useUnprotectedPage";

export const LoginPage = ({ setRightButtonText }) => {
  UseUnProtectedPage();
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImg src={Logo} />
      <LoginForm setRightButtonText={setRightButtonText} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSingUpPage(navigate)}
          type="submit"
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Não Possui Conta? Cadastre-se!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};
