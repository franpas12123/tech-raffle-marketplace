<template>
  <ion-header>
    <ion-toolbar>
      <ion-grid fixed>
        <ion-row class="ion-align-items-center">
          <ion-col size-lg="2" class="ion-justify-content-start">
            <ion-row>
              <ion-col>
                <ion-title>RAPOL</ion-title>
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col class="ion-hide-lg-down">
            <ion-row class="ion-justify-content-center ion-align-items-center">
              <ion-col>
                Prizes
              </ion-col>
              <ion-col>
                Products
              </ion-col>
              <ion-col>
                Winners
              </ion-col>
              <ion-col>
                FAQ
              </ion-col>
              <ion-col>
                Charity
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col size="1"></ion-col>
          <ion-col size="2">
            <ion-button color="light" aria-label="Login/Signup">
              login / signup
              <ion-icon :icon="personOutline" aria-hidden="true"></ion-icon>
            </ion-button>
          </ion-col>
          <ion-col size="1">
            <ion-button color="light" aria-label="Cart">
              cart({{ cartItemsCount }})
              <ion-icon :icon="cart" aria-hidden="true"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonIcon, IonButton } from '@ionic/vue';
import { cart, personOutline } from 'ionicons/icons';
import { ref } from 'vue';

const cartItemsCount = ref(0)
</script>

<style lang="scss" scoped>
* {
  font-weight: bold;
  font-size: 12px;
}

ion-button {
  --background: #23242f;
  --color: #fff;

  font-size: 9px;

  ion-icon {
    margin-left: 4px;
    font-size: 16px;
  }
}

ion-title {
  padding: 0;
}
</style>