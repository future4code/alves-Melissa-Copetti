import { ThemeProvider } from '@material-ui/core'
import React, {useState}from 'react'
import theme from './Constants/Theme'
import {Router} from './Router/Router'
import { Header } from './Components/Header/Header'
import {BrowserRouter} from "./Components/Header/Header"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] =
  useState(token? "Logout": 'Login')
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router setRightButtonText= {setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App