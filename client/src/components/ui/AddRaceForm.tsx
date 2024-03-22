import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { AddRaceForm } from '../../types/race';
import { addRaceThunk } from '../../redux/slices/race/thunk';

export default function AddRaceForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, newFormData] = useState<AddRaceForm>({
    name: '',
    image: '',
    desc: '',
    length,
    rateCounter: 0,
    date: new Date(),
  });

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    newFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    void dispatch(addRaceThunk(formData));
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить мотопробег</h3>

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
            label="Название"
            placeholder="Название"
            value={formData.name}
            onChange={hangleChange}
          />
          <TextField
            name="image"
            required
            id="outlined-required"
            label="Фото"
            placeholder="http://..."
            onChange={hangleChange}
            value={formData.image}
          />
          <TextField
            name="desc"
            required
            id="outlined-required"
            label="Описание"
            placeholder="Описание"
            onChange={hangleChange}
            value={formData.desc}
          />
          <TextField
            name="date"
            required
            id="outlined-required"
            label="Дата"
            placeholder="Дата проведения"
            onChange={hangleChange}
            value={formData.date}
          />
          <TextField
            name="length"
            required
            id="outlined-required"
            label="Длина"
            placeholder="Длина маршрута"
            onChange={hangleChange}
            value={formData.length}
          />
          <TextField
            name="rateCounter"
            required
            id="outlined-required"
            label="Рейтинг"
            placeholder="Рейтинг"
            onChange={hangleChange}
            value={formData.rateCounter}
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
