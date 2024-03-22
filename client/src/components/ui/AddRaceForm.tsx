import { Box, Button, TextField } from '@mui/material';
import React from 'react';

export default function AddRaceForm(): JSX.Element {
  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить мотопробег</h3>

      <Box
        //   onSubmit={submitHandler}
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
            label="Название"
            placeholder="Название"
          />
          <TextField
            name="image"
            required
            id="outlined-required"
            label="Фото"
            placeholder="добавьте ссылку на фото"
          />
          <TextField
            name="desc"
            required
            id="outlined-required"
            label="Описание"
            placeholder="Описание"
          />
          <TextField
            name="date"
            required
            id="outlined-required"
            label="Дата"
            placeholder="Дата проведения"
          />
          <TextField
            name="length"
            required
            id="outlined-required"
            label="Длина"
            placeholder="Длина маршрута"
          />
          <Button
            style={{ marginTop: '15px', width: '15%' }}
            type="submit"
            variant="contained"
            color="success"
          >
            Добавить
          </Button>
        </div>
      </Box>
    </div>
  );
}
