import React, { useEffect, useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editFestThunk } from '../../redux/slices/fest/thunk';

type EditListProps = {
  onSubmit?: () => void;
};

const boxStyle = {
  backgroundColor: '#fff',
  border: '2px solid #000',
  padding: '16px',
  width: 300,
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
    // const formData = {
    //   ...selectedFest,
    //   ...festData,
    //   date: festData.date || new Date().toISOString().slice(0, 10),
    // };
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={editHandler} style={boxStyle} noValidate autoComplete="off">
            <div>
                <TextField
                    name="name"
                    required
                    id="outlined-required"
                    label="Название"
                    placeholder="Название"
                    value={festData.name}
                    onChange={handleChange}
                    type="text"
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
                />

                <TextField
                    name="image"
                    // value={prodData.image}
                    // onChange={handleChange}
                    // required
                    id="outlined-required"
                    type="file"
                    // defaultValue={selectedProd?.image}
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
                />
                <Button
                    style={{ marginTop: '15px', width: '15%' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Изменить
                </Button>
                <Button
                    style={{ marginTop: '15px', width: '15%' }}
                    onClick={handleCancel}
                    variant="contained"
                    color="error"
                >
                    Отменить
                </Button>
            </div>
        </form>
    </Box>
);

}
