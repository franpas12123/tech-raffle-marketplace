<template>
  <ion-card color="dark" button>
    <img class="img" alt="product"
      :src="layoutType === 'our products' ? './assets/test/hoodie.png' : product.productImgSrc ? product.productImgSrc : './assets/test/money.png'" />
    <ion-card-header>
      <ion-card-title class="title">
        <slot name="title">
          <p v-if="layoutType === 'our products'"
            :class="config.showAddToCartButton ? 'extended-card ion-text-left' : 'ion-text-center'">
            Hoodie
          </p>
          <p v-else :class="config.showAddToCartButton ? 'extended-card ion-text-left' : 'ion-text-center'">
            {{ product.title }}
          </p>
        </slot>
      </ion-card-title>
    </ion-card-header>

    <ion-card-content :class="config.showAddToCartButton ? 'extended-card ion-text-left' : 'ion-text-center'">
      <p v-if="config.showDetails" class="content">
        {{ product.details }}
      </p>
      <p v-if="config.showPrice" :class="{
        'ion-text-center': !config.showAddToCartButton,
        'color-highlight': config.colorHighlight
      }" class="price">
        <b>{{ computedPrice }}</b>
      </p>

      <div v-if="layoutType === 'winners'" class="ticket-details ion-margin-top">
        <p>
          <b>Ticket no: </b>NL-0000-0000-0
        </p>
        <p>
          <b>Announced on: </b>12:10 31 Mar 2023
        </p>
      </div>

      <!-- <ion-row>
        <ion-col> -->
      <div class="progress-container" v-if="config.showProgressContainer">
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

    <base-button v-if="config.showAddToCartButton" class="add-to-cart" text="Add to cart" :expand="true"
      :smaller-text="true" icon="cart-transparent.svg" @click="addToCart"></base-button>
  </ion-card>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonProgressBar } from '@ionic/vue';
import { cartOutline } from 'ionicons/icons';

import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  layoutType: {
    type: String,
    default: ''
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
})

const computedPrice = computed(() => {
  return `₱${props.product.price}`;
})

const progress = ref(props.progress / props.progressTotal);

const addToCart = () => progress.value += (1 / props.progressTotal)

const config = {
  showProgressContainer: props.layoutType === 'closing soon',
  showAddToCartButton: props.layoutType === 'closing soon',
  showPrice: props.layoutType === 'closing soon' || props.layoutType === 'our products',
  showDetails: props.layoutType !== 'our products',
  colorHighlight: props.layoutType === 'our products'
}
</script>

<style lang="scss" scoped>
$button-height: 45px;

ion-card {
  border-radius: var(--border-radius);
  min-width: var(--vertical-card-width);
  // min-height: var(--vertical-card-height);
  margin-left: 22px;
  margin-right: 22px;
  // background-color: white;
  box-shadow: var(--box-shadow);

  .extended-card {
    padding-bottom: $button-height;
  }

  .img {
    height: var(--vertical-card-img-height);
    width: 100%;
    // object-fit: contain;
    // background-color: #13212d;
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
  margin-top: 5px;

  p {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
}

.content {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  height: 36px;
  overflow: hidden;
}

.progress-container {
  margin-top: 10px;

  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 5px;
  }
}

.color-highlight {
  color: var(--highlight-color);

  b {
    font-weight: 800;
  }
}

.ticket-details {
  p {
    font-size: 10px;
    line-height: 1;
  }
}
</style>