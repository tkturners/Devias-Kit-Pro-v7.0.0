'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DotsThree as DotsThreeIcon } from '@phosphor-icons/react/dist/ssr/DotsThree';

import { DataTable } from '@/components/core/data-table';

const columns = [
  {
    formatter: (row) => (
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Avatar src={row.avatar} />
        <div>
          <Typography variant="subtitle2">{row.name}</Typography>
          <Typography color="text.secondary" variant="body2">
            {row.email}
          </Typography>
        </div>
      </Stack>
    ),
    name: 'Name',
    width: '350px',
  },
  {
    formatter: (row) => {
      return row.role === 'Owner' ? (
        <Chip color="primary" label="Owner" size="small" variant="soft" />
      ) : (
        <Chip label={row.role} size="small" variant="soft" />
      );
    },
    name: 'Role',
    width: '100px',
  },
  {
    formatter: () => (
      <IconButton>
        <DotsThreeIcon weight="bold" />
      </IconButton>
    ),
    name: 'Actions',
    hideName: true,
    width: '100px',
    align: 'right',
  },
];

export function MembersTable({ rows }) {
  return <DataTable columns={columns} rows={rows} />;
}
