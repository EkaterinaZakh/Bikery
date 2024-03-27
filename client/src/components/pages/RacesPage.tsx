import React from 'react';
import { Box, Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OneRace from '../ui/OneRace';
import AddRaceForm from '../ui/AddRaceForm';
import BaseModal from '../ui/BaseModal';
import EditRacesList from '../ui/EditRacesList';
import { clearSelectedRaces } from '../../redux/slices/race/slice';

export default function RacesPage(): JSX.Element {
  const races = useAppSelector((store) => store.motoRaces.races);
  const user = useAppSelector((state) => state.auth.user);
  const selectedRaces = useAppSelector((store) => store.motoRaces.selectedRaces);
  const dispatch = useAppDispatch();

  const handleCloseModal = (): void => {
    void dispatch(clearSelectedRaces());
  };
console.log('---', races);

  return (
    <Box className="race_main">
      <h1>Мотопробеги</h1>
      <Container className="all_content_race">
        <Box className="races_cards">
          {races.map((race) => (
            <OneRace race={race} key={race.id} />
          ))}
          <Box className="raceForm">{user.status === 'logged' && <AddRaceForm />}</Box>
        </Box>
      </Container>

      {user.isAdmin === true && user.status === 'logged' && (
        <BaseModal open={!!selectedRaces} onClose={handleCloseModal}>
          <EditRacesList onSubmit={handleCloseModal} onCancel={handleCloseModal} />
        </BaseModal>
      )}
    </Box>
  );
}
