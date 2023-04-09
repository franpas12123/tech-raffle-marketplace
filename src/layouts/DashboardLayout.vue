<template>
  <Layout>
    <template v-slot:content>
      <ion-grid fixed class="ion-margin-top ion-margin-bottom">
        <ion-row>
          <ion-col size="12" size-md="5" size-lg="4" class="ion-margin-right">
            <!-- User menu -->
            <DashboardMenu user-id="test" :user-type="userType"></DashboardMenu>
          </ion-col>
          <ion-col size="0.25"></ion-col>
          <ion-col>
            <!-- Current menu view -->
            <component v-bind:is="userMenuComponents[componentName]" />
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
import { computed } from 'vue';

import DashboardMenu from "@/layouts/DashboardMenu.vue"
import changePassword from "@/components/user_details/ChangePassword.vue"
import myAddress from "@/components/user_details/MyAddress.vue"

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
  changePassword, myAddress
}
</script>

<style scoped></style>