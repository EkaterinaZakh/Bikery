import React from 'react';
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
  const selectedCat = useAppSelector((store) => store.categories?.selectedCategory);
  const categories = useAppSelector((state) => state.categories.categories);
  const selectedProd = useAppSelector((state) => state.products.selectedProd);
  const allProds = useAppSelector((state) => state.products.prods);
  const selectedCat = useAppSelector((state) => state.categories.selectedCategory);
  const prodsByCat = allProds.filter((prod) => prod.categoryId === selectedCat?.id);
  const user = useAppSelector((state) => state.auth.user);
  // if selectedFilterCategory не выбрана, то отобрази все, если выбрана, то только нужной категории


  const handleCloseModal = (): void => {
    void dispatch(clearSelectedProd());
  };

  return (
    <>
      {user.isAdmin === true && <NewProdForm />}
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
        {selectedCat
          ? prodsByCat.map((el) => <OneProduct prod={el} key={el.id} />)
          : allProds.map((el) => <OneProduct prod={el} key={el.id} />)}
        
        {prodsByCat.map((el) => (
          <OneProduct prod={el} key={el.id} />
        ))}

      </Box>
    </>
  );
}
