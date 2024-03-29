import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteFestThunk } from '../../redux/slices/fest/thunk';
import { setSelectedFestById } from '../../redux/slices/fest/slice';
import type { FestType } from '../../types/fest';
import AddFestComment from './AddFestComment';
import OneFestComment from './OneFestComment';

type OneFestProps = {
  fest: FestType;
};

export default function OneFest({ fest }: OneFestProps): JSX.Element {
  const commentsForfest = fest.CommentFests || [];

  const [expanded, setExpanded] = React.useState(false);
  const user = useAppSelector((store) => store.auth.user);
  const formattedDate = new Date(fest.date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const dispatch = useAppDispatch();

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteFestThunk(fest.id));
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <Card
        sx={{
          display: 'flex',
          margin: '10px',
          borderRadius: '15px',
          backgroundСolor: 'rgb(228, 219, 209)',
          opacity: '0.9',
        }}
      >
        <Box>
          <CardMedia
            component="img"
            // height="194"
            image={`${import.meta.env.VITE_APP_TITLE}/img/fest/${fest.image}`}
            alt=""
            sx={{ width: '400px', height: '400px', backgroundSize: 'cover',  }}
          />
        </Box>
        <Box
          sx={{
            width: '600px',
            borderRadius: '0px 10px 10px 0px',
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
              transitionDelay: '0.2s',
              transform: 'scale(40)',
              background: '#f66d52', // Цвет, который будет заполнять всю карточку
            },
          }}
        >
          <CardHeader title={fest.name}/>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {fest.desc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {user.isAdmin === true && (
              <>
                <Button onClick={deleteHandler} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                  Удалить
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<BorderColorRoundedIcon />}
                  onClick={() => dispatch(setSelectedFestById(fest.id))}
                >
                  Изменить
                </Button>
              </>
            )}
            <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              {expanded ? 'Скрыть' : 'Комментарии'}
            </IconButton>
          </CardActions>
        </Box>

        {expanded && (
          <CardContent>
            <Typography paragraph>
              <div>Комментарии:</div>
              {commentsForfest.map((comment) => (
                <OneFestComment key={comment.id} comment={comment} />
              ))}
              {user.status === 'logged' && <AddFestComment fest={fest} />}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}
