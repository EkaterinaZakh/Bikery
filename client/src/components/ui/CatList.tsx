import React from 'react';
import { Box, Button } from '@mui/material';
import type { CategoryType } from '../../types/cats';
import { useAppDispatch } from '../../redux/hooks';
import { setSelecteCategory } from '../../redux/slices/cats/slice';

type OneCategoryProps = {
  category: CategoryType;
};

export default function CatList({ category }: OneCategoryProps): JSX.Element {
  const dispatch = useAppDispatch();
  const setCategoryhandler = (): void => {
    dispatch(setSelecteCategory(category.id));
  };

  return (
    <Box sx={{ marginLeft: '20px', border: '1px solid black' }}>
      <Button onClick={setCategoryhandler}>{category.name}</Button>
    </Box>
  );
}
