import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order.model';
import { ORDERS_MOCK } from './order.mock';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  getOrders(): Observable<Order[]> {
    return of(ORDERS_MOCK);
  }
}
