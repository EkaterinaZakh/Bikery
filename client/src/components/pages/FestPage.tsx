import React from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import OneFest from '../ui/OneFest';
import NewFestForm from '../ui/NewFestForm';

export default function FestPage(): JSX.Element {
  const fests = useAppSelector((state) => state.festivals.fests);
  return (
    <Box>
      <NewFestForm />

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {fests.map((fest) => (
          <OneFest fest={fest} key={fest.id} />
        ))}
      </Box>
    </Box>
  );
}
