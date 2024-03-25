import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editProdThunk } from '../../redux/slices/prod/thunk';
// import type { ProdType } from '../../types/prod';

type EditProdListProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

export default function EditProdList({ onSubmit, onCancel }: EditProdListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedProd = useAppSelector((state) => state.products.selectedProd);
  // console.log('---', selectedProd);

  const [prodData, setProdData] = useState({
    name: '',
    desc: '',
    price: '',
  });

  useEffect(() => {
    if (selectedProd) setProdData(selectedProd);
  }, [selectedProd]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProdData({
      ...prodData,
      [e.target.name]: e.target.value,
      [e.target.desc]: e.target.value,
      [e.target.price]: e.target.value,
    });
  };

  const editHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as {
      name: string;
      desc: string;
      price: string;
    };
    if (!selectedProd) return;
    void dispatch(
      editProdThunk({
        ...selectedProd,
        name: formData.name,
        desc: formData.desc,
        price: formData.price,
      }),
    );
    onSubmit?.();
  };

  const cancelHandler = (): void => {
    onCancel?.();
  };

  return (
    <div style={{ margin: '10px', backgroundColor: 'white', width: '300px', height: '350px' }}>
      <h3 style={{ textAlign: 'center' }}>Добавить продукт:</h3>
      <form onSubmit={editHandler}>
        <Box>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              name="name"
              value={prodData.name}
              onChange={handleChange}
              required
              id="outlined-required"
              label="Название"
              placeholder="Название"
              type="text"
            />
            <TextField
              name="desc"
              value={prodData.desc}
              onChange={handleChange}
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
              value={prodData.price}
              onChange={handleChange}
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
              // onClick={editHandler}
            >
              Добавить
            </Button>

            <Button
              style={{ marginTop: '15px', width: '15%' }}
              type="submit"
              onClick={cancelHandler}
              variant="contained"
              color="success"
            >
              Отменить
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}
