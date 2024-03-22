import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OneFest from '../ui/OneFest';
import getAllFestsThunk from '../../redux/slices/fest/thunk';
import NewFestForm from '../ui/NewFestForm';


export default function FestPage(): JSX.Element {
  const fests = useAppSelector((state) => state.festivals.fests);
  return (
    <div>
      <h1>FestPage</h1>
      <NewFestForm/>
      {fests.map((fest) => (
        <OneFest fest={fest} key={fest.id} />
      ))}
    </div>
  );
}
