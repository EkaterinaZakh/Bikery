import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editProdThunk } from '../../redux/slices/prod/thunk';

type EditProdListProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

export default function EditProdList({ onSubmit, onCancel }: EditProdListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedProd = useAppSelector((state) => state.products.selectedProd);

  const [prodData, setProdData] = useState({
    name: '',
    desc: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    if (selectedProd) setProdData(selectedProd);
  }, [selectedProd]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProdData({
      ...prodData,
      [name]: value,
    });
  };

  const editHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = {
      name: prodData.name,
      desc: prodData.desc,
      price: prodData.price,
      image: prodData.image,
    };
    if (!selectedProd) return;
    void dispatch(editProdThunk({
      ...selectedProd,
      name: formData.name,
      desc: formData.desc,
      price: formData.price,
      image: formData.image,
    }));
    onSubmit?.();
  };

  const cancelHandler = (): void => {
    onCancel?.();
  };

  return (
    <div style={{ margin: '10px', backgroundColor: 'white', width: '300px', height: '380px' }}>
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Добавить продукт:</h3>
      <form onSubmit={editHandler}>
        <Box>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
              name="name"
              value={prodData.name}
              onChange={handleChange}
              required
              id="name-input"
              label="Название"
              placeholder="Название"
              type="text"
            />
            <TextField
              name="desc"
              value={prodData.desc}
              onChange={handleChange}
              required
              id="desc-input"
              label="Описание"
              placeholder="Описание"
              type="text"
            />
            <TextField
              name="image"
              required
              id="image-input"
              label="Добавить картинку"
              placeholder="Загрузить изображение"
              type="file"
              onChange={handleChange}
            />
            <TextField
              name="price"
              value={prodData.price}
              onChange={handleChange}
              required
              id="price-input"
              label="Цена"
              placeholder="Цена"
              type="text"
            />
            <Button
              style={{ marginTop: '15px', width: '100px' }}
              type="submit"
              variant="contained"
              color="success"
            >
              Добавить
            </Button>
            <Button
              style={{ marginTop: '15px', width: '100px' }}
              variant="contained"
              onClick={cancelHandler}
            >
              Отменить
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}
