import React, { useEffect, useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editRaceThunk } from '../../redux/slices/race/thunk';

type EditRacesProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

const boxStyle = {
  backgroundColor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '16px',
  width: 300,
};

export default function EditRacesList({ onSubmit,onCancel }: EditRacesProps): JSX.Element {
  const selectedRaces = useAppSelector((state) => state.motoRaces.selectedRaces);
  const dispatch = useAppDispatch();
  const [raceData, setRaceData] = useState({
    name: '',
    desc: '',
    image: '',
    length: 0,
    rateCounter: 0,
    //  date: '',
  });

  useEffect(() => {
    if (selectedRaces) setRaceData(selectedRaces);
  }, [selectedRaces]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRaceData({
      ...raceData,
      [event.target.name]: event.target.value,
      [event.target.desc]: event.target.value,
      [event.target.image]: event.target.value,
      [event.target.length]: event.target.value,
      [event.target.rateCounter]: event.target.value,
      // [event.target.date]: event.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const desc = formData.get('desc') as string;
    const image = formData.get('image') as string;
    const length = parseInt(formData.get('length') as string, 10);
    const rateCounter = parseInt(formData.get('rateCounter') as string, 10);

    if (!selectedRaces) return;

    void dispatch(
      editRaceThunk({
        ...selectedRaces,
        name,
        desc,
        image,
        length,
        rateCounter,
        // date: formData.date,
      }),
    );

    onSubmit?.();
  };

  const handleCancel = (): void => {
   onCancel?.();
  };

  return (
    <Box component="form" sx={boxStyle} noValidate autoComplete="off" onSubmit={submitHandler}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          name="name"
          required
          id="outlined-required"
          label="Название"
          placeholder="Название"
          value={raceData.name}
          onChange={handleChange}
          type="text"
        />
        <TextField
          name="desc"
          required
          id="outlined-required"
          label="Описание"
          placeholder="Описание"
          value={raceData.desc}
          onChange={handleChange}
          type="text"
        />
        <TextField
          name="image"
          required
          id="outlined-required"
          label="Добавьте картинку"
          placeholder="http://..."
          value={raceData.image}
          onChange={handleChange}
          type="text"
        />
        <TextField
          name="length"
          required
          id="outlined-required"
          label="Длинна"
          placeholder="Длинна"
          value={raceData.length}
          onChange={handleChange}
          type="text"
        />

        <TextField
          name="rateCounter"
          required
          id="outlined-required"
          label="Счетчик"
          placeholder="Счетчик"
          value={raceData.rateCounter}
          onChange={handleChange}
          type="text"
        />
        <Button
          style={{ marginTop: '15px', width: '55%' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Изменить
        </Button>
        <Button
          style={{ marginTop: '15px', width: '55%' }}
          onClick={handleCancel}
          variant="contained"
          color="error"
        >
          Отменить
        </Button>
      </div>
    </Box>
  );
}
