'use client';

import * as React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

import { TaskCard } from './task-card';
import { TaskDraggable } from './task-draggable';

export function ColumnDroppable({ id, onTaskCreate, onTaskOpen, tasks }) {
  const { over, setNodeRef } = useDroppable({ id, data: { type: 'column' } });

  const isOver = over ? over.id === id || tasks.find((task) => task.id === over.id) : false;

  return (
    <Stack
      ref={setNodeRef}
      spacing={3}
      sx={{
        bgcolor: 'var(--mui-palette-background-level1)',
        borderRadius: '20px',
        flex: '0 0 auto',
        minHeight: '250px',
        p: 3,
        ...(isOver && { bgcolor: 'var(--mui-palette-background-level2)' }),
      }}
    >
      <Button color="secondary" onClick={onTaskCreate} startIcon={<PlusIcon />}>
        Add task
      </Button>
      {tasks.map((task) => (
        <TaskDraggable id={task.id} key={task.id}>
          <TaskCard onOpen={onTaskOpen} task={task} />
        </TaskDraggable>
      ))}
    </Stack>
  );
}
