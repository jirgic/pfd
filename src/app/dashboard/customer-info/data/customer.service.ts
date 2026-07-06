import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';
import { CUSTOMER_MOCK } from './customer.mock';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  getCustomer(): Observable<Customer> {
    return of(CUSTOMER_MOCK);
  }
}
