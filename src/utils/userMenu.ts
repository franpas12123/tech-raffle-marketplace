

import { DashboardMenu } from '@/types/dashboardMenus';
import { addIconSrc, addRoutesFromText } from './helpers';

const src = './assets/icons/'; // Path to icons

const userMenuTemplate: Array<DashboardMenu> = [
  {
    icon: 'user.svg',
    title: 'Personal Details',
    route: '',
  },
  {
    icon: 'ticket.svg',
    title: 'Active Tickets',
  },
  {
    icon: 'orders.svg',
    title: 'My Purchases',
  },
  {
    icon: 'address.svg',
    title: 'My Address',
  },
  {
    icon: 'payment-option.svg',
    title: 'Payment Options',
  },
  {
    icon: 'password.svg',
    title: 'Change Password',
  },
  {
    icon: 'logout.svg',
    title: 'Logout',
  }
] 

const withSrc = addRoutesFromText(userMenuTemplate);
const userMenu = addIconSrc(withSrc, src)

export default userMenu;