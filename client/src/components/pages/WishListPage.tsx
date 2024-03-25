import React from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import OneRace from '../ui/OneRace';
import OneFest from '../ui/OneFest';

export default function WishListPage(): JSX.Element {
  const fests = useAppSelector((state) => state.festivals.fests);
  const races = useAppSelector((store) => store.motoRaces.races);

  return (
    <div className="wish__main">
      <h2 className="wish__h">Избранное</h2>

      <div className="wish_content">
        <div className="wish__fest">
          <h3>Фестивали</h3>
          {fests.map((fest) => (
            <>
              <OneFest fest={fest} key={fest.id} />
              <Button variant="outlined" color="info">
                Убрать
              </Button>
            </>
          ))}
        </div>
        <div className="wish__race">
          <h3>Мотопробеги</h3>
          {races.map((race) => (
            <>
              <OneRace race={race} key={race.id} />
              <Button variant="outlined" color="info">
                Убрать
              </Button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
