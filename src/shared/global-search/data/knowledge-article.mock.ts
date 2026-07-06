import { KnowledgeArticle } from './knowledge-article.model';

export const KNOWLEDGE_ARTICLES_MOCK: KnowledgeArticle[] = [
  {
    id: 'KB-2001',
    title: 'How to reset your account password',
    category: 'Account',
    summary: 'Step-by-step guide to resetting a forgotten password from the login screen.',
  },
  {
    id: 'KB-2002',
    title: 'Understanding your monthly invoice',
    category: 'Billing',
    summary: 'Explains line items, taxes and proration on your billing statement.',
  },
  {
    id: 'KB-2003',
    title: 'Connecting a monitor to the docking station',
    category: 'Hardware',
    summary: 'Troubleshooting steps for dual-monitor setups via USB-C docks.',
  },
  {
    id: 'KB-2004',
    title: 'Enabling noise cancellation on your headset',
    category: 'Hardware',
    summary: 'How to turn on and calibrate active noise cancellation.',
  },
  {
    id: 'KB-2005',
    title: 'Submitting a support ticket',
    category: 'Support',
    summary: 'How to open a new ticket and attach diagnostic logs.',
  },
  {
    id: 'KB-2006',
    title: 'Keyboard shortcut reference',
    category: 'Productivity',
    summary: 'Full list of keyboard shortcuts across the dashboard.',
  },
];
