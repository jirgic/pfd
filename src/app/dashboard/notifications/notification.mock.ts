import { Notification } from './notification.model';

export const NOTIFICATIONS_MOCK: Notification[] = [
  {
    id: 'NTF-1',
    title: 'Ticket TKT-48291 has a new update.',
    meta: 'Your ticket status changed to In Progress.',
    time: '10m ago',
    read: false,
  },
  {
    id: 'NTF-2',
    title: 'Order ORD-92184 has been shipped.',
    meta: 'Your order is on the way.',
    time: '1h ago',
    read: false,
  },
  {
    id: 'NTF-3',
    title: 'Payment receipt available for ORD-92110.',
    meta: 'Total amount: 560,00 EUR',
    time: '5h ago',
    read: false,
  },
  {
    id: 'NTF-4',
    title: 'Scheduled maintenance on May 28, 2024.',
    meta: 'The portal may be intermittently unavailable.',
    time: '1d ago',
    read: true,
  },
];
