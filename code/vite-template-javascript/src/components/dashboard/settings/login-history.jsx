'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Timer as TimerIcon } from '@phosphor-icons/react/dist/ssr/Timer';

import { dayjs } from '@/lib/dayjs';
import { DataTable } from '@/components/core/data-table';

const columns = [
  {
    formatter: (row) => {
      return (
        <div>
          <Typography variant="subtitle2">{row.type}</Typography>
          <Typography color="text.secondary" variant="inherit">
            on {dayjs(row.createdAt).format('hh:mm A MMM D, YYYY')}
          </Typography>
        </div>
      );
    },
    name: 'Login type',
    width: '250px',
  },
  { field: 'ip', name: 'IP address', width: '150px' },
  { field: 'userAgent', name: 'User agent', width: '200px' },
];

export function LoginHistory({ events }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <TimerIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Login history"
      />
      <CardContent>
        <Card sx={{ overflowX: 'auto' }} variant="outlined">
          <DataTable columns={columns} rows={events} />
        </Card>
      </CardContent>
    </Card>
  );
}
