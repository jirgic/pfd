export type TicketStatus = 'Open' | 'In Progress' | 'Pending Customer' | 'Resolved';
export type TicketPriority = 'high' | 'medium' | 'low';

export interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: TicketPriority;
  openedOn: string;
}
