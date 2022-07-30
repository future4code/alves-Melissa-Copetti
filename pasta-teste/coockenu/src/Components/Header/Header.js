import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';
import { goToLogin, goToRecipesList } from '../../Router/Cordinator';

export const Header = ({rightButtonText, setRightButtonText}) => {
  const navigate = useNavigate()
  

const logout = () => {
  localStorage.removeItem("token")
}

  const rightButtonAction = () => {
if (token){
  logout()
  setRightButtonText("logout")
  goToLogin(navigate)
}else{
  goToLogin(navigate)
}
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=> goToRecipesList(navigate)}color="inherit">Cookenu</Button>
            <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}