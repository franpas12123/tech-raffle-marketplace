import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/LandingPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    props: {
      title: 'Welcome back!',
    },
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    props: {
      title: 'Register',
    },
    component: () => import('@/views/RegisterPage.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy policy',
    props: {
      title: 'Privacy Policy',
    },
    component: () => import('@/components/base/SinglePageText.vue')
  },
  {
    path: '/user-agreement',
    name: 'user agreement',
    props: {
      title: 'User Agreement',
    },
    component: () => import('@/components/base/SinglePageText.vue')
  },
  {
    path: '/contact-us',
    name: 'contact us',
    props: {
      title: 'Contact Us',
    },
    component: () => import('@/views/information/ContactUs.vue')
  },
  {
    path: '/how-it-works',
    name: 'how it works',
    props: {
      title: 'How It Works',
    },
    component: () => import('@/components/base/SinglePageVideo.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    props: {
      title: 'Frequently Asked Questions (FAQs)',
    },
    component: () => import('@/components/base/SinglePageFAQ.vue')
  },
  // user routes
  {
    path: '/user/:id',
    name: 'userDetails',
    props: {
      userType: 'user',
    },
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        name: 'activeTickets',
        path: 'active-tickets',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'myPurchases',
        path: 'my-purchases',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'myAddress',
        path: 'my-address',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'paymentOptions',
        path: 'payment-options',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'changePassword',
        path: 'change-password',
        props: {
          title: 'Change Password',
        },
        component: () => import('@/components/user_details/ChangePassword.vue'),
      },
    ]
  },
  // admin routes
  {
    path: '/admin/:id',
    name: 'adminOverview',
    props: {
      userType: 'admin',
    },
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/admin/products/ProductsIndex.vue'),
      },
      {
        name: 'adminProducts',
        path: 'products',
        component: () => import('@/components/admin/products/ProductsIndex.vue'),
      },
      {
        name: 'adminCampaigns',
        path: 'campaigns',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'adminOrders',
        path: 'orders',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'adminUsers',
        path: 'users',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'changePassword',
        path: 'change-password',
        props: {
          title: 'Change Password',
        },
        component: () => import('@/components/user_details/ChangePassword.vue'),
      },
    ]
  },
  // will match everything and put it under `$route.params.pathMatch`
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: () => import('@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
