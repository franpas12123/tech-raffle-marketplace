<template>
  <ion-header>
    <ion-toolbar>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="1.5">
            <ion-row>
              <ion-col>
                <ion-title>RAPOL</ion-title>
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col>
            <ion-row class="ion-justify-content-start ion-align-items-center">
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
          <ion-col></ion-col>
          <ion-col size="1">
            login/signup
          </ion-col>
          <ion-col size="1">
            cart(0)
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';
</script>