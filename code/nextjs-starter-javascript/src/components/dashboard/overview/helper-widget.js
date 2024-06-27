import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export function HelperWidget({ action, description, icon: Icon, label, title }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <div>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: 'center',
                border: '1px solid var(--mui-palette-divider)',
                borderRadius: 1.5,
                boxShadow: 'var(--mui-shadows-8)',
                display: 'inline-flex',
                p: '6px 12px',
              }}
            >
              <Icon fontSize="var(--icon-fontSize-md)" />
              <Typography variant="subtitle2">{label}</Typography>
            </Stack>
          </div>
          <Stack spacing={1}>
            <Typography variant="h6">{title}</Typography>
            <Typography color="text.secondary" variant="body2">
              {description}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>{action}</CardActions>
    </Card>
  );
}
