<template>
  <Layout>
    <template v-slot:content>
      <ion-grid fixed class="ion-margin-top ion-margin-bottom">
        <ion-row>
          <ion-col size="12" size-md="5" size-lg="4" class="ion-margin-right">
            <!-- User menu -->
            <UserMenu></UserMenu>
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

import UserMenu from "@/components/user_details/UserMenu.vue"
import changePassword from "@/components/user_details/ChangePassword.vue"
import myAddress from "@/components/user_details/MyAddress.vue"

const route = useRoute()
const path = computed(() => route.name)
const store = useStore()

const substr = '/user/:id/'
const routeMatch = useRouter().getRoutes().filter(r => r.path.includes(substr) && r.name === route.name)

const componentName = routeMatch.map(r => r.name)[0]
const userMenuComponents = {
  changePassword, myAddress
}
</script>

<style scoped></style>