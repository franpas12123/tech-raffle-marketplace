<template>
  <ion-button :type="type === 'submit' ? 'submit' : 'button'" :class="{ wider }" :expand="expand ? 'full' : 'block'"
    :color="color" :disabled="disabled" @click="$emit('clicked')">
    <ion-icon v-if="icon" slot="start" :icon="icon"></ion-icon>
    {{ text }}
  </ion-button>
</template>

<script setup lang="ts">
import { IonIcon, IonButton } from '@ionic/vue';
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
  },
  expand: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.wider {
  width: 150px;
}

ion-button {
  --border-radius: 10px
}
</style>