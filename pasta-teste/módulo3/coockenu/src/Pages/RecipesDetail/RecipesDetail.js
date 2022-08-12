import React from "react";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../Constants/Urls";
import { ScreenContainer, RecipeContainer, RecipeImage } from "./Styled";
import Typography from "@material-ui/core/Typography";
import { Loading } from "../../Components/Loading/Loading";

export const RecipesDetail = () => {
  UseProtectedPage();
  const params = useParams();
  const recipe = useRequestData({}, `${BASE_URL}/recipe/${params.id}`)[0];
  return (
    <ScreenContainer>
      {recipe ? (
        <RecipeContainer>
          <RecipeImage src={recipe.image} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"prymaryColor"}
          >
            {recipe && recipe.title}
          </Typography>
          <Typography gutterBottom align={"center"}>
            {recipe.description}
          </Typography>
        </RecipeContainer>
      ) : (
        <Loading />
      )}
    </ScreenContainer>
  );
};
