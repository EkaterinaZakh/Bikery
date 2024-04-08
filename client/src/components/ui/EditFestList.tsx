import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editFestThunk } from '../../redux/slices/fest/thunk';

type EditListProps = {
  onSubmit?: () => void;
};

const boxStyle = {
  backgroundColor: '#fff',
  border: '2px solid #000',
  padding: '16px',
  width: '500px',
};

export default function EditFestList({ onSubmit }: EditListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedFest = useAppSelector((state) => state.festivals.selectedFest);

  const [festData, setFestData] = useState({
    name: '',
    desc: '',
    image: '',
    place: '',
    date: '',
  });

  useEffect(() => {
    if (selectedFest) setFestData(selectedFest); // скопируй и преобразуй дату к строке
  }, [selectedFest]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFestData((prevData) => ({ ...prevData, [name]: value }));
  };

  const editHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = {
      ...festData,
      image: festData.image,
    };

    if (!selectedFest) return;
    void dispatch(
      editFestThunk({
        ...selectedFest,
        name: formData.name,
        desc: formData.desc,
        image: e.currentTarget.image.files[0],
        place: formData.place,
        date: formData.date,
      }),
    );
    onSubmit?.();
  };

  const handleCancel = (): void => {
    onSubmit?.();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
      }}
    >
      <form onSubmit={editHandler} style={boxStyle} noValidate autoComplete="off">
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>Редактировать фестиваль:</h3>
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
            id="outlined-multiline-static"
            label="Описание"
            placeholder="Описание"
            multiline
            rows={6}
            sx={{ marginBottom: '10px' }}
            value={festData.desc}
            onChange={handleChange}
          />

          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ marginBottom: '10px' }}
          >
            Добавить Фото
            <Input type="file" name="image" sx={{ display: 'none' }} />
          </Button>

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
            label="Дата"
            placeholder="yyyy-mm-dd"
            value={festData.date}
            onChange={handleChange}
            type="date"
            sx={{ marginBottom: '10px' }}
          />
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>

          <Button style={{ marginTop: '15px' }} type="submit" variant="contained" color="primary">
            Изменить
          </Button>
        

        
          <Button
            style={{ marginTop: '15px' }}
            onClick={handleCancel}
            variant="contained"
            color="error"
            >
            Отменить
          </Button>
            </Box>
        

      </form>
    </Box>
  );
}