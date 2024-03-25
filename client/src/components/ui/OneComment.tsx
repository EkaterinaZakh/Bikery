import React from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { addCommitsThunk, getAllCommitsThunk } from '../../redux/slices/comments/thunk';
import type { OmitCommitType } from '../../types/commit';

export default function OneComment(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string; // Получаем значение текста комментария
    const raceId = Number(formData.get('raceId')); // Преобразуем строку в число
    if (Number.isNaN(raceId)) {
      // Проверяем, было ли возможно преобразовать в число
      console.error('Invalid raceId');
      return;
    }

    const data: OmitCommitType = {
      text,
      raceId,
    };

    void dispatch(addCommitsThunk(data));
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: '20px' }}>
      <CardContent>
        {/* Инпут для комментария */}
        <form onSubmit={handleCommentSubmit}>
          <TextField
            name="text"
            fullWidth
            id="comment-input"
            label="Добавить комментарий"
            variant="outlined"
            margin="normal"
            // Дополнительные свойства, если нужно
          />
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
