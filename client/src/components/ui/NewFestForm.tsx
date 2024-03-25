import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { AddFestForm } from '../../types/fest';
import { addFestThunk } from '../../redux/slices/fest/thunk';

export default function NewFestForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);
  const [festData, setFestData] = useState<AddFestForm>({
    name: '',
    desc: '',
    image: '',
    place: '',
    date: new Date().toISOString().slice(0, 10)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFestData({ ...festData, [e.target.name]: e.target.value });
  };

  const resetForm = ():void => {
    setFestData({
      name: '',
      desc: '',
      image: '',
      place: '',
      date: new Date().toISOString().slice(0, 10),
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = {
      ...festData,
      date: festData.date
    };
    void dispatch(addFestThunk(formData));
    resetForm();
  };

  return (
    <div style={{ margin: '10px', display: "flex", justifyContent: 'center', border: "1px solid red"}}>
      {user.isAdmin === true && (
        <Box
          onSubmit={submitHandler}
          component="form"
          sx={{display: "flex"}}
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
              value={festData.name}
              onChange={handleChange}
              type="text"
            />
            <TextField
              name="desc"
              required
              id="outlined-required"
              label="Описание"
              placeholder="Описание"
              value={festData.desc}
              onChange={handleChange}
              type="text"
            />
            <TextField
              name="image"
              required
              id="outlined-required"
              label="Добавьте картинку"
              placeholder="http://..."
              value={festData.image}
              onChange={handleChange}
              type="text"
            />
            <TextField
              name="place"
              required
              id="outlined-required"
              label="Место"
              placeholder="Место"
              value={festData.place}
              onChange={handleChange}
              type="text"
            />
            <TextField
              name="date"
              required
              id="outlined-required"
              label="Дата проведения"
              placeholder="yyyy-mm-dd"
              value={festData.date}
              onChange={handleChange}
              type="date"
            />
            <Button
              style={{ marginTop: '15px' }}
              type="submit"
              variant="contained"
              color="success"
            >
              Добавить
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
}
