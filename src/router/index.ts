import { createRouter, createWebHistory } from '@ionic/vue-router';
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import { supabase } from '@/lib/supabaseClient';
import { nextTick } from 'vue';
import dayjs from 'dayjs';
import store from '@/store';

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
    path: '/admin-login',
    name: 'adminLogin',
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
    meta: {
      requiresAuth: true
    },
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        name: 'personalDetails',
        path: 'personal-details',
        component: () => import('@/components/user_details/PersonalDetails.vue'),
      },
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
        component: () => import('@/components/user_details/PaymentOptions.vue'),
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
    meta: {
      requiresAdminAuth: true
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
        children: [
          {
            name: 'addProducts',
            path: 'add',
            component: () => import('@/components/admin/products/AddEditProducts.vue'),
          },
          {
            name: 'editProducts',
            path: 'edit/:productId',
            component: () => import('@/components/admin/products/AddEditProducts.vue'),
          }
        ]
      },
      {
        name: 'adminCategories',
        path: 'categories',
        component: () => import('@/components/admin/categories/CategoriesIndex.vue'),
        children: [
          {
            name: 'addCategories',
            path: 'add',
            component: () => import('@/components/admin/categories/AddEditCategories.vue'),
          },
          {
            name: 'editCategories',
            path: 'edit/:categoryId',
            component: () => import('@/components/admin/categories/AddEditCategories.vue'),
          }
        ]
      },
      {
        name: 'adminCampaigns',
        path: 'campaigns',
        component: () => import('@/components/admin/campaigns/CampaignsIndex.vue'),
        children: [
          {
            name: 'addCampaigns',
            path: 'add',
            component: () => import('@/components/admin/campaigns/AddEditCampaigns.vue'),
          },
          {
            name: 'editCampaigns',
            path: 'edit/:campaignId',
            component: () => import('@/components/admin/campaigns/AddEditCampaigns.vue'),
          },
          {
            name: 'viewCampaign',
            path: 'view/:campaignId/:linked_product?',
            component: () => import('@/components/admin/campaigns/ViewCampaign.vue'),
          }
        ]
      },
      // {
      //   name: 'adminOrders',
      //   path: 'orders',
      //   component: () => import('@/components/admin/orders/OrdersIndex.vue'),
      //   children: [
      //     {
      //       name: 'addCampaigns',
      //       path: 'add',
      //       component: () => import('@/components/admin/orders/AddEditCampaigns.vue'),
      //     },
      //     {
      //       name: 'editCampaigns',
      //       path: 'edit/:id',
      //       component: () => import('@/components/admin/orders/AddEditCampaigns.vue'),
      //     }
      //   ]
      // },
      {
        name: 'adminOrders',
        path: 'orders',
        component: () => import('@/components/user_details/MyAddress.vue'),
      },
      {
        name: 'adminUsers',
        path: 'users',
        component: () => import('@/components/admin/categories/CategoriesIndex.vue'),
        children: [
          {
            name: 'addCategories',
            path: 'add',
            component: () => import('@/components/admin/categories/AddEditCategories.vue'),
          },
          // {
          //   name: 'editCategories',
          //   path: 'edit/:id',
          //   component: () => import('@/components/admin/categories/AddEditCategories.vue'),
          // }
        ]
      },
      {
        name: 'adminChangePassword',
        path: 'change-password',
        props: {
          title: 'Change Password',
        },
        component: () => import('@/components/user_details/ChangePassword.vue'),
      },
    ]
  },
  {
    path: '/register',
    redirect: { name: 'signup'}
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

async function getUser(next: NavigationGuardNext, from?: RouteLocationNormalized, userType?: string) {
  // const localUser = await supabase.auth.getSession();
  // console.log('localuser', localUser)
  console.log('from', from)
  console.log('user', userType)
  // if (localUser?.data?.session === null) {
  //   store.dispatch('auth/setAuthRedirect', )
  //   const route = '/login'
  //   next(route)
  // } else {
  //   const tokenExpiry = dayjs(localUser?.data?.session?.expires_at).isAfter(dayjs())
  //   if (tokenExpiry) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // }
}

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAdminAuth) {
//     getUser(next, from, 'admin')
//   } else if (to.meta.requiresAuth) {
//     getUser(next)
//   } else {
//     next()
//   }
// })

export default router