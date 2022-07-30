import React from 'react'
import Button from '@mui/material/Button';
import { UseProtectedPage } from '../../Hooks/UseProtectedPage';

export const RecipesList = () => {
  UseProtectedPage()

  return (
    <div>
      RecipesList
      </div>
  )
}
