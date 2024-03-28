import React from 'react';
import { Card, CardContent, Button, TextField, Box } from '@mui/material';
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
          <Box>
            <Button
              type="submit"
              sx={{
                marginTop: '20px',
                background: '#f66d52',
                color: 'black',
                filter: 'drop-shadow(0 5px 10px 0 #ffffff)',
                backgroundColor: '#ffffff',
                padding: '20px',
                position: 'relative',
                zIndex: '0',
                overflow: 'hidden',
                transition: '0.6s ease-in',
                '&:hover': {
                  color: '#ffffff',
                  backgroundColor: '#f66d52', // Изменение цвета при наведении
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  zIndex: '-1',
                  top: '-15px',
                  right: '-15px',
                  background: 'transparent', // Прозрачный цвет, чтобы не было видно перед карточкой
                  height: '220px',
                  width: '25px',
                  borderRadius: '32px',
                  transform: 'scale(1)',
                  transformOrigin: '50% 50%',
                  transition: 'transform 0.25s ease-out',
                },
                '&:hover::before': {
                  transitionDelay: '0.3s',
                  transform: 'scale(40)',
                  background: '#f66d52', // Цвет, который будет заполнять всю карточку
                },
              }}
            >
              {' '}
              Отправить
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
