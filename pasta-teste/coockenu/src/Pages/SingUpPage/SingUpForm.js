import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { SignUp } from "../../Service/User";
import { InputsContainer, SignUpButtonContainer } from "../LoginPage/Styled";
import CircularProgress from "@material-ui/core/CircularProgress";

export const SingUpForm = ({ setRightButtonText }) => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    name: "",
    password: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    SignUp(form, clear, navigate, setRightButtonText, setIsLoading);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpButtonContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            label={"Senha"}
            variant={"outlined"}
            onChange={onChange}
            fullWidth
            required
            margin={"normal"}
            type={"password"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <> Fazer Cadastro</>
          )}
        </Button>
      </SignUpButtonContainer>
    </form>
  );
};
