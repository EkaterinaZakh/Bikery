import React, { useState } from 'react';
import { Box, Card, Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CatList from '../ui/CatList';
import OneProduct from '../ui/OneProduct';
import NewProdForm from '../ui/NewProdForm';
import BaseModal from '../ui/BaseModal';
import EditProdList from '../ui/EditProdList';
import { clearSelectedProd } from '../../redux/slices/prod/slice';
import OneProdDesc from '../ui/OneProdDesc';
import ProdModal from '../ui/ProdModal';

export default function ShopPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const selectedCat = useAppSelector((store) => store.categories?.selectedCategory);
  const categories = useAppSelector((state) => state.categories.categories);
  const selectedProd = useAppSelector((state) => state.products.selectedProd);
  const allProds = useAppSelector((state) => state.products.prods);
  const prodsByCat = allProds.filter((prod) => prod.categoryId === selectedCat?.id);
  const user = useAppSelector((state) => state.auth.user);
  // if selectedFilterCategory не выбрана, то отобрази все, если выбрана, то только нужной категории

  const handleCloseModal = (): void => {
    void dispatch(clearSelectedProd());
  };

  return (
    <Box className="shop_main">
      <h1>Магазин</h1>
      {user.isAdmin === true && <NewProdForm />}
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
        {categories.map((category) => (
          <CatList key={category.id} category={category} />
        ))}
      </Box>
      <Container
        className="shop_cards"
        sx={{
          display: 'flex',
        }}
      >
        {/** <ProdModal /> */}
        {/** Если модальное окно 1, а открываться должно по-разному -- нужен стейт */}
        {/* <BaseModal open={!!selectedProd && modalType === '???'} onClose={handleCloseModal}>
          <EditProdList onSubmit={handleCloseModal} onCancel={handleCloseModal} />
        </BaseModal> */}
        <ProdModal />
        {selectedCat
          ? prodsByCat.map((el) => <OneProduct prod={el} key={el.id} />)
          : allProds.map((el) => <OneProduct prod={el} key={el.id} />)}
        {/* <BaseModal open={!!selectedProd} onClose={handleCloseModal}>
            <OneProdDesc onCancel={handleCloseModal} />
        </BaseModal> */}
      </Container>
    </Box>
  );
}
