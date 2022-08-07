import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { StyledToolbar } from "./Styled";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToRecipesList } from "../../Router/Cordinator";

export const Header = ({ rightButtonText, setRightButtonText }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("logout");
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToRecipesList(navigate)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
