<template>
  <ion-row class="ion-margin-top ion-margin-left">
    <ion-button :color="color" type="submit" :disabled="disabled" @click="$emit('clicked')">
      <ion-icon v-if="icon" slot="start" :icon="icon"></ion-icon>
      {{ text }}
    </ion-button>
  </ion-row>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    default: 'light'
  },
  text: {
    type: String,
    required: true,
  }
})
</script>

<style scoped></style>