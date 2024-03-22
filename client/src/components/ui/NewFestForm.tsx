import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import type { AddFestForm } from '../../types/fest';
import { addFestThunk } from '../../redux/slices/fest/thunk';

export default function NewFestForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [carData, setCarData] = useState<AddFestForm>({
    name: '',
    desc: '',
    image: '',
    place: '',
    date: new Date(),
  });

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void dispatch(addFestThunk(carData));
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить фестиваль</h3>

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
            value={carData.name}
            onChange={hangleChange}
            type="text"
          />
          <TextField
            name="desc"
            required
            id="outlined-required"
            label="Описание"
            placeholder="Описание"
            value={carData.desc}
            onChange={hangleChange}
            type="text"
          />
          <TextField
            name="image"
            required
            id="outlined-required"
            label="Добавьте картинку"
            placeholder="http://..."
            value={carData.image}
            onChange={hangleChange}
            type="text"
          />

          <TextField
            name="date"
            required
            id="outlined-required"
            label="Дата проведения"
            placeholder="Дата проведения"
            value={carData.date}
            onChange={hangleChange}
            type="text"
          />
          <TextField
            name="place"
            required
            id="outlined-required"
            label="Место"
            placeholder="Место"
            value={carData.place}
            onChange={hangleChange}
            type="text"
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
