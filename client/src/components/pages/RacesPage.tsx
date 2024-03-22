import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import OneRace from '../ui/OneRace';

export default function RacesPage(): JSX.Element {
  const races = useAppSelector((state) => state.motoRaces.races);
  return (
    <div>
      <h1>RacePage</h1>
      {races.map((race) => (
        <OneRace race={race} key={race.id} />
      ))}
    </div>
  );
}
