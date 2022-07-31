import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../Hooks/UseForm";
import { AddRecipeFormContainer, InputsContainer } from "./Styled";
import { createRecipe } from "../../Service/recipe";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const AddRecipesForm = () => {
  const [form, onChange, clear] = useForm({
    title: "",
    description: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createRecipe(form, clear, setIsLoading);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={"Título"}
            variant={"outlined"}
            fullWidth
            required
            autoFocul
            margin={"normal"}
          />

          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={"Descrição"}
            variant={"outlined"}
            fullWidth
            required
            autoFocul
            margin={"normal"}
          />
          <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={"Foto"}
            variant={"outlined"}
            fullWidth
            required
            autoFocul
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"prymaryColor"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <p>Adicionar Receita</p>
          )}
        </Button>
      </AddRecipeFormContainer>
    </form>
  );
};
