import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
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
    const selectedFest = useAppSelector((state) => state.festivals.selectedFest);
    const dispatch = useAppDispatch();
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

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!selectedFest) return;
        const formData = {
            ...selectedFest,
            ...festData,
            date: festData.date || new Date().toISOString().slice(0, 10),
        };
        void dispatch(editFestThunk(formData)); 
        onSubmit?.();
    };

    const handleCancel = (): void => {
        onSubmit?.();
    };

    return (
        <form
            style={boxStyle}
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
    );
}