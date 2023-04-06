<template>
  <Layout>
    <template v-slot:content>
      <!-- Top Banner -->
      <TopBanner class="ion-margin-top"></TopBanner>

      <div class="sections" v-for="(swiperContent, index) in swiperContents" :key="`swiper-contents-${index}`">
        <h1 class="ion-text-center ion-text-uppercase">
          <b>{{ swiperContent.title }}</b>
        </h1>
        <SwiperSlide :products="products" :layout="swiperContent.title"></SwiperSlide>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { IonImg } from '@ionic/vue';

import { Product } from '@/types/product';

import { faker } from '@faker-js/faker';

import Layout from '@/layouts/DefaultLayout.vue';
import TopBanner from '@/components/landing/TopBanner.vue';
import SwiperSlide from '@/components/landing/SwiperSlide.vue';



const swiperContents = [
  {
    title: 'closing soon',
  },
  {
    title: 'explore campaigns',
    layout: 'horizontal'
  },
  {
    title: 'our products',
  },
  {
    title: 'winners'
  }
]


// products
const products: Array<Product> = [
  {
    title: 'Win ₱10,000',
    productImgSrc: './assets/test/money.png',
    details: '',
    price: 50
  },
  {
    title: 'Win ₱50,000',
    productImgSrc: './assets/test/money.png',
    details: '',
    price: 150
  },
  {
    title: 'Win ₱20,000',
    productImgSrc: './assets/test/money.png',
    details: '',
    price: 100
  },
  {
    title: 'WIN: iPhone 14 Pro',
    productImgSrc: './assets/test/iphone-14-pro.png',
    details: '',
    price: 150
  },
  {
    title: 'WIN: MacBook Air',
    productImgSrc: './assets/test/mac-book-pro.jpeg',
    details: '',
    price: 250
  },
  {
    title: 'WIN: iPhone 14 Pro',
    productImgSrc: './assets/test/iphone-14-pro.png',
    details: '',
    price: 150
  },
  {
    title: 'WIN: MacBook Air',
    productImgSrc: './assets/test/mac-book-pro.jpeg',
    details: '',
    price: 250
  },
  {
    title: 'WIN: MacBook Pro',
    productImgSrc: './assets/test/mac-book-pro.jpeg',
    details: '',
    price: 250
  },
]

products.forEach((product) => {
  product.details = faker.lorem.words(5);
})

</script>

<style lang="scss" scoped>
.sections {
  min-height: 200px;
  margin-top: 48px;

  h1 {
    margin-bottom: 16px;

    b {
      font-weight: 700;
    }
  }

  &:last-child {
    margin-bottom: 48px;
  }
}
</style>