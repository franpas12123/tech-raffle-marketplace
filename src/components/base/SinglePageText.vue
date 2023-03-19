<template>
  <SinglePageBase :title="title">
    <template v-slot:content>
      <div class="text-container">
        <div v-for="t in text" :key="Math.random() * 999 + t">
          <p v-html="t"></p>
        </div>
      </div>
    </template>
  </SinglePageBase>
</template>

<script setup lang="ts">
import SinglePageBase from './SinglePageBase.vue';
import { faker } from '@faker-js/faker';

const props = defineProps({
  title: String,
  text: {
    type: Array<string>,
    default: [faker.lorem.paragraphs(15, '<br><br>\n')]
  }
})
</script>

<style scoped>
/* Todo: style scroll handle to match mockup */
.text-container {
  max-height: 60vh;
  overflow: scroll;
  margin-bottom: 2rem;
}
</style>