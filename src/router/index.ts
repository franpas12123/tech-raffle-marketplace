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
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   props: {
  //     title: 'Register',
  //   },
  //   component: () => import('@/views/RegisterPage.vue')
  // },
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
    component: () => import('@/layouts/UserDetailsLayout.vue'),
    children: [
      {
        name: 'changePassword',
        path: 'change-password',
        props: {
          title: 'Change Password',
        },
        component: () => import('@/components/user_details/ChangePassword.vue'),
      },
      {
        name: 'myAddress',
        path: 'my-address',
        component: () => import('@/components/user_details/MyAddress.vue'),
      }
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
