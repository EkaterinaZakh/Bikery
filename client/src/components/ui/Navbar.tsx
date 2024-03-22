import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutThunk } from '../../redux/slices/auth/thunks';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);
  const navs =
    user.status === 'guest'
      ? [
          { name: 'Главная', link: '/' },
          { name: 'Фестивали', link: '/fests' },
          { name: 'Мотопробеги', link: '/characters/favorites' },
          { name: 'Магазин', link: '/shop' },
          { name: 'Войти', link: '/login' },
          { name: 'Регистрация', link: '/signup' },
        ]
        : [
        { name: 'Главная', link: '/' },
        { name: 'Фестивали', link: '/fests' },
        { name: 'Мотопробеги', link: '/characters/favorites' },
        { name: 'Магазин', link: '/shop' },
        ];

  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    void dispatch(logoutThunk());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{borderRadius: '10px', backgroundColor: '#15030366'}} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.status === 'logged' ? user.name : 'Гость'}
          </Typography>
          {navs.map((nav) => (
            <Button key={nav.name} component={RouterLink} to={nav.link} color="inherit">
              {nav.name}
            </Button>
          ))}
          {user.status === 'logged' && (
            <Button onClick={logoutHandler} color="inherit">
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
