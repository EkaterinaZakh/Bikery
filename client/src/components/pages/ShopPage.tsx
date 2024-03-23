import React from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import CatList from '../ui/CatList';
import OneProduct from '../ui/OneProduct';
import NewProdForm from '../ui/NewProdForm';

export default function ShopPage(): JSX.Element {
  const categories = useAppSelector((state) => state.categories.categories);
  const prods = useAppSelector((state) => state.products.prods);
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      
        {user.isAdmin === true && <NewProdForm />}
      <h3>ShopPage</h3>
      <Box sx={{display: 'flex', justifyContent: 'center', border: "2px solid green"}}>
        {categories.map((category) => (
          <CatList key={category.id} category={category} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
        {prods.map((el) => (
          <OneProduct prod={el} key={el.id} />
        ))}
      </Box>
    </>
  );
}

// {user.isAdmin === true ? && (
//   <NewProdForm />
// )}
