import React from 'react';
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

  return (
    <div>

      <div>{user.status === 'logged' && <AddRaceForm />},</div>
      <div>
        {races.map((race) => (
          <OneRace race={race} key={race.id} />
        ))}
      </div>

      {user.isAdmin === true && <AddRaceForm />}
      {user.isAdmin === true && user.status === 'logged' && (
        <BaseModal open={!!selectedRaces} onClose={handleCloseModal}>
          <EditRacesList onSubmit={handleCloseModal} onCancel={handleCloseModal} />
        </BaseModal>
      )}
      {races.map((race) => (
        <OneRace race={race} key={race.id} />
      ))}

    </div>
  );
}
