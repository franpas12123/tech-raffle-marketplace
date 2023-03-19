<template>
  <Layout>
    <template v-slot:content>
      <h1>{{ title }}</h1>
      <slot name="content" class="container"></slot>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/DefaultLayout.vue';

const props = defineProps({
  title: String
})
</script>

<style scoped>
h1 {
  font-size: 25px;
  font-weight: 700;

  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.container {
  /* max-height: 60vh; */
  /* overflow: scroll; */
  margin-bottom: 2rem;
}
</style>