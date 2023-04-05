<template>
  <ion-card color="dark" button>
    <img class="img" alt="Silhouette of mountains" src="/assets/test/money.png" />
    <ion-card-header>
      <ion-card-title class="title">
        <slot name="title">
          <p :class="{ 'ion-text-center': alignment === 'center', 'ion-text-left': alignment === 'left' }">
            {{ title }}</p>
        </slot>
      </ion-card-title>
      <!-- <ion-card-subtitle>
        <slot name="subtitle" class="subtitle">
          subtitle
        </slot>
      </ion-card-subtitle> -->
    </ion-card-header>

    <ion-card-content>
      <p class="content">Buy a Rosso set and make it yours!</p>
      <p v-if="showPrice" class="price"><b>{{ computedPrice }}</b></p>

      <!-- <ion-row>
        <ion-col> -->
      <div class="progress-container" v-if="withProgressBar">
        <ion-progress-bar :value="progress"></ion-progress-bar>
        <p class="ion-text-center">{{ progress * progressTotal }} sold</p>
      </div>
      <!-- </ion-col>
      </ion-row> -->
      <ion-row>
        <ion-col>
        </ion-col>
      </ion-row>
    </ion-card-content>

    <!-- <ion-button expand="full" color="light">Cart</ion-button> -->
    <base-button class="add-to-cart" text="Add to cart" :expand="true" :smaller-text="true" icon="cart-transparent.svg"
      @click="addToCart"></base-button>
  </ion-card>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonProgressBar } from '@ionic/vue';
import { cartOutline } from 'ionicons/icons';

import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'WIN: ₱100000'
  },
  withProgressBar: {
    type: Boolean,
    default: true
  },
  progress: {
    type: Number,
    default: 769
  },
  progressTotal: {
    type: Number,
    default: 1000
  },
  alignment: {
    type: String,
    default: 'left'
  },
  showPrice: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number,
    default: 50
  }
})

const computedPrice = computed(() => {
  return `₱${props.price}`;
})

const progress = ref(props.progress / props.progressTotal);

const addToCart = () => progress.value += (1 / props.progressTotal)
</script>

<style lang="scss" scoped>
$button-height: 45px;

ion-card {
  border-radius: var(--border-radius);
  width: var(--vertical-card-width);

  ion-card-content {
    padding-bottom: $button-height;
  }

  .img {
    max-height: var(--vertical-card-img-height);
    width: 100%;
    object-fit: cover;
  }
}

ion-card-header {
  padding-top: 8px;
  padding-bottom: 3px;
  font-size: 16px;
  font-weight: bold;
}

ion-button {
  position: absolute;
  bottom: 0;
  padding-bottom: 0 !important;
  margin: 0;
  height: $button-height;
  width: 100%;
  // --background: #263642 !important;

  // --border-radius: 30px !important;
  // margin-bottom: 0 !important;
  // margin-left: 0;
  // margin-left: 0;
  span {
    font-size: 10px;
  }
}

.title {
  p {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
}

.content {
  font-size: 12px !important;
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 400 !important;
}

.progress-container {
  margin-top: 10px;

  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 5px;
  }
}
</style>