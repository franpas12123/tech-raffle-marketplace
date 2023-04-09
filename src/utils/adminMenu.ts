

import { DashboardMenu } from '@/types/dashboardMenus';
import { personOutline, ticket, giftOutline, locationSharp, cardOutline, cogOutline, logOutOutline, chevronForwardOutline } from 'ionicons/icons';
import { addIconSrc, addRoutesFromText, textToRoute } from './helpers';

const src = './assets/icons/'; // Path to icons

const adminMenuTemplate: Array<DashboardMenu> = [
  {
    icon: 'overview.svg',
    title: 'Overview',
  },
  {
    icon: 'cart.svg',
    title: 'Products',
  },
  {
    icon: 'campaigns.svg',
    title: 'Campaigns',
  },
  {
    icon: 'orders-admin.svg',
    title: 'Orders',
  },
  {
    icon: 'user.svg',
    title: 'Users',
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

const withSrc = addRoutesFromText(adminMenuTemplate)
const adminMenu = addIconSrc(withSrc, src)

export default adminMenu;