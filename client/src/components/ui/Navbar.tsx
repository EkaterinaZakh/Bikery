import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ marginRight:'10px'}}>
          <Button href='/' color="inherit">Главная</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginRight:'10px'}}>
          <Button color="inherit">Фестивали</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginRight:'10px'}}>
          <Button color="inherit">Байкшоп</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
          <Button color="inherit">Маршруты</Button>
          </Typography>
          <Button href='/signup' color="inherit">Регистрация</Button>
          <Button href='/login' color="inherit">Войти</Button>
          <Button href='/logout' color="inherit">Выйти</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}