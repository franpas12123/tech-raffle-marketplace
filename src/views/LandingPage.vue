<template>
  <Layout>
    <template v-slot:content>
      <!-- Top Banner -->
      <TopBanner class="ion-margin-top"></TopBanner>

      <div class="closing-soon">
        <!-- <h1 class="ion-text-center ion-text-uppercase">
          <b>closing soon</b>
        </h1> -->
        <!-- <SwiperSlide></SwiperSlide> -->
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { IonImg } from '@ionic/vue';
import Layout from '@/layouts/DefaultLayout.vue';

import TopBanner from '@/components/landing/TopBanner.vue';
import SwiperSlide from '@/components/landing/SwiperSlide.vue';
</script>

<style lang="scss" scoped>
.closing-soon {
  height: 350px;

  h1 b {
    font-weight: 800;
  }
}
</style>