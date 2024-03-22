import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import type { SignupForm } from '../../../types/auth';
import { signupThunk } from '../../../redux/slices/auth/thunks';
import { useAppDispatch } from '../../../redux/hooks';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as SignupForm;
    // console.log(data);

    void dispatch(signupThunk(data));
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Региcтрация</h3>

      <Box
        onSubmit={submitHandler}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            name="name"
            required
            id="outlined-required"
            label="Имя"
            placeholder="Введите имя"
          />
          <TextField
            name="email"
            required
            id="outlined-required"
            label="Email"
            placeholder="Введите Email"
          />
          <TextField
            name="password"
            required
            id="outlined-required"
            label="Пароль"
            placeholder="Введите пароль"
          />
          <Button
            style={{ marginTop: '15px', width: '15%' }}
            type="submit"
            variant="contained"
            color="success"
          >
            Зарегистрироваться
          </Button>
        </div>
      </Box>
    </div>
  );
}
