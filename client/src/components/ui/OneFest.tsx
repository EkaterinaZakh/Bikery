import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { IconButtonProps } from '@mui/material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import type { FestType } from '../../types/fest';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteFestThunk } from '../../redux/slices/fest/thunk';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

type OneFestProps = {
  fest: FestType;
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OneFest({ fest }: OneFestProps): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);
  const user = useAppSelector((store) => store.auth.user);
  console.log(user);

  const dispatch = useAppDispatch();

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteFestThunk(fest.id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={fest.name} subheader="Дата проведения" />
      <CardMedia component="img" height="194" image={fest.image} alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {fest.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <Button  onClick={deleteHandler} variant='outlined' color='error'>Удалить</Button> */}
        {user.isAdmin === true && (
          <Button onClick={deleteHandler} variant="outlined" color="error">
            Удалить
          </Button>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Подробное описание</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
