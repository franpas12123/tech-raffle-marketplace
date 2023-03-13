<template>
  <ion-app>
    <HeaderContainer />

    <ion-content class="ion-padding">
      <slot name="content">Fallback</slot>
    </ion-content>

    <FooterContainer />
  </ion-app>
</template>

<script setup lang="ts">
import { IonContent, IonApp } from '@ionic/vue';
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import FooterContainer from '@/components/footer/FooterContainer.vue'
</script>