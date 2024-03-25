import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editFestThunk } from '../../redux/slices/fest/thunk';

type EditListProps = {
    onSubmit?: () => void;
};

const boxStyle = {
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '16px',
    width: 300,
};

export default function EditFestList({ onSubmit }: EditListProps): JSX.Element {
    const selectedFest = useAppSelector((state) => state.festivals.selectedFest);
    const dispatch = useAppDispatch();
    const [festData, setFestData] = useState({
        name: '',
        desc: '',
        image: '',
        place: '',
        // date: '',
    });

    useEffect(() => {
        if (selectedFest) setFestData(selectedFest);
    }, [selectedFest]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFestData({ ...festData, 
            [event.target.name]: event.target.value,
            [event.target.desc]: event.target.value,
            [event.target.image]: event.target.value,
            [event.target.place]: event.target.value,
            // [event.target.date]: event.target.value, 
        });
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as {
            name: string;
            desc: string;
            image: string;
            place: string;
            date: string;
        };
        if (!selectedFest) return
        void dispatch(editFestThunk({
            ...selectedFest,
            name: formData.name,
            desc: formData.desc,
            image: formData.image,
            place: formData.place,
            // date: formData.date,
        }));
        onSubmit?.();
    };

    const handleCancel = (): void => {
        onSubmit?.();
    };

    return (
        <Box
            as="form"
            sx={boxStyle}
            noValidate
            autoComplete="off"
            onSubmit={submitHandler}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    required
                    id="outlined-required"
                    label="Добавьте картинку"
                    placeholder="http://..."
                    value={festData.image}
                    onChange={handleChange}
                    type="text"
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
        </Box>
    );
}
