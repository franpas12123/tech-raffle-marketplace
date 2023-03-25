<template>
  <Layout>
    <template v-slot:content>
      <ion-grid fixed class="ion-margin-top ion-margin-bottom">
        <ion-row>
          <ion-col size="12" size-md="5" size-lg="4">
            <!-- User menu -->
            <UserMenu></UserMenu>
          </ion-col>
          <ion-col>
            <!-- Current menu view -->
            <!-- <component v-bind:is="myAddress" title="Change Password" /> -->
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

import UserMenu from "@/components/user_details/UserMenu.vue"
import changePassword from "@/components/user_details/ChangePassword.vue"
import myAddress from "@/components/user_details/MyAddress.vue"
import { computed } from 'vue';

const route = useRoute()
const path = computed(() => route.name)
const store = useStore()

console.log('store', store)
const component = () => {
  changePassword
}

</script>

<style scoped></style>