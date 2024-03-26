import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';


type OneProdDescProps ={
    onCancel?: () => void
}

export default function OneProdDesc({ onCancel }:OneProdDescProps ): JSX.Element {
    const selectedProd = useAppSelector((state) => state.products.selectedProd);

    const [prodDesc, setProdDesc] = useState(selectedProd?.desc);
    
    const cancelHandler = (): void => {
        onCancel?.();
    };

  return (
    <>
        <div>{prodDesc}</div>
        <Button
        style={{ marginTop: '15px', width: '100px' }}
        variant="contained"
        onClick={cancelHandler}
        >
        закрыть описание
        </Button>
  </>
  )
}
