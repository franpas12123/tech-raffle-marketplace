<template>
  <ion-app>
    <ion-content color="dark">
      <HeaderContainer />
      <slot name="content">Fallback</slot>
      <FooterContainer />
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonContent, IonApp } from '@ionic/vue';
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import FooterContainer from '@/components/footer/FooterContainer.vue'
</script>