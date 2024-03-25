import React from 'react';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import Box from '@mui/material/Box';

type LoaderProps = {
  children: JSX.Element;
  loading: boolean;
};

export default function Loader({ children, loading }: LoaderProps): JSX.Element {
  if (loading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
      <TwoWheelerIcon style={{ fontSize: 200, color: 'primary' }} />
      </Box>
    );
  return children;
}
