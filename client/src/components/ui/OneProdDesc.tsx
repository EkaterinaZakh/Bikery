import React, { useState } from 'react';
import { Button, Box, CardMedia } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';

type OneProdDescProps = {
  onCancel?: () => void;
};

export default function OneProdDesc({ onCancel }: OneProdDescProps): JSX.Element {
  const selectedProd = useAppSelector((state) => state.products.selectedProd);

  const [prod, setProd] = useState(selectedProd);

  const cancelHandler = (): void => {
    onCancel?.();
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '750px',
        height: '500px',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '10px',
      }}
    >
      <Box style={{ display: 'flex', width: '700px' }}>
        <CardMedia
          component="img"
          // height="200"
          image={`${import.meta.env.VITE_APP_TITLE}/img/product/${prod?.image}`}
          alt="картинка товара"
          sx={{ width: '300px', height: '300px', border: '1px solid red' }}
        />
        
        <Box sx={{ marginLeft: '15px' }}>
          <Box sx={{ fontSize: '35px', fontWeight: 'bold' }}>{prod?.name}</Box>
          <Box sx={{fontSize: '25px', marginTop: '15px'}}>{prod?.price} ₽</Box>
          <Box sx={{ marginTop: '15px', fontSize:'20px' }}>{prod?.desc}</Box>
          <Button
        style={{ marginTop: '15px', width: '130px' }}
        variant="contained"
        onClick={cancelHandler}
      >
        В корзину
      </Button>
      
      <Button
        style={{ marginTop: '15px', marginLeft: '15px', width: '130px' }}
        variant="contained"
        onClick={cancelHandler}
      >
        Закрыть
      </Button>
        </Box>
      </Box>

      
    </Box>
  );
}

// return (
//   <>
//       <div>{prodDesc}</div>
//       <Button
//       style={{ marginTop: '15px', width: '100px' }}
//       variant="contained"
//       onClick={cancelHandler}
//       >
//       закрыть описание
//       </Button>
// </>
// )
