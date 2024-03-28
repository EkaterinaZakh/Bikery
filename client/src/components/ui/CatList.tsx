import React from 'react';
import { Box, Button } from '@mui/material';
import type { CategoryType } from '../../types/cats';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedCategory } from '../../redux/slices/cats/slice';

type OneCategoryProps = {
  category: CategoryType;
};

export default function CatList({ category }: OneCategoryProps): JSX.Element {
  const dispatch = useAppDispatch();
  const setCategoryhandler = (): void => {
    dispatch(setSelectedCategory(category.id));
  };

  return (
    <Box sx={{ marginLeft: '20px' }}>
      <Button
        className="btn-new"
        style={{
          margin: '10px',
          backgroundColor: '#f66d52',
          color: 'black',
          borderRadius: '15px',
        }}
        onClick={setCategoryhandler}
        variant="outlined"
      >
        {category.name}
      </Button>
    </Box>
  );
}
