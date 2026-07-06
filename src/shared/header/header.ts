import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CustomerService } from '../../app/dashboard/customer-info/data/customer.service';
import { getInitials } from '../../app/dashboard/customer-info/data/initials';
import { GlobalSearch } from '../global-search/global-search';
import { NotificationCenter } from '../notification-center/notification-center';

@Component({
  selector: 'app-header',
  imports: [GlobalSearch, NotificationCenter],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly customerService = inject(CustomerService);

  protected readonly customer = toSignal(this.customerService.getCustomer(), {
    requireSync: true,
  });

  protected readonly initials = computed(() => getInitials(this.customer().name));
}
