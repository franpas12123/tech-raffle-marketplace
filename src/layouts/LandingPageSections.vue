<template>
  <div class="sections">
    <h1 class="ion-text-center ion-text-uppercase">
      <b>{{ title }}</b>
    </h1>
    <ion-grid class="filters-container" v-if="enableFilters">
      <ion-row class="ion-justify-content-center">
        <!-- <ion-col>
          <ion-searchbar class="" placeholder="Product Name"></ion-searchbar>
        </ion-col> -->
        <ion-col size="2" v-for="(filter, index) in filters" :key="index">
          <ion-button expand="block" color="light">{{ filter }}</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from '@ionic/vue';

defineProps({
  enableFilters: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  filters: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="scss" scoped>
.filters-container {
  margin-bottom: 24px;
  margin-top: 24px;
}
</style>