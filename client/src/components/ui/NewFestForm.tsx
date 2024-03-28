import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { AddFestForm } from '../../types/fest';
import { addFestThunk } from '../../redux/slices/fest/thunk';

const boxStyle = {
  backgroundColor: '#fff',
  padding: '16px',
  width: '500px',
};

export default function NewFestForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector((store) => store.auth.user);

  const [festData, setFestData] = useState<AddFestForm>({
    name: '',
    desc: '',
    image: '',
    place: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFestData({ ...festData, [e.target.name]: e.target.value });
  };

  const resetForm = (): void => {
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
    const formData = new FormData(event.currentTarget);
    // {
    //   ...festData,
    //   date: festData.date,
    // };
    // добавь в formData date
    void dispatch(addFestThunk(formData)); // object application/json ---> multipart/form-data
    resetForm();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Pangolin", 
        fontWeight: 400, 
        fontStyle: "normal",
      }}
    >
      {user.isAdmin === true && (
        <Box
          onSubmit={submitHandler}
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: 'rgb(240, 235, 229)',
            borderRadius: '10px',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
            opacity: '0.9',
            marginTop: '15px',
          }}
          noValidate
          autoComplete="off"
        >
          <h3 style={{ marginBottom: '20px', fontFamily: "Pangolin", fontWeight: 400, fontStyle: "normal" }}>Добавить фестиваль:</h3>
          <TextField
            name="name"
            required
            id="outlined-required"
            label="Название"
            placeholder="Название"
            value={festData.name}
            onChange={handleChange}
            type="text"
            sx={{ marginBottom: '10px', width: '450px' }}
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
            sx={{ marginBottom: '10px', width: '450px' }}
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
            sx={{ marginBottom: '10px', width: '450px' }}
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
            sx={{ marginBottom: '10px', width: '450px' }}
          />
          {/* <TextField
            name="image"
            required
            id="outlined-required"
            type="file"
            sx={{ marginBottom: '10px', width: '44%', margin: '5px' }}
          /> */}

          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ marginBottom: '10px', width: '450px' }}
          >
            Добавить фото
            <Input type="file" name="image" sx={{ display: 'none' }} />
          </Button>

          <Button
            type="submit"
            variant="outlined"
            className="btn-new"
            sx={{ backgroundColor: '#f66d52', color: 'black', marginTop: '10px' }}
          >
            Добавить
          </Button>
        </Box>
      )}
    </div>
  );
}
