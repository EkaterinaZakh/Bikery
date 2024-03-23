import React from 'react';
import { Box, Button } from '@mui/material';
import type { CategoryType } from '../../types/cats';

type OneCategoryProps = {
  category: CategoryType;
};

export default function CatList({ category }: OneCategoryProps): JSX.Element {
  return (
    <Box sx={{ marginLeft: '20px', border: "1px solid black" }}>
      <Button>{category.name}</Button>
    </Box>
  );
}
