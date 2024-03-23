import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import OneRace from '../ui/OneRace';
import AddRaceForm from '../ui/AddRaceForm';

export default function RacesPage(): JSX.Element {
  const races = useAppSelector((store) => store.motoRaces.races);
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <div>{user.isAdmin === true && <AddRaceForm />},</div>
      <div>
        {races.map((race) => (
          <OneRace race={race} key={race.id} />
        ))}
      </div>
    </div>
  );
}
