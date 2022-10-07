import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from './constants'

const App = () => {

  useEffect = () => {
axios.get=`${BASE_URL}pizzas`
  },[]


  return (
    <div>
  <PizzaCard/>
      
    </div>
  )
}

export default App
