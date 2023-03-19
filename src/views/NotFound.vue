<!-- TODO: Add more styling -->
<template>
  <Layout>
    <template v-slot:content>
      <ion-row class="ion-justify-content-center ion-align-items-center ion-margin ion-padding">
        <ion-col>
          <h1 class="ion-text-center">Opps...it seems you hit a brick wall</h1>
        </ion-col>
      </ion-row>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { IonRow, IonCol } from '@ionic/vue';
import Layout from '@/layouts/DefaultLayout.vue';
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20%;
}
</style>