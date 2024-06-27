import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Warning as WarningIcon } from '@phosphor-icons/react/dist/ssr/Warning';

export function DeleteAccount(): React.JSX.Element {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <WarningIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Delete account"
      />
      <CardContent>
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="subtitle1">
            Delete your account and all of your source data. This is irreversible.
          </Typography>
          <Button color="error" variant="outlined">
            Delete account
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
