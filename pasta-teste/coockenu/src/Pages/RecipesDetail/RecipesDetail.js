import React from 'react'
import { UseProtectedPage } from '../../Hooks/UseProtectedPage'

export const RecipesDetail = () => {
  UseProtectedPage()
  return (
    <div>RecipesDetail</div>
  )
}
