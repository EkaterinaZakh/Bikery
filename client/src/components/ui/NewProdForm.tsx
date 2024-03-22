import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { addProdThunk } from '../../redux/slices/prod/thunk';
import type { AddProdForm } from '../../types/prod';

export default function NewProdForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddProdForm;
    void dispatch(
      addProdThunk({ name: formData.name, desc: formData.price, price: formData.price }),
    );
  };

  return (
    <div style={{ margin: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить продукт:</h3>
      <form onSubmit={submitHandler}>
        <Box>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              name="name"
              required
              id="outlined-required"
              label="Название"
              placeholder="Название"
              type="text"
            />
            <TextField
              name="desc"
              required
              id="outlined-required"
              label="Описание"
              placeholder="Описание"
              type="text"
            />
            {/* <TextField
        name="image"
        required
        id="outlined-required"
        label="Добавьте картинку"
        placeholder="http://..."
        value={carData.image}
        onChange={hangleChange}
        type="text"
      /> */}

            <TextField
              name="price"
              required
              id="outlined-required"
              label="Цена"
              placeholder="Цена"
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
      </form>
    </div>
  );
}
