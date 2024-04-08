import React from 'react';
import { Box, Typography } from '@mui/material';
// import '../../../src/fonts/DischargePro.ttf'

export default function MainPage(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundImage: `url('../src/img/main_page.jpeg')`,
        filter: 'brightness(85%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Центрирует содержимое по вертикали
        alignItems: 'center', // Центрирует содержимое по горизонтали
        textAlign: 'center', // Выравнивает текст по центру
        color: 'rgba(13, 13, 12, 1)',
        paddingBottom: '100px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          width: '80%',
          height: '70%',
          color: 'rgba(33, 2, 2, 1)',
        }}
      >
        <Box
          sx={{
            width: '650px',
            height: '100px',
            backgroundImage: `url('../src/img/bikerylogo.png')`,
            filter: 'brightness(85%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: '20px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '10px', // Округление углов
            padding: '10px', // Поля внутри прямоугольника
            marginLeft: '-15px',
            marginTop: '20px',
          }}
        >
          <Typography className="text" variant="h5">
            <strong>Знать дорогу и проехать по ней - не одно и то же!</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
