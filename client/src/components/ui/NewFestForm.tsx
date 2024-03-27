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
    // <div
    //   style={{ margin: '10px', display: 'flex', justifyContent: 'center', border: '1px solid red', margin: '5px'  }}
    // >
    //   {user.isAdmin === true && (
    //     <Box
    //       onSubmit={submitHandler}
    //       component="form"
    //       sx={{ display: 'flex' }}
    //       noValidate
    //       autoComplete="off"
    //     >

    //       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px'  }}>
    //       <h3>Добавить фестиваль:</h3>
    //         <TextField
    //           name="name"
    //           required
    //           id="outlined-required"
    //           label="Название"
    //           placeholder="Название"
    //           value={festData.name}
    //           onChange={handleChange}
    //           type="text"
    //           sx={{ margin: '5px' }}
    //         />
    //         <TextField
    //           name="desc"
    //           required
    //           id="outlined-required"
    //           label="Описание"
    //           placeholder="Описание"
    //           value={festData.desc}
    //           onChange={handleChange}
    //           type="text"
    //           sx={{ margin: '5px' }}
    //         />

    //         {/* <TextField
    //           name="image"
    //           required
    //           id="outlined-required"
    //           label="Добавьте картинку"
    //           placeholder="http://..."
    //           value={festData.image}
    //           onChange={handleChange}
    //           type="text"
    //         /> */}

    //         <TextField
    //           name="image"
    //           required
    //           id="outlined-required"
    //           // label="Добавьте картинку"
    //           // placeholder="http://..."
    //           // value={carData.image}
    //           // onChange={hangleChange}
    //           type="file"
    //           sx={{ margin: '5px' }}
    //         />

    //         <TextField
    //           name="place"
    //           required
    //           id="outlined-required"
    //           label="Место"
    //           placeholder="Место"
    //           value={festData.place}
    //           onChange={handleChange}
    //           type="text"
    //           sx={{ margin: '5px' }}
    //         />
    //         <TextField
    //           name="date"
    //           required
    //           id="outlined-required"
    //           label="Дата проведения"
    //           placeholder="yyyy-mm-dd"
    //           value={festData.date}
    //           onChange={handleChange}
    //           type="date"
    //           sx={{ margin: '5px' }}
    //         />
    //         <Button style={{ marginTop: '15px' }} type="submit" variant="contained" color="success">
    //           Добавить
    //         </Button>
    //       </div>
    //     </Box>
    //   )}
    // </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
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
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
          }}
          noValidate
          autoComplete="off"
        >
          <h3 style={{ marginBottom: '20px' }}>Добавить фестиваль:</h3>
          <TextField
            name="name"
            required
            id="outlined-required"
            label="Название"
            placeholder="Название"
            value={festData.name}
            onChange={handleChange}
            type="text"
            sx={{ marginBottom: '10px' }}
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
            sx={{ marginBottom: '10px' }}
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
            sx={{ marginBottom: '10px' }}
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
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            name="image"
            required
            id="outlined-required"
            type="file"
            sx={{ marginBottom: '10px', width: '44%', margin: '5px' }}
          />
          <Button
            type="submit"
            variant="outlined"
            className="btn-new"
            sx={{ backgroundColor: '#f66d52', color: 'black', marginTop:'10px' }}
          >
            Добавить
          </Button>
        </Box>
      )}
    </div>
  );
}
