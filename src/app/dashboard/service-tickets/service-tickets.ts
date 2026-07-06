import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { TicketsService } from './data/tickets.service';
import { TicketStatus } from './data/ticket.model';

const BADGE_CLASS_BY_STATUS: Record<TicketStatus, string> = {
  Open: 'neutral',
  'In Progress': 'info',
  'Pending Customer': 'warning',
  Resolved: 'success',
};

@Component({
  selector: 'app-service-tickets',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './service-tickets.html',
  styleUrl: './service-tickets.scss',
})
export class ServiceTickets {
  private readonly ticketsService = inject(TicketsService);

  protected readonly tickets = toSignal(this.ticketsService.getTickets(), {
    requireSync: true,
  });

  protected badgeClass(status: TicketStatus): string {
    return BADGE_CLASS_BY_STATUS[status];
  }
}
