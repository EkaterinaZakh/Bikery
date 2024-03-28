import React from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OneFest from '../ui/OneFest';
import NewFestForm from '../ui/NewFestForm';
import BaseModal from '../ui/BaseModal';
import EditFestList from '../ui/EditFestList';
import { clearSelectedFest } from '../../redux/slices/fest/slice';

export default function FestPage(): JSX.Element {
  const fests = useAppSelector((state) => state.festivals.fests);
  const selectedFest = useAppSelector((store) => store.festivals.selectedFest);
  const dispatch = useAppDispatch();

  const handleCloseModal = (): void => {
    void dispatch(clearSelectedFest());
  };

  return (
    <div
      style={{
        backgroundImage: `url('festPage.jpeg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        filter: 'brightness(80%)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <h1>Фестивали</h1>
      <NewFestForm />
      <BaseModal open={!!selectedFest} onClose={handleCloseModal}>
        <EditFestList onSubmit={handleCloseModal} />
      </BaseModal>
      <Box style={{ marginLeft: '50px' }}>
        {fests.map((fest) => (
          <OneFest fest={fest} key={fest.id} />
        ))}
      </Box>
    </div>
  );
}
