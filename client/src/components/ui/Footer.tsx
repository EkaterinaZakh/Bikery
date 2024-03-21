import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(27, 4, 4, 0.9)',
        color: 'white',
        margin: '0 5px',
        padding: '1% 0',
        position: 'fixed',
        bottom: 0,
        width: '98%',
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          Связаться с нами: 8 800 888 88 88
        </Typography>
      </Container>
    </Box>
  );
}
