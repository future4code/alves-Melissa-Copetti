import React from "react";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import { useRequestData } from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../Constants/Urls";
import { RecipeCard } from "../../Components/RecipeCard.js/RecipeCard";
import { AddRecipeButton, RecipeListContainer } from "./Styled";
import { Add } from "@mui/icons-material";
import { goToAddRecipesPage, goToRecipesDetail } from "../../Router/Cordinator";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";

export const RecipesList = () => {
  const navigate = useNavigate();
  UseProtectedPage();
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);
  console.log(recipes);

  const onClickCard = (id) => {
    goToRecipesDetail(navigate, id);
  };
  const recipeCard = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    );
  });

  return (
    <RecipeListContainer>
      {recipeCard.length > 0 ? recipeCard : <Loading />}
      <AddRecipeButton
        color={"prymaryColor"}
        onClick={() => goToAddRecipesPage(navigate)}
      >
        <Add />
      </AddRecipeButton>
    </RecipeListContainer>
  );
};
