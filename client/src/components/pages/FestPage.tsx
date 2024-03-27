import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OneFest from '../ui/OneFest';
import NewFestForm from '../ui/NewFestForm';
import BaseModal from '../ui/BaseModal';
import EditFestList from '../ui/EditFestList';
import { clearSelectedFest } from '../../redux/slices/fest/slice';
import { Box } from '@mui/material';

export default function FestPage(): JSX.Element {
  const fests = useAppSelector((state) => state.festivals.fests);
  const selectedFest = useAppSelector((store) => store.festivals.selectedFest);
  const dispatch = useAppDispatch();

  const handleCloseModal = (): void => {
    void dispatch(clearSelectedFest());
  };

  return (
    <div>
      <NewFestForm />
      <BaseModal open={!!selectedFest} onClose={handleCloseModal}>
        <EditFestList onSubmit={handleCloseModal} />
      </BaseModal>
      <Box >
      {fests.map((fest) => (
        <OneFest fest={fest} key={fest.id} />
        ))}
        </Box>
    </div>
  );
}
