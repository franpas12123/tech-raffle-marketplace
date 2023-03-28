<template>
  <ion-row class="ion-margin-top ion-margin-left">
    <BaseButton :type="type" :text="text" :disabled="disabled" :color="color" :icon="icon" :wider="wider"
      @clicked="$emit('clicked')">
    </BaseButton>
  </ion-row>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
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
  },
  wider: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.wider {
  width: 150px;
}

ion-button {
  --border-radius: 10px;
}
</style>