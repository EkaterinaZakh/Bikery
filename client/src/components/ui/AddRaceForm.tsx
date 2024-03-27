import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import type { AddRaceFormType } from '../../types/race';
import { addRaceThunk } from '../../redux/slices/race/thunk';

export default function AddRaceForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, newFormData] = useState<AddRaceFormType>({
    name: '',
    image: '',
    desc: '',
    length: 0,
    rateCounter: 0,
    date: new Date().toISOString().slice(0, 10),
  });

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    newFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
    void dispatch(addRaceThunk(formData));
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить мотопробег</h3>
      <Box
        className="form_Race"
        onSubmit={submitHandler}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiFormLabel-root': { color: 'white' },
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
            onChange={hangleChange}
            value={formData.name}
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
            type="date"
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

          <Button
            className="more_button"
            style={{ margin: '10px', width: '40%' }}
            type="submit"
            color="success"
          >
            Добавить
          </Button>
        </div>
      </Box>
    </div>
  );
}
