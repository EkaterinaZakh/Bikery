import { Box, Typography } from '@mui/material';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundImage: `url('MainPagePicture.jpeg')`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Центрирует содержимое по вертикали
        alignItems: 'center', // Центрирует содержимое по горизонтали
        textAlign: 'center', // Выравнивает текст по центру
        color: 'rgba(13, 13, 12, 1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          color: 'rgba(33, 2, 2, 1)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            width: '50%',
            fontSize: '25px',
            marginRight: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '10px', // Округление углов
            padding: '10px', // Поля внутри прямоугольника
          }}
        >
          <strong>
            Bikery - портал, где свобода не просто слово, а образ жизни. Здесь каждый может
            почувствовать настоящую скорость, ощутить дух движения и стать частью нашего сильного
            сообщества байкеров. Мы поощряем бунтарство против обыденности и вместе создаем
            эпические истории на дорогах. Присоединяйтесь к нам!
          </strong>
        </Typography>
        <Box
          sx={{
            width: '50%',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '10px', // Округление углов
            padding: '10px', // Поля внутри прямоугольника
            marginTop: '-75px', // Смещение вверх
            // animation: 'fadeInUp 3s ease'
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
