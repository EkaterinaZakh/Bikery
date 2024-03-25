import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CatList from '../ui/CatList';
import OneProduct from '../ui/OneProduct';
import NewProdForm from '../ui/NewProdForm';
import BaseModal from '../ui/BaseModal';
import EditProdList from '../ui/EditProdList';
import { clearSelectedProd } from '../../redux/slices/prod/slice';

export default function ShopPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
  const prods = useAppSelector((state) => state.products.prods);
  const user = useAppSelector((state) => state.auth.user);

  const [openModal, setOpenModal] = useState(false);
  
  const selectedProd = useAppSelector((state) => state.products.selectedProd);

  const handleCloseModal = (): void => {
    void dispatch(clearSelectedProd());
  };

  return (
    <>
      {user.isAdmin === true && <NewProdForm />}
      <h3>ShopPage</h3>
      <Box sx={{ display: 'flex', justifyContent: 'center', border: '2px solid green' }}>
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
        <BaseModal open={!!selectedProd} onClose={handleCloseModal}>
          <EditProdList onSubmit={handleCloseModal} onCancel={handleCloseModal} />
        </BaseModal>
        {prods.map((el) => (
          <OneProduct prod={el} key={el.id} />
        ))}
      </Box>
    </>
  );
}
