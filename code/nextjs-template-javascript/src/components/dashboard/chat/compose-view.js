'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { paths } from '@/paths';

import { ChatContext } from './chat-context';
import { GroupRecipients } from './group-recipients';
import { MessageAdd } from './message-add';

function useRecipients() {
  const [recipients, setRecipients] = React.useState([]);

  const handleRecipientAdd = React.useCallback((recipient) => {
    setRecipients((prevState) => {
      const found = prevState.find((_recipient) => _recipient.id === recipient.id);

      if (found) {
        return prevState;
      }

      return [...prevState, recipient];
    });
  }, []);

  const handleRecipientRemove = React.useCallback((recipientId) => {
    setRecipients((prevState) => {
      return prevState.filter((recipient) => recipient.id !== recipientId);
    });
  }, []);

  return { handleRecipientAdd, handleRecipientRemove, recipients };
}

export function ComposeView() {
  const router = useRouter();

  const { contacts, createThread, createMessage } = React.useContext(ChatContext);

  const { handleRecipientAdd, handleRecipientRemove, recipients } = useRecipients();

  const handleSendMessage = React.useCallback(
    async (type, content) => {
      const recipientIds = recipients.map((recipient) => recipient.id);

      const threadId = createThread({ type: 'group', recipientIds });

      createMessage({ threadId, type, content });

      router.push(paths.dashboard.chat.thread('group', threadId));
    },
    [router, createThread, createMessage, recipients]
  );

  return (
    <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', minHeight: 0 }}>
      <GroupRecipients
        contacts={contacts}
        onRecipientAdd={handleRecipientAdd}
        onRecipientRemove={handleRecipientRemove}
        recipients={recipients}
      />
      <Divider />
      <Box sx={{ flex: '1 1 auto' }} />
      <Divider />
      <MessageAdd disabled={recipients.length < 1} onSend={handleSendMessage} />
    </Box>
  );
}
