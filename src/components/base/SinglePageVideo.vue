<template>
  <SinglePageBase ref="singlePageBase" :title="title">
    <template v-slot:content>
      <iframe :width="width" :height="height" max :src="src" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </template>
  </SinglePageBase>
</template>

<script setup lang="ts">
import SinglePageBase from './SinglePageBase.vue';
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';

const props = defineProps({
  title: String,
  src: {
    type: String,
    default: 'https://www.youtube.com/embed/MYPVQccHhAQ'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '500'
  }
})

const singlePageBase = ref(null)
const singlePageBaseHeight = useElementSize(singlePageBase).height
</script>

<style lang="scss">
iframe {
  margin-bottom: 2rem;
}
</style>