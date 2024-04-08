import React from 'react';
import { Box, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { addProdThunk } from '../../redux/slices/prod/thunk';
import { useAppDispatch } from '../../redux/hooks';

const boxStyle = {
  backgroundColor: 'rgb(240, 235, 229)',
  padding: '16px',
  width: '500px',
  borderRadius: '10px',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  opacity: '0.8',
  marginTop: '20px',
};

export default function NewProdForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.currentTarget.name.value);
    formData.append('desc', e.currentTarget.desc.value);
    formData.append('price', e.currentTarget.price.value);
    formData.append('categoryId', e.currentTarget.categoryId.value);
    formData.append('image', e.currentTarget.image.files[0]);
    void dispatch(addProdThunk(formData));
    e.currentTarget.reset();
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={submitHandler}>
        <Box sx={boxStyle}>
          <h3 style={{ textAlign: 'center' }}>Добавить товар:</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              name="name"
              required
              id="outlined-required"
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
            />

            <TextField
              name="price"
              required
              id="outlined-required"
              label="Цена"
              placeholder="Цена"
              type="text"
              sx={{ marginBottom: '10px', width: '450px' }}
            />

            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Категории</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="categoryId"
                  label="Категория"
                  sx={{ marginBottom: '10px', width: '450px' }}
                >
                  <MenuItem value={1}>Куртки</MenuItem>
                  <MenuItem value={2}>Шлемы</MenuItem>
                  <MenuItem value={3}>Обувь</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ marginBottom: '10px', width: '250px', backgroundColor: '#be8952' }}
            >
              Добавить фото
              <Input type="file" name="image" sx={{ display: 'none' }} />
            </Button>

            <Button
              style={{ margin: '15px', width: '150px', backgroundColor: '#be8952' }}
              type="submit"
              variant="contained"
              className="btn-new"
            >
              Добавить
            </Button>
          </div>
        </Box>
      </form>
    </Box>
  );
}
