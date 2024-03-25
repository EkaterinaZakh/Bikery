import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import BaseModal from './BaseModal';
import AuthList from './AuthList';

type NavItem = {
  name: string;
  link: string;
};

export default function NavBar(): JSX.Element {
  const user = useAppSelector((store) => store.auth.user);
  const [openModal, setOpenModal] = useState(false);
  const navs: NavItem[] = [
    { name: 'Главная', link: '/' },
    { name: 'Фестивали', link: '/fests' },
    { name: 'Мотопробеги', link: 'races' },
    { name: 'Магазин', link: '/shop' },
  ];

  const handleCloseModal = (): void => {
    setOpenModal(false);
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
          >
            {user.status !== 'logged' ? 'Присоединиться?' : 'Выйти?'}
          </Button>

          <BaseModal open={openModal} onClose={handleCloseModal}>
            <AuthList onSubmit={handleCloseModal} onCancel={handleCloseModal} />
          </BaseModal>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
