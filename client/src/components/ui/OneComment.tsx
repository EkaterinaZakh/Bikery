import React from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';
import type { CommitType } from '../../types/commit';
import { useAppDispatch } from '../../redux/hooks';

export default function OneComment(): JSX.Element {
   const dispatch = useAppDispatch()
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Отправить комментарий на сервер или обработать его здесь
    const data = Object.fromEntries(new FormData(e.currentTarget)) as CommitType;
    void dispatch()
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        {/* Инпут для комментария */}
        <form onSubmit={handleCommentSubmit}>
          <TextField
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
