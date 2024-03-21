import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { FestType } from '../../types/fest';

type OneFestProps = {
  fest: FestType;
};

export default function OneFest({ fest }: OneFestProps): JSX.Element {

  return (
    
    <Card>
      <h3>OneFestComp</h3>
      <CardMedia
        image="http://i.postimg.cc/P5LNB2dC/fest-photo.png"
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
          {/* {fest.date} */}
          {/* Place: {fest.place}, Date: {fest.date.toLocaleDateString()} */}
        </Typography>
      </CardContent>
    </Card>
  );
}
