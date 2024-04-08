import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editProdThunk } from '../../redux/slices/prod/thunk';

type EditProdListProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

const boxStyle = {
  backgroundColor: '#fff',
  border: '2px solid #000',
  padding: '16px',
  width: '500px',
};

export default function EditProdList({ onSubmit, onCancel }: EditProdListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedProd = useAppSelector((state) => state.products.selectedProd);

  const [prodData, setProdData] = useState({
    name: '',
    desc: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    if (selectedProd) setProdData(selectedProd);
  }, [selectedProd]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProdData((prevData) => ({...prevData, [name]: value }));
  };

  const editHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = {
      ...prodData,
      image: prodData.image,
    };

    if (!selectedProd) return;
    void dispatch(
      editProdThunk({
        ...selectedProd,
        name: formData.name,
        desc: formData.desc,
        price: formData.price,
        image: e.currentTarget.image.files[0],
      }),
    );
    onSubmit?.();
  };

  const cancelHandler = (): void => {
    onCancel?.();
  };

  return (
    <Box sx={boxStyle}>
      <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>Редактировать продукт:</h3>
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
              sx={{ marginBottom: '10px', width: '450px' }}
            />

            <TextField
              name="desc"
              required
              id="outlined-multiline-static"
              label="Описание"
              placeholder="Описание"
              multiline
              rows={6}
              sx={{ marginBottom: '10px', width: '450px' }}
              value={prodData.desc}
              onChange={handleChange}
            />

            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ marginBottom: '10px', width: '450px' }}
            >
              Добавить фото
              <Input type="file" name="image" sx={{ display: 'none' }} />
            </Button>

            <TextField
              name="price"
              value={prodData.price}
              onChange={handleChange}
              required
              id="price-input"
              label="Цена"
              placeholder="Цена"
              type="text"
              sx={{ marginBottom: '10px', width: '450px' }}
            />

            <Box>
              <Button
                style={{ margin: '15px', width: '100px' }}
                type="submit"
                variant="contained"
              >
                Добавить
              </Button>

              <Button
                style={{ margin: '15px', width: '100px' }}
                variant="contained"
                onClick={cancelHandler}
                color="error"
              >
                Отменить
              </Button>
            </Box>
          </div>
        </Box>
      </form>
    </Box>
  );
}