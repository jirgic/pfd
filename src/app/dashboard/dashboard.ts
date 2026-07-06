import { Component } from '@angular/core';
import { CustomerInfo } from './customer-info/customer-info';
import { Header } from '../../shared/header/header';
import { Notifications } from './notifications/notifications';
import { RecentOrders } from './recent-orders/recent-orders';
import { ServiceTickets } from './service-tickets/service-tickets';

@Component({
  selector: 'app-dashboard',
  imports: [Header, CustomerInfo, ServiceTickets, RecentOrders, Notifications],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
