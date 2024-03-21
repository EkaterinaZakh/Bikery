import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { FestType } from '../../types/fest';

type OneFestProps = {
  fest: FestType;
};

export default function OneFest({ fest }: OneFestProps): JSX.Element {

  return (
    <Card>
      <CardMedia
        image={fest.image}
        title={fest.name}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {fest.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {fest.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Place: {fest.place}, Date: {fest.date.toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
