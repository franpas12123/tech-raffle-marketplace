<template>
  <ion-card color="dark">
    <ion-row>
      <ion-col size="12" size-sm="5" class="img-container">
        <img class="img" alt="product" src="/assets/test/money.png" />
      </ion-col>
      <ion-col class="card-content">
        <ion-card-header>
          <ion-card-title class="title">
            <slot name="title">
              <p :class="{ 'ion-text-center': alignment === 'center', 'ion-text-left': alignment === 'left' }">
                {{ product.name }}
              </p>
            </slot>
          </ion-card-title>
          <!-- <ion-card-subtitle>
        <slot name="subtitle" class="subtitle">
          subtitle
        </slot>
      </ion-card-subtitle> -->
        </ion-card-header>

        <ion-card-content class="">
          <ion-row>
            <ion-col>
              <p class="content">Buy a Rosso set and make it <b>yours</b>!</p>
              <p v-if="showPrice" class="price"><b>{{ computedPrice }}</b></p>

              <div class="progress-container ion-text-center" v-if="withProgressBar">
                <ion-progress-bar :value="progress"></ion-progress-bar>
                <span class="progress-text">{{ progress * progressTotal }} sold</span>
              </div>
            </ion-col>
          </ion-row>

          <ion-row class="">
            <ion-col size="9" size-md="2" class="">
              <ion-button class="light" size="small">Prize details</ion-button>
            </ion-col>
            <ion-col size="9" size-md="2" class="">
              <!-- <ion-button size="small">Prize details</ion-button> -->
              <!-- <ion-button size="small">Prize details</ion-button> -->
              <base-button class="add-to-cart" text="Add to cart" :smaller-text="true" icon="cart-transparent.svg"
                @click="addToCart"></base-button>
            </ion-col>
            <ion-col size="9" size-md="4" class="">
              <ion-button class="light" size="small">
                <ion-icon aria-hidden="true" :icon="calendarOutline" />
                Max draw date: March 31, 2023
              </ion-button>
              <!-- <ion-button size="small" :icon="calendarOutline" slot="start">Max draw date: March 31, 2023</ion-button> -->
              <!-- <base-button class="add-to-cart" text="Max draw date: March 31, 2023" :smaller-text="true"
              icon="cart-transparent.svg" @click="addToCart"></base-button> -->
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-col>
    </ion-row>
  </ion-card>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonProgressBar } from '@ionic/vue';
import { cartOutline, calendarOutline, send } from 'ionicons/icons';

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
  showPrice: {
    type: Boolean,
    default: true
  },
})

const computedPrice = computed(() => {
  return `₱${props.product.price}`;
})

const progress = ref(props.progress / props.progressTotal);

const addToCart = () => progress.value += (1 / props.progressTotal)
</script>

<style lang="scss" scoped>
$button-height: 45px;

ion-card {
  background-color: white;
  color: black;
  // border-radius: var(--border-radius);
  max-height: var(--horizontal-card-height);
  min-width: var(--vertical-card-width);

  ion-card-content {

    // padding-bottom: $button-height;
    ion-col {
      // padding: 16px;
    }
  }

  .img-container {
    padding: 0;

    .img {
      max-height: var(--horizontal-card-img-height);
      width: 100%;
      object-fit: cover;
    }
  }

}

ion-card-header {
  padding-top: 8px;
  padding-bottom: 3px;
  font-size: 16px;
  font-weight: bold;
}

ion-button {
  // position: absolute;
  bottom: 0;
  padding-bottom: 0 !important;
  margin: 0;
  height: $button-height;
  width: 100%;

  // --background: #263642 !important;
  --box-shadow: none;
  --border-radius: 10px !important;
  // margin-bottom: 0 !important;
  // margin-left: 0;
  // margin-left: 0;
  // span {
  font-size: 10px;

  // }
  ion-icon {
    font-size: 12px;
    margin-right: 6px;
  }
}

.light {
  border: 1px solid;
  border-color: var(--border-outline-color);
  border-radius: 10px;
  --background: transparent !important;
}

.title {
  p {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
}

.content {
  font-size: 16px !important;
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 400 !important;
}

.progress-container {
  margin-top: 10px;
  margin-bottom: 5px;

  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 5px;
  }

  ion-progress-bar {
    --progress-background: var(--bg-color-primary);
    --background: rgba(128, 128, 128, 0.3);
    height: 24px;
  }

  .progress-text {
    position: absolute;
    // top: 0;
    // right: 0;
    font-size: 13px;
    font-weight: 400;
    margin-top: -22px;
    color: white;
    font-weight: 500;
  }
}

.card-content {
  padding: 0.8rem;
}

.price {
  font-size: 18px;
}
</style>