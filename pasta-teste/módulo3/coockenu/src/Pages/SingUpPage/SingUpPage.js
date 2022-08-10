import React from "react";
import Logo from "./../../Assets/logo.png";
import { UseUnProtectedPage } from "../../Hooks/useUnprotectedPage";
import { LogoImg, ScreenContainer } from "../LoginPage/Styled";
import { SingUpForm } from "./SingUpForm";

export const SingUpPage = ({ setRightButtonText }) => {
  UseUnProtectedPage();
  return (
    <ScreenContainer>
      <LogoImg src={Logo} />
      <SingUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};
