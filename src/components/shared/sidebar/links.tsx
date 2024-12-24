import { FC, SVGProps } from 'react';
import { BlackIcons, BlueIcons } from './sidebar-icons';

interface SubLinkData {
  href: string;
  text: string;
}

interface LinkData {
  href: string;
  text: string;
  blackIcon: FC<SVGProps<SVGSVGElement>>;
  whiteIcon: FC<SVGProps<SVGSVGElement>>;
  pageName: string;
  subLinks?: SubLinkData[];
  isCount?: boolean;
}

export const topLinks: LinkData[] = [
  {
    href: '/dashboard',
    text: 'Dashboard',
    pageName: 'dashboard',
    blackIcon: BlackIcons.DashboardIcon,
    whiteIcon: BlueIcons.DashboardIcon,
  },
  {
    href: 'inventory',
    text: 'Inventory',
    pageName: 'inventory',
    blackIcon: BlackIcons.InventoryIcon,
    whiteIcon: BlueIcons.InventoryIcon,
  },
  {
    href: '/procurement',
    text: 'Procurement',
    pageName: 'procurement',
    blackIcon: BlackIcons.ProcurementIcon,
    whiteIcon: BlueIcons.ProcurementIcon,
    subLinks: [
      { href: '/', text: 'Quotes' },
      { href: '/', text: 'Orders' },
    ],
  },
  {
    href: '/finance',
    text: 'Finance',
    pageName: 'finance',
    blackIcon: BlackIcons.FinanceIcon,
    whiteIcon: BlueIcons.FinanceIcon,
  },
  {
    href: '/communication',
    text: 'Communication',
    pageName: 'communication',
    blackIcon: BlackIcons.CommunicationIcon,
    whiteIcon: BlueIcons.CommunicationIcon,
    isCount: true,
  },
  {
    href: '/calendar',
    text: 'Calendar',
    pageName: 'calendar',
    blackIcon: BlackIcons.CalendarIcon,
    whiteIcon: BlueIcons.CalendarIcon,
    isCount: true,
  },
  {
    href: '/contracts',
    text: 'Contracts',
    pageName: 'contracts',
    blackIcon: BlackIcons.ContractIcon,
    whiteIcon: BlueIcons.ContractIcon,
  },
];

export const bottomLinks: LinkData[] = [
  {
    href: '/support',
    text: 'Support',
    pageName: 'support',
    blackIcon: BlackIcons.SupportIcon,
    whiteIcon: BlueIcons.SupportIcon,
  },
  {
    href: '/settings',
    text: 'Settings',
    pageName: 'settings',
    blackIcon: BlackIcons.SettingsIcon,
    whiteIcon: BlueIcons.SettingsIcon,
  },
];
