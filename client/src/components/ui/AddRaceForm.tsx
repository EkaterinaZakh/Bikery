import { Box, TextField } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import type { AddRaceFormType } from '../../types/race';
import { addRaceThunk } from '../../redux/slices/race/thunk';

export default function AddRaceForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [raceData, setRaceData] = useState<AddRaceFormType>({
    name: '',
    image: '',
    desc: '',
    length: 0,
    date: new Date().toISOString().slice(0, 10),
  });

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRaceData({ ...raceData, [e.target.name]: e.target.value });
  };

  const resetForm = (): void => {
    setRaceData({
      name: '',
      image: '',
      desc: '',
      length: 0,
      date: new Date().toISOString().slice(0, 10),
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    void dispatch(addRaceThunk(formData));
    resetForm();
  };

  return (
    <div>
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
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px' }}
        >
          <h3>Добавить мотопробег</h3>
          <TextField
            name="name"
            required
            id="outlined-required"
            label="Название"
            placeholder="Название"
            onChange={hangleChange}
            value={raceData.name}
            type="text"
            sx={{ margin: '5px' }}
          />
          <TextField
            name="desc"
            required
            id="outlined-required"
            label="Описание"
            placeholder="Описание"
            onChange={hangleChange}
            value={raceData.desc}
            type="text"
            sx={{ margin: '5px' }}
          />
          <TextField
            name="length"
            required
            id="outlined-required"
            label="Длина"
            placeholder="Длина маршрута"
            onChange={hangleChange}
            value={raceData.length}
            type="number"
            sx={{ margin: '5px' }}
          />
          {/* <TextField
            name="image"
            required
            id="outlined-required"
            // label="Добавьте картинку"
            // placeholder="http://..."
            // value={carData.image}
            // onChange={hangleChange}
            type="file"
            sx={{ margin: '5px' }}
          /> */}

          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ marginBottom: '5px' }}
          >
            Добавить фото
            <Input type="file" name="image" sx={{ display: 'none' }} />
          </Button>

          <TextField
            name="date"
            required
            id="outlined-required"
            label="Дата"
            type="date"
            placeholder="Дата проведения"
            onChange={hangleChange}
            value={raceData.date}
            sx={{ margin: '5px' }}
          />

          <Button
            className="btn-new"
            style={{
              margin: '10px',
              width: '40%',
              backgroundColor: '#f66d52',
              color: 'black',
              marginTop: '10px',
              borderRadius: '15px',
            }}
            type="submit"
            variant="outlined"
          >
            Добавить
          </Button>
        </div>
      </Box>
    </div>
  );
}
