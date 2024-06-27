'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { EnvelopeSimple as EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple';

import { dayjs } from '@/lib/dayjs';
import { DataTable } from '@/components/core/data-table';
import { Option } from '@/components/core/option';

const columns = [
  {
    formatter: (row) => (
      <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
        {row.type}
      </Typography>
    ),
    name: 'Type',
    width: '300px',
  },
  {
    formatter: (row) => {
      const mapping = {
        delivered: { label: 'Delivered', color: 'success' },
        pending: { label: 'Pending', color: 'warning' },
        failed: { label: 'Failed', color: 'error' },
      };
      const { label, color } = mapping[row.status] ?? { label: 'Unknown', color: 'secondary' };

      return <Chip color={color} label={label} size="small" variant="soft" />;
    },
    name: 'Status',
    width: '200px',
  },
  {
    formatter: (row) => (
      <Typography sx={{ whiteSpace: 'nowrap' }} variant="inherit">
        {dayjs(row.createdAt).format('MMM D, YYYY hh:mm A')}
      </Typography>
    ),
    name: 'Date',
    align: 'right',
  },
];

export function Notifications({ notifications }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <EnvelopeSimpleIcon fontSize="var(--Icon-fontSize)" />
          </Avatar>
        }
        title="Notifications"
      />
      <CardContent>
        <Stack spacing={3}>
          <Stack spacing={2}>
            <Select defaultValue="last_invoice" name="type" sx={{ maxWidth: '100%', width: '320px' }}>
              <Option value="last_invoice">Resend last invoice</Option>
              <Option value="password_reset">Send password reset</Option>
              <Option value="verification">Send verification</Option>
            </Select>
            <div>
              <Button startIcon={<EnvelopeSimpleIcon />} variant="contained">
                Send email
              </Button>
            </div>
          </Stack>
          <Card sx={{ borderRadius: 1 }} variant="outlined">
            <Box sx={{ overflowX: 'auto' }}>
              <DataTable columns={columns} rows={notifications} />
            </Box>
          </Card>
        </Stack>
      </CardContent>
    </Card>
  );
}
