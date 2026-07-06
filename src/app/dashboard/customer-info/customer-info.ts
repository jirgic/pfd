import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { CustomerService } from './data/customer.service';
import { getInitials } from './data/initials';

@Component({
  selector: 'app-customer-info',
  imports: [DatePipe],
  templateUrl: './customer-info.html',
  styleUrl: './customer-info.scss',
})
export class CustomerInfo {
  private readonly customerService = inject(CustomerService);

  protected readonly customer = toSignal(this.customerService.getCustomer(), {
    requireSync: true,
  });

  protected readonly initials = computed(() => getInitials(this.customer().name));
}
