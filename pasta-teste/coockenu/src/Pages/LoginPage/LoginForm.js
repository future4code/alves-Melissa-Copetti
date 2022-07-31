import React from "react";
import useForm from "../../Hooks/UseForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { login } from "../../Service/User";
import { useNavigate } from "react-router-dom";
import { InputsContainer, LoginFormContainer } from "./Styled";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";

export const LoginForm = ({ setRightButtonText }) => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText, setIsLoading);
  };
  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type={"email"}
          />

          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type={"password"}
          />
          <Button
            type="submit"
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <p>Login!</p>
            )}
          </Button>
        </InputsContainer>
      </form>
    </LoginFormContainer>
  );
};
