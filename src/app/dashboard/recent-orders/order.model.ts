export type ShipmentStatus = 'Shipped' | 'In Transit' | 'Delivered' | 'Processing';

export interface Order {
  id: string;
  orderDate: string;
  total: string;
  shipmentStatus: ShipmentStatus;
}
