import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import theme from './Constants/Theme'
import {Router} from './Router/Router'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App()