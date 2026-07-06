import { Order } from './order.model';

export const ORDERS_MOCK: Order[] = [
  {
    id: 'ORD-92184',
    orderDate: '2026-06-24',
    total: '1500,50 EUR',
    shipmentStatus: 'Shipped',
  },
  {
    id: 'ORD-92110',
    orderDate: '2026-06-20',
    total: '560,00 EUR',
    shipmentStatus: 'In Transit',
  },
  {
    id: 'ORD-92033',
    orderDate: '2026-06-16',
    total: '400,00 EUR',
    shipmentStatus: 'Delivered',
  },
  {
    id: 'ORD-91902',
    orderDate: '2026-06-12',
    total: '2376,40 EUR',
    shipmentStatus: 'Processing',
  },
  {
    id: 'ORD-81844',
    orderDate: '2025-12-28',
    total: '441,43 EUR',
    shipmentStatus: 'Delivered',
  },
];
