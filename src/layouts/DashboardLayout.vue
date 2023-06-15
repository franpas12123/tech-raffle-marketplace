<template>
  <Layout>
    <template v-slot:content>
      <ion-grid fixed class="ion-margin-top ion-margin-bottom">
        <ion-row>
          <ion-col size="12" size-md="5" size-lg="4" size-xl="3" class="ion-margin-right ion-hide-lg-down">
            <!-- User menu -->
            <!-- {{ componentName }} -->
            <DashboardMenu user-id="test" :user-type="userType"></DashboardMenu>
          </ion-col>
          <!-- <ion-col size="0.25" class="ion-hide-lg-down"></ion-col> -->
          <ion-col>
            <!-- Current menu view -->
            <component v-bind:is="computedMenuComponents[componentName]" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Layout from "./DefaultLayout.vue"
import { computed, defineAsyncComponent } from 'vue';

import DashboardMenu from "@/layouts/DashboardMenu.vue"

const props = defineProps({
  userType: {
    type: String,
    required: true
  }
})

const route = useRoute()
const path = computed(() => route.name)
const store = useStore()

console.log('route', path, route, route.name)

const substr = props.userType === 'user' ? '/user/:id/' : '/admin/:id/'
const routeMatch = useRouter().getRoutes().filter(r => r.path.includes(substr) && r.name === route.name)

const componentName = route.name === 'userDetails' ? 'userDetails' : routeMatch.map(r => r.name)[0]
console.log('componentName', componentName)
const userMenuComponents = {
  userDetails: defineAsyncComponent(() => import('@/components/user_details/PersonalDetails.vue')),
  personalDetails: defineAsyncComponent(() => import('@/components/user_details/PersonalDetails.vue')),
  myAddress: defineAsyncComponent(() => import('@/components/user_details/MyAddress.vue')),
  paymentOptions: defineAsyncComponent(() => import('@/components/user_details/PaymentOptions.vue')),
  changePassword: defineAsyncComponent(() => import('@/components/user_details/ChangePassword.vue')),
}

const adminMenuComponents = {
  // products
  adminProducts: defineAsyncComponent(() => import('@/components/admin/products/ProductsIndex.vue')),
  editProducts: defineAsyncComponent(() => import('@/components/admin/products/AddEditProducts.vue')),
  addProducts: defineAsyncComponent(() => import('@/components/admin/products/AddEditProducts.vue')),
  // categories
  adminCategories: defineAsyncComponent(() => import('@/components/admin/categories/CategoriesIndex.vue')),
  addCategories: defineAsyncComponent(() => import('@/components/admin/categories/AddEditCategories.vue')),
  // campaigns
  adminCampaigns: defineAsyncComponent(() => import('@/components/admin/campaigns/CampaignsIndex.vue')),
  editCampaigns: defineAsyncComponent(() => import('@/components/admin/campaigns/AddEditCampaigns.vue')),
  addCampaigns: defineAsyncComponent(() => import('@/components/admin/campaigns/AddEditCampaigns.vue')),
  viewCampaign: defineAsyncComponent(() => import('@/components/admin/campaigns/ViewCampaign.vue')),
}

const computedMenuComponents = computed(() => {
  console.log('computedMenuComponents', props.userType === 'admin' ? adminMenuComponents : userMenuComponents)
  return props.userType === 'admin' ? adminMenuComponents : userMenuComponents
})
</script>

<style scoped></style>