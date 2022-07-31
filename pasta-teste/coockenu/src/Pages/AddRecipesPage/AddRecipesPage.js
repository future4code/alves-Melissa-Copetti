import React from "react";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import Typography from "@material-ui/core/Typography";
import { ScreenContainer, RecipeContainer } from "../RecipesDetail/Styled";
import { AddRecipesForm } from "./AddRecipesForm";

export const AddRecipesPage = () => {
  UseProtectedPage();
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography
          gutterBottom
          variant={"h4"}
          align={"center"}
          color={"textPrimary"}
        >
          Adicionar Nova Receita
        </Typography>
        <AddRecipesForm />
      </RecipeContainer>
    </ScreenContainer>
  );
};
