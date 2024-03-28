import React from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { addCommitsThunk, getAllCommitsThunk } from '../../redux/slices/comments/thunk';
import type { OmitCommitType } from '../../types/commit';
import type { RaceType } from '../../types/race';

type OneRaceProps = {
  race: RaceType;
};

export default function AddRaceComment({ race }: OneRaceProps): JSX.Element {
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
      raceId: race.id, // <--- здесь использовать данные из пропсов
    };

    void dispatch(addCommitsThunk(data));
  };

  return (
    <Card className="comments_form" sx={{ marginTop: '10px' }}>
      <CardContent>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            name="text"
            fullWidth
            id="comment-input"
            label="Добавить комментарий"
            variant="outlined"
            margin="normal"
          />
          <Button className='send_btn' type="submit">Отправить</Button>
        </form>
      </CardContent>
    </Card>
  );
}
