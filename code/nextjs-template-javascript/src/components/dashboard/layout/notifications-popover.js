'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { ChatText as ChatTextIcon } from '@phosphor-icons/react/dist/ssr/ChatText';
import { EnvelopeSimple as EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { X as XIcon } from '@phosphor-icons/react/dist/ssr/X';

import { dayjs } from '@/lib/dayjs';

const notifications = [
  {
    id: 'EV-004',
    createdAt: dayjs().subtract(7, 'minute').subtract(5, 'hour').subtract(1, 'day').toDate(),
    read: false,
    type: 'new_job',
    author: { name: 'Jie Yan', avatar: '/assets/avatar-8.png' },
    job: { title: 'Remote React / React Native Developer' },
  },
  {
    id: 'EV-003',
    createdAt: dayjs().subtract(18, 'minute').subtract(3, 'hour').subtract(5, 'day').toDate(),
    read: true,
    type: 'new_job',
    author: { name: 'Fran Perez', avatar: '/assets/avatar-5.png' },
    job: { title: 'Senior Golang Backend Engineer' },
  },
  {
    id: 'EV-002',
    createdAt: dayjs().subtract(4, 'minute').subtract(5, 'hour').subtract(7, 'day').toDate(),
    read: true,
    type: 'new_feature',
    description: 'Logistics management is now available',
  },
  {
    id: 'EV-001',
    createdAt: dayjs().subtract(7, 'minute').subtract(8, 'hour').subtract(7, 'day').toDate(),
    read: true,
    type: 'new_company',
    author: { name: 'Jie Yan', avatar: '/assets/avatar-8.png' },
    company: { name: 'Stripe' },
  },
];

export function NotificationsPopover({ anchorEl, onClose, onMarkAllAsRead, onRemoveOne, open = false }) {
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: '380px' } } }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', px: 3, py: 2 }}>
        <Typography variant="h6">Notifications</Typography>
        <Tooltip title="Mark all as read">
          <IconButton edge="end" onClick={onMarkAllAsRead}>
            <EnvelopeSimpleIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {notifications.length === 0 ? (
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">There are no notifications</Typography>
        </Box>
      ) : (
        <Box sx={{ maxHeight: '270px', overflowY: 'auto' }}>
          <List disablePadding>
            {notifications.map((notification, index) => (
              <NotificationItem
                divider={index < notifications.length - 1}
                key={notification.id}
                notification={notification}
                onRemove={() => {
                  onRemoveOne?.(notification.id);
                }}
              />
            ))}
          </List>
        </Box>
      )}
    </Popover>
  );
}

function NotificationItem({ divider, notification, onRemove }) {
  return (
    <ListItem divider={divider} sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <NotificationContent notification={notification} />
      <Tooltip title="Remove">
        <IconButton edge="end" onClick={onRemove} size="small">
          <XIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

function NotificationContent({ notification }) {
  if (notification.type === 'new_feature') {
    return (
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Avatar>
          <ChatTextIcon fontSize="var(--Icon-fontSize)" />
        </Avatar>
        <div>
          <Typography variant="subtitle2">New feature!</Typography>
          <Typography variant="body2">{notification.description}</Typography>
          <Typography color="text.secondary" variant="caption">
            {dayjs(notification.createdAt).format('MMM D, hh:mm A')}
          </Typography>
        </div>
      </Stack>
    );
  }

  if (notification.type === 'new_company') {
    return (
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Avatar src={notification.author.avatar}>
          <UserIcon />
        </Avatar>
        <div>
          <Typography variant="body2">
            <Typography component="span" variant="subtitle2">
              {notification.author.name}
            </Typography>{' '}
            created{' '}
            <Link underline="always" variant="body2">
              {notification.company.name}
            </Link>{' '}
            company
          </Typography>
          <Typography color="text.secondary" variant="caption">
            {dayjs(notification.createdAt).format('MMM D, hh:mm A')}
          </Typography>
        </div>
      </Stack>
    );
  }

  if (notification.type === 'new_job') {
    return (
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Avatar src={notification.author.avatar}>
          <UserIcon />
        </Avatar>
        <div>
          <Typography variant="body2">
            <Typography component="span" variant="subtitle2">
              {notification.author.name}
            </Typography>{' '}
            added a new job{' '}
            <Link underline="always" variant="body2">
              {notification.job.title}
            </Link>
          </Typography>
          <Typography color="text.secondary" variant="caption">
            {dayjs(notification.createdAt).format('MMM D, hh:mm A')}
          </Typography>
        </div>
      </Stack>
    );
  }

  return <div />;
}
