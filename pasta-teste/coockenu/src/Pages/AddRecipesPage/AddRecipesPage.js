import React from 'react'
import { UseProtectedPage } from '../../Hooks/UseProtectedPage'

export const AddRecipesPage = () => {
  UseProtectedPage()
  return (
    <div>AddRecipesPage</div>
  )
}
