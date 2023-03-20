import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/LandingPage.vue')
  },
  {
    path: '/privacy-policy',
    props: {
      title: 'Privacy Policy',
    },
    component: () => import('@/components/base/SinglePageText.vue')
  },
  {
    path: '/user-agreement',
    props: {
      title: 'User Agreement',
    },
    component: () => import('@/components/base/SinglePageText.vue')
  },
  {
    path: '/how-it-works',
    props: {
      title: 'How It Works',
    },
    component: () => import('@/components/base/SinglePageVideo.vue')
  },
  {
    path: '/faq',
    props: {
      title: 'Frequently Asked Questions (FAQs)',
    },
  component: () => import('@/components/base/SinglePageFAQ.vue')
  },
  // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', 
    component: () => import('@/views/NotFound.vue')}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
