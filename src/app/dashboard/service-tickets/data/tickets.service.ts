import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockSearch } from '../../../../shared/utils/mock-search';
import { Ticket } from './ticket.model';
import { TICKETS_MOCK } from './ticket.mock';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  getTickets(): Observable<Ticket[]> {
    return of(TICKETS_MOCK);
  }

  search(query: string): Observable<Ticket[]> {
    return mockSearch(TICKETS_MOCK, query, (ticket) => `${ticket.id} ${ticket.subject}`, 300);
  }
}
