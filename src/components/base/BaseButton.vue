<template>
  <ion-button :type="type === 'submit' ? 'submit' : 'button'" :class="{ wider }" :expand="expand ? 'full' : 'block'"
    :color="color" :disabled="disabled" @click="$emit('clicked')">
    <ion-icon v-if="icon && useIonicIcon" slot="start" :icon="icon"></ion-icon>
    <ion-icon v-if="icon" slot="start" :src="`./assets/icons/${icon}`" aria-hidden="true"></ion-icon>
    <span :class="{ 'smaller': smallerText }">{{ text }}</span>
    <!-- {{ text }} -->
  </ion-button>
</template>

<script setup lang="ts">
import { IonIcon, IonButton } from '@ionic/vue';
defineProps({
  icon: {
    type: String,
    default: null
  },
  useIonicIcon: {
    type: Boolean,
    default: false
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
  },
  smallerText: {
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
  --border-radius: 10px;
  text-transform: none;
}

.smaller {
  font-size: 11px;
  font-weight: 400;
}
</style>