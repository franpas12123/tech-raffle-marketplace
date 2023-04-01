<template>
  <ion-app ref="app">
    <ion-content color="dark">
      <HeaderContainer ref="header" />
      <ion-grid :style="{
        minHeight: appHeight - headerHeight - footerHeight + 'px',
        paddingTop: paddingTop + 'px',
        paddingBottom: paddingBottom + 'px'
      }" :class="{ 'ion-text-center': centerContent }" fixed>
        <slot name="content">Fallback</slot>
      </ion-grid>
      <FooterContainer ref="footer" />
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonContent, IonApp, IonGrid } from '@ionic/vue';
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import FooterContainer from '@/components/footer/FooterContainer.vue'
import { onMounted, reactive, ref } from 'vue';
import { useElementSize } from '@vueuse/core'

const app = ref(null)
const header = ref(null)
const footer = ref(null)
const appHeight = useElementSize(app).height
const headerHeight = useElementSize(header).height
const footerHeight = useElementSize(footer).height

defineProps({
  paddingTop: {
    type: Number,
    default: 0
  },
  paddingBottom: {
    type: Number,
    default: 0
  },
  centerContent: {
    type: Boolean,
    default: false
  }
})

// compute dynamic grid min height
// const gridHeight = appHeight.value - headerHeight.value - footerHeight.value
// const gridHeightStyle = reactive({})
// onMounted(() => {
//   const gridHeightStyle = reactive({
//     minHeight: appHeight.value - headerHeight.value - footerHeight.value + 'px'
//   })
// })
</script>

<style lang="scss" scoped></style>