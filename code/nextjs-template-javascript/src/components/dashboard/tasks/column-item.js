'use client';

import * as React from 'react';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DotsThree as DotsThreeIcon } from '@phosphor-icons/react/dist/ssr/DotsThree';

import { usePopover } from '@/hooks/use-popover';

import { ColumnDroppable } from './column-droppable';

export function ColumnItem({
  column,
  onColumnEdit,
  onColumnClear,
  onColumnDelete,
  onTaskOpen,
  onTaskCreate,
  tasks = [],
}) {
  const { id, name } = column;

  const morePopover = usePopover();

  return (
    <React.Fragment>
      <Stack spacing={3} sx={{ flex: '0 0 auto', width: '360px' }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant="h6">{name}</Typography>
            <Chip label={tasks.length} size="small" variant="soft" />
          </Stack>
          <IconButton onClick={morePopover.handleOpen} ref={morePopover.anchorRef}>
            <DotsThreeIcon weight="bold" />
          </IconButton>
        </Stack>
        <ColumnDroppable
          id={id}
          onTaskCreate={() => {
            onTaskCreate?.(id);
          }}
          onTaskOpen={onTaskOpen}
          tasks={tasks}
        />
      </Stack>
      <Menu
        anchorEl={morePopover.anchorRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={morePopover.handleClose}
        open={morePopover.open}
        slotProps={{ paper: { sx: { width: '200px' } } }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          onClick={() => {
            morePopover.handleClose();
            onColumnEdit?.(id);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            morePopover.handleClose();
            onColumnClear?.(id);
          }}
        >
          Clear
        </MenuItem>
        <MenuItem
          onClick={() => {
            morePopover.handleClose();
            onColumnDelete?.(id);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
