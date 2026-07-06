import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { OrdersService } from './orders.service';
import { ShipmentStatus } from './order.model';

const BADGE_CLASS_BY_SHIPMENT_STATUS: Record<ShipmentStatus, string> = {
  Shipped: 'success',
  'In Transit': 'info',
  Delivered: 'success',
  Processing: 'info',
};

@Component({
  selector: 'app-recent-orders',
  imports: [DatePipe],
  templateUrl: './recent-orders.html',
  styleUrl: './recent-orders.scss',
})
export class RecentOrders {
  private readonly ordersService = inject(OrdersService);

  protected readonly orders = toSignal(this.ordersService.getOrders(), {
    requireSync: true,
  });

  protected badgeClass(status: ShipmentStatus): string {
    return BADGE_CLASS_BY_SHIPMENT_STATUS[status];
  }
}
