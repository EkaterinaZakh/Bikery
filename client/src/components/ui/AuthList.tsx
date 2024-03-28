import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { LoginForm, SignupForm } from '../../types/auth';
import { loginThunk, logoutThunk, signupThunk } from '../../redux/slices/auth/thunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type AuthListProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

export default function AuthList({ onSubmit, onCancel }: AuthListProps): JSX.Element {
  const [authType, setAuthType] = useState('login');
  const [formData, setFormData] = useState({ userType: 'client' });
  const status = useAppSelector((state) => state.auth.user.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const paperStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
    padding: '16px',
    width: 'auto',
    margin: 'auto', // Центрирование по горизонтали
  };

  const handleToggleAuthType = (): void => {
    setAuthType(authType === 'login' ? 'register' : 'login');
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as LoginForm;
    void dispatch(loginThunk(data));
    onCancel?.();
    event.currentTarget.reset();
  };

  const signupHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as SignupForm;
    void dispatch(signupThunk(data))
      .unwrap()
      .then(() => onSubmit?.());
    onCancel?.();
    event.currentTarget.reset();
  };

  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    void dispatch(logoutThunk());
    onCancel?.();
    navigate('/');
  };

  return (
    // <Paper sx={paperStyle}>
    //   {status !== 'logged' ? (
    //     <>
    //       <Button
    //         onClick={handleToggleAuthType}
    //         fullWidth
    //       >
    //         {authType === 'login' ? 'Авторизация' : 'Регистрация'}
    //       </Button>
    //       {authType === 'login' ? (
    //         <form onSubmit={loginHandler}>
    //           <FormControl fullWidth>
    //             <InputLabel htmlFor="email">Email</InputLabel>
    //             <Input id="email" name="email" onChange={handleFormChange} />
    //           </FormControl>
    //           <FormControl fullWidth>
    //             <InputLabel htmlFor="password">Пароль</InputLabel>
    //             <Input id="password" name="password" type="password" onChange={handleFormChange} />
    //           </FormControl>
    //           <Button type="submit" color="primary" variant="contained">
    //             Отправить
    //           </Button>
    //           <Button fullWidth onClick={onCancel}>
    //             Отмена
    //           </Button>
    //         </form>
    //       ) : (
    //         <form onSubmit={signupHandler}>
    //           <FormControl fullWidth>
    //             <InputLabel htmlFor="name">Имя</InputLabel>
    //             <Input id="name" name="name" onChange={handleFormChange} />
    //           </FormControl>
    //           <FormControl fullWidth>
    //             <InputLabel htmlFor="email">Email</InputLabel>
    //             <Input id="email" name="email" onChange={handleFormChange} />
    //           </FormControl>
    //           <FormControl fullWidth>
    //             <InputLabel htmlFor="password">Пароль</InputLabel>
    //             <Input id="password" name="password" type="password" onChange={handleFormChange} />
    //           </FormControl>
    //           <Button type="submit" color="primary" variant="contained">
    //             Отправить
    //           </Button>
    //           <Button fullWidth onClick={onCancel}>
    //             Отмена
    //           </Button>
    //         </form>
    //       )}
    //     </>
    //   ) : (
    //     <>
    //       <Button onClick={logoutHandler} color="inherit">
    //         Выйти
    //       </Button>
    //       <Button fullWidth onClick={onCancel}>
    //         Отмена
    //       </Button>
    //     </>
    //   )}
    // </Paper>
    <Paper sx={paperStyle}>
      {status !== 'logged' ? (
        <>
          <Button
            onClick={handleToggleAuthType}
            fullWidth
            sx={{ marginTop: '20px', color: '#f66d52' }}
          >
            {authType === 'login' ? 'Авторизация' : 'Регистрация'}
          </Button>
          {authType === 'login' ? (
            <form style={{ textAlign: 'center' }} onSubmit={loginHandler}>
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel sx={{ color: 'black', textAlign: 'center' }} htmlFor="email">
                  Email
                </InputLabel>
                <Input id="email" name="email" onChange={handleFormChange} />
              </FormControl>
              <FormControl  fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel sx={{ color: 'black'}} htmlFor="password">Пароль</InputLabel>
                <Input id="password" name="password" type="password" onChange={handleFormChange} />
              </FormControl>
              <Button type="submit"   sx={{ marginTop: '20px', background:'#f66d52', color:'black' }}>
                Отправить
              </Button>
              <Button fullWidth onClick={onCancel} sx={{ marginTop: '20px', color:'black' }}>
                Отмена
              </Button>
            </form>
          ) : (
            <form style={{ textAlign: 'center' }} onSubmit={signupHandler}>
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel sx={{ color: 'black'}} htmlFor="name">Имя</InputLabel>
                <Input id="name" name="name" onChange={handleFormChange} />
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel sx={{ color: 'black'}} htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" onChange={handleFormChange} />
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: '20px' }}>
                <InputLabel sx={{ color: 'black'}} htmlFor="password">Пароль</InputLabel>
                <Input id="password" name="password" type="password" onChange={handleFormChange} />
              </FormControl>
              <Button type="submit"   sx={{ marginTop: '20px', background:'#f66d52', color:'black' }}>
                Отправить
              </Button>
              <Button fullWidth onClick={onCancel} sx={{ marginTop: '20px', color:'black' }}>
                Отмена
              </Button>
            </form>
          )}
        </>
      ) : (
        <Box>
          <Button onClick={logoutHandler} color="inherit" fullWidth sx={{ marginTop: '20px' }}>
            Выйти
          </Button>
          <Button fullWidth onClick={onCancel} sx={{ marginTop: '20px', color: 'black' }}>
            Отмена
          </Button>
        </Box>
      )}
    </Paper>
  );
}
