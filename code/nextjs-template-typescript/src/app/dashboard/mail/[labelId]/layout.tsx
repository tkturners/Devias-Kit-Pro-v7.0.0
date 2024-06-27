import * as React from 'react';

import { dayjs } from '@/lib/dayjs';
import { MailProvider } from '@/components/dashboard/mail/mail-context';
import { MailView } from '@/components/dashboard/mail/mail-view';
import type { Label, Thread } from '@/components/dashboard/mail/types';

function filterThreads(threads: Thread[], labelId: string): Thread[] {
  return threads.filter((thread) => {
    if (['inbox', 'sent', 'drafts', 'spam', 'trash'].includes(labelId)) {
      return thread.folder === labelId;
    }

    if (labelId === 'important') {
      return thread.isImportant;
    }

    if (labelId === 'starred') {
      return thread.isStarred;
    }

    if (thread.labels.includes(labelId)) {
      return true;
    }

    return false;
  });
}

const labels = [
  { id: 'inbox', type: 'system', name: 'Inbox', unreadCount: 1, totalCount: 0 },
  { id: 'sent', type: 'system', name: 'Sent', unreadCount: 0, totalCount: 0 },
  { id: 'drafts', type: 'system', name: 'Drafts', unreadCount: 0, totalCount: 0 },
  { id: 'spam', type: 'system', name: 'Spam', unreadCount: 0, totalCount: 0 },
  { id: 'trash', type: 'system', name: 'Trash', unreadCount: 0, totalCount: 1 },
  { id: 'important', type: 'system', name: 'Important', unreadCount: 0, totalCount: 1 },
  { id: 'starred', type: 'system', name: 'Starred', unreadCount: 1, totalCount: 1 },
  { id: 'work', type: 'custom', name: 'Work', color: '#43A048', unreadCount: 0, totalCount: 1 },
  { id: 'business', type: 'custom', name: 'Business', color: '#1E88E5', unreadCount: 1, totalCount: 2 },
  { id: 'personal', type: 'custom', name: 'Personal', color: '#FB8A00', unreadCount: 0, totalCount: 1 },
] satisfies Label[];

const threads = [
  {
    id: 'TRD-004',
    from: { avatar: '/assets/avatar-9.png', email: 'marcus.finn@domain.com', name: 'Marcus Finn' },
    to: [{ avatar: '/assets/avatar.png', email: 'sofia@devias.io', name: 'Sofia Rivers' }],
    subject: 'Website redesign. Interested in collaboration',
    message: `Hey there,

I hope this email finds you well. I'm glad you liked my projects, and I would be happy to provide you with a quote for a similar project.

Please let me know your requirements and any specific details you have in mind, so I can give you an accurate quote.

Looking forward to hearing from you soon.

Best regards,

Marcus Finn`,
    attachments: [
      {
        id: 'ATT-001',
        name: 'working-sketch.png',
        size: '128.5 KB',
        type: 'image',
        url: '/assets/image-abstract-1.png',
      },
      { id: 'ATT-002', name: 'summer-customers.pdf', size: '782.3 KB', type: 'file', url: '#' },
      {
        id: 'ATT-003',
        name: 'desktop-coffee.png',
        size: '568.2 KB',
        type: 'image',
        url: '/assets/image-minimal-1.png',
      },
    ],
    folder: 'inbox',
    labels: ['work', 'business'],
    isImportant: true,
    isStarred: false,
    isUnread: true,
    createdAt: dayjs().subtract(3, 'hour').toDate(),
  },
  {
    id: 'TRD-003',
    to: [{ name: 'Sofia Rivers', avatar: '/assets/avatar.png', email: 'sofia@devias.io' }],
    from: { name: 'Miron Vitold', avatar: '/assets/avatar-1.png', email: 'miron.vitold@domain.com' },
    subject: 'Amazing work',
    message: `Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?`,
    folder: 'spam',
    labels: [],
    isImportant: false,
    isStarred: true,
    isUnread: false,
    createdAt: dayjs().subtract(1, 'day').toDate(),
  },
  {
    id: 'TRD-002',
    from: { name: 'Penjani Inyene', avatar: '/assets/avatar-4.png', email: 'penjani.inyene@domain.com' },
    to: [{ name: 'Sofia Rivers', avatar: '/assets/avatar.png', email: 'sofia@devias.io' }],
    subject: 'Flight reminder',
    message: `Dear Sofia,

Your flight is coming up soon. Please don't forget to check in for your scheduled flight.`,
    folder: 'inbox',
    labels: ['business'],
    isImportant: false,
    isStarred: false,
    isUnread: false,
    createdAt: dayjs().subtract(2, 'day').toDate(),
  },
  {
    id: 'TRD-001',
    from: { name: 'Carson Darrin', avatar: '/assets/avatar-3.png', email: 'carson.darrin@domain.com' },
    to: [{ name: 'Sofia Rivers', avatar: '/assets/avatar.png', email: 'sofia@devias.io' }],
    subject: 'Possible candidates for the position',
    message: `My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis`,
    folder: 'trash',
    labels: ['personal'],
    isImportant: false,
    isStarred: false,
    isUnread: true,
    createdAt: dayjs().subtract(2, 'day').toDate(),
  },
] satisfies Thread[];

interface LayoutProps {
  children: React.ReactNode;
  params: { labelId: string };
}

export default function Layout({ children, params }: LayoutProps): React.JSX.Element {
  const { labelId } = params;

  const filteredThreads = filterThreads(threads, labelId);

  return (
    <MailProvider currentLabelId={labelId} labels={labels} threads={filteredThreads}>
      <MailView>{children}</MailView>
    </MailProvider>
  );
}
