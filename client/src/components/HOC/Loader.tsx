import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type LoaderProps = {
  children: JSX.Element;
  loading: boolean;
};

export default function Loader({ children, loading }: LoaderProps): JSX.Element {
  if (loading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  return children;
}
