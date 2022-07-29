import React from 'react'
import {AddRecipesPage} from "../Pages/AddRecipesPage/AddRecipesPage";
import {LoginPage} from "../Pages/LoginPage/LoginPage";
import {SingUpPage} from "../Pages/SingUpPage/SingUpPage";
import {RecipesDetail} from "../Pages/RecipesDetail/RecipesDetail";
import {RecipesList} from "../Pages/RecipesList/RecipesList";
import {GlobalStyle} from './GlobalStyle';
import {ErrorPage} from '../Pages/ErrorPage/ErrorPage';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Header } from '../Components/Header/Header';

export const Router = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
         <Route index element = {<RecipesList/>}/>
         <Route path="login" element = {<LoginPage/>}/>
         <Route path="details" element = {<RecipesDetail/>}/>
         <Route path="singup" element = {<SingUpPage/>}/>
        <Route path="addrecipes" element = {<AddRecipesPage/>}/>
        <Route path="error" element = {<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

