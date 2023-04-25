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
// import changePassword from "@/components/user_details/ChangePassword.vue"
// import myAddress from "@/components/user_details/MyAddress.vue"

const props = defineProps({
  userType: {
    type: String,
    required: true
  }
})

const route = useRoute()
const path = computed(() => route.name)
const store = useStore()

console.log('route', route)

const substr = props.userType === 'user' ? '/user/:id/' : '/admin/:id/'
const routeMatch = useRouter().getRoutes().filter(r => r.path.includes(substr) && r.name === route.name)

const componentName = routeMatch.map(r => r.name)[0]
const userMenuComponents = {
  changePassword: defineAsyncComponent(() => import('@/components/user_details/ChangePassword.vue')),
  myAddress: () => import('@/components/user_details/MyAddress.vue')
}

const adminMenuComponents = {
  adminProducts: defineAsyncComponent(() => import('@/components/admin/products/ProductsIndex.vue')),
  editProducts: defineAsyncComponent(() => import('@/components/admin/products/AddEditProducts.vue')),
  addProducts: defineAsyncComponent(() => import('@/components/admin/products/AddEditProducts.vue')),
  adminCategories: defineAsyncComponent(() => import('@/components/admin/categories/CategoriesIndex.vue')),
  addCategories: defineAsyncComponent(() => import('@/components/admin/categories/AddEditCategories.vue')),
}

const computedMenuComponents = computed(() => {
  console.log('computedMenuComponents', adminMenuComponents)
  return props.userType === 'admin' ? adminMenuComponents : userMenuComponents
})
</script>

<style scoped></style>