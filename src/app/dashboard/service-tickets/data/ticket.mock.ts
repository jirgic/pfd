import { Ticket } from './ticket.model';

export const TICKETS_MOCK: Ticket[] = [
  {
    id: 'TKT-48291',
    subject: 'Login issue on portal',
    status: 'In Progress',
    priority: 'high',
    openedOn: '2026-06-24',
  },
  {
    id: 'TKT-48276',
    subject: 'Unable to access part of system',
    status: 'Pending Customer',
    priority: 'medium',
    openedOn: '2026-06-23',
  },
  {
    id: 'TKT-48163',
    subject: 'Account billing question',
    status: 'In Progress',
    priority: 'low',
    openedOn: '2026-06-21',
  },
  {
    id: 'TKT-48011',
    subject: 'Cannot read small font',
    status: 'Open',
    priority: 'low',
    openedOn: '2025-11-18',
  },
];
