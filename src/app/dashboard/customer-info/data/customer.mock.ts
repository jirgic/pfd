import { Customer } from './customer.model';

export const CUSTOMER_MOCK: Customer = {
  id: 'CUST-000001',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+371 244 44 555',
  memberSince: '2024-06-06',
  organization: {
    name: 'JD Corporation',
  },
};
