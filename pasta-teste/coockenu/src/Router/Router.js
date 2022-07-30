import React from 'react'
import {AddRecipesPage} from "../Pages/AddRecipesPage/AddRecipesPage";
import {LoginPage} from "../Pages/LoginPage/LoginPage";
import {SingUpPage} from "../Pages/SingUpPage/SingUpPage";
import {RecipesDetail} from "../Pages/RecipesDetail/RecipesDetail";
import {RecipesList} from "../Pages/RecipesList/RecipesList";
import {ErrorPage} from '../Pages/ErrorPage/ErrorPage';
import {Routes, Route} from "react-router-dom"


export const Router = ({rightButtonText, setRightButtonText}) => {
  return (
    
    
   
    <Routes>
         <Route index element = {<RecipesList/>}/>
         <Route path="login" element = {<LoginPage/>}/>
         <Route path="details" element = {<RecipesDetail/>}/>
         <Route path="singup" element = {<SingUpPage/>}/>
        <Route path="addrecipes" element = {<AddRecipesPage/>}/>
        <Route path="error" element = {<ErrorPage/>}/>
    </Routes>
   
  )
}

