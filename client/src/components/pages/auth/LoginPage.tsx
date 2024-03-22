import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import type { LoginForm } from '../../../types/auth';
import { loginThunk } from '../../../redux/slices/auth/thunks';

export default function LoginPage(): JSX.Element {
   const dispatch = useAppDispatch()

   const submitHandler = (event:React.FormEvent<HTMLFormElement>) : void => {
      event.preventDefault()
      const data = Object.fromEntries(new FormData(event.currentTarget)) as LoginForm
      void dispatch(loginThunk(data))
   }
//
  return (
    <div style={{ margin: '10px' }}>
       <h3 style={{textAlign:'center'}}>Войти в аккаунт</h3>

    <Box onSubmit={submitHandler}      
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
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
        <Button style={{ marginTop: '15px', width:'15%' }} type="submit" variant="contained" color="success">
          Войти
        </Button>
      </div>
    </Box>
  </div>
  );
}
