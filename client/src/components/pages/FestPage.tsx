import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import OneFest from '../ui/OneFest';

export default function FestPage(): JSX.Element {
  const fests = useAppSelector((state) => state.festivals.fests)
  return (
    <div>
      {fests.map((fest) => (
      <OneFest fest={fest} />
      ))}
  </div>
  )
}
