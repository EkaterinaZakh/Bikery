import React from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { addCommitsThunk, getAllCommitsThunk } from '../../redux/slices/comments/thunk';
import type { OmitCommitType, OmitFestCommitType } from '../../types/commit';
import type { RaceType } from '../../types/race';
import { addFestCommentThunk } from '../../redux/slices/comments/festthunk';
import type { FestType } from '../../types/fest';

type OneRaceProps = {
  fest: FestType;
};

export default function AddFestComment({ fest }: OneRaceProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string; // Получаем значение текста комментария
    const festId = Number(formData.get('festId')); // Преобразуем строку в число
    if (Number.isNaN(festId)) {
      // Проверяем, было ли возможно преобразовать в число
      console.error('Invalid festId');
      return;
    }

    const data: OmitFestCommitType = {
      text,
      festId: fest.id, // <--- здесь использовать данные из пропсов
    };

    void dispatch(addFestCommentThunk(data));
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
