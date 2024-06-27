import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

export function Previewer({ children, title }) {
  return (
    <Card variant="outlined">
      <CardHeader title={title} />
      <Divider />
      {children}
    </Card>
  );
}
