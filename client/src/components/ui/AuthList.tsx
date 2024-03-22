import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { LoginForm, SignupForm } from '../../types/auth';
import { loginThunk, logoutThunk, signupThunk } from '../../redux/slices/auth/thunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type AuthListProps = {
  onSubmit?: () => void
  onCancel?: () => void
}

export default function AuthList({ onSubmit, onCancel }: AuthListProps): JSX.Element {
  const [authType, setAuthType] = useState('login');
  const [formData, setFormData] = useState({ userType: 'client' });
  const status = useAppSelector((state) => state.auth.user.status)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const paperStyle = {
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '16px',
    width: 300,
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
    void dispatch(loginThunk(data))
    onCancel?.()
    event.currentTarget.reset()
  };

  const signupHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as SignupForm;
    void dispatch(signupThunk(data)).unwrap().then(() => onSubmit?.())
    onCancel?.()
    event.currentTarget.reset()
  };

  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    void dispatch(logoutThunk());
    onCancel?.();
    navigate('/')
  };
  
  return (
        <Paper sx={paperStyle}>
          {status !== 'logged' ? (
            <>
            <Button onClick={handleToggleAuthType} fullWidth>
              {authType === 'login' ? 'Авторизация' : 'Регистрация'}
            </Button>
            {authType === 'login' ? (
              <form onSubmit={loginHandler}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" name="email" onChange={handleFormChange} />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="password">Пароль</InputLabel>
                  <Input id="password" name="password" type="password" onChange={handleFormChange} />
                </FormControl>
                <Button type="submit" color="primary" variant="contained">
                  Отправить
                </Button>
                <Button fullWidth onClick={onCancel}>
            Отмена
          </Button>
              </form>
            ) : (
              <form onSubmit={signupHandler}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="name">Имя</InputLabel>
                  <Input id="name" name="name" onChange={handleFormChange} />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" name="email" onChange={handleFormChange} />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="password">Пароль</InputLabel>
                  <Input id="password" name="password" type="password" onChange={handleFormChange} />
                </FormControl>
                <Button type="submit" color="primary" variant="contained">
                  Отправить
                </Button>
                <Button fullWidth onClick={onCancel}>
                  Отмена
                </Button>
              </form>
            )}
            </>
        ) : (
          <>
            <Button onClick={logoutHandler} color="inherit">
              Выйти
            </Button>
            <Button fullWidth onClick={onCancel}>
              Отмена
            </Button>
          </>
        )}
        </Paper>
  );
}
