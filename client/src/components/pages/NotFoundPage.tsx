import React from 'react';
import { Box, Typography } from '@mui/material';

const gifUrl = 'https://tenor.com/ru/view/букин-gif-25616045.gif'; // Replace this with the actual URL of your GIF

export default function NotFoundPage(): JSX.Element {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${gifUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Typography variant="h4" color="error">
        Страница не найдена. Пожалуйста, вернитесь на главную страницу.
      </Typography>
    </Box>
  );
}
