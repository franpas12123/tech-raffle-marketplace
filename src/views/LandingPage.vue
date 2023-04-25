<template>
  <Layout>
    <template v-slot:content>
      <!-- Top Banner -->
      <TopBanner class="ion-margin-top"></TopBanner>

      <LandingPageSections :title="swiperContent.title" v-for="(swiperContent, index) in swiperContents"
        :key="`swiper-contents-${index}`" :enable-filters="swiperContent?.layout === 'horizontal'" :filters="filters">
        <template v-slot:content>
          <div v-if="swiperContent?.layout === 'horizontal'">
            <HorizontalProductLayout class="horizontal-product-layout" v-for="(product, index) in products" :key="index"
              :product="product" />
          </div>
          <SwiperSlide v-else :products="products" :layout="swiperContent.title"></SwiperSlide>
        </template>
      </LandingPageSections>
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
import LandingPageSections from '@/layouts/LandingPageSections.vue';
import HorizontalProductLayout from '@/layouts/products/HorizontalProductLayout.vue';



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

const productPrizesImgSrc = './assets/prizes/'

// products
const products: Array<Product> = [
  {
    name: 'Win ₱10,000 Cash',
    productImgSrc: `${productPrizesImgSrc}/money.jpg`,
    description: '',
    price: 50,
    stock: 1,
    category: ''
  },
  {
    name: 'Win ₱50,000 Cash',
    productImgSrc: `${productPrizesImgSrc}/money.jpg`,
    description: '',
    price: 150,
    stock: 1,
    category: null
  },
  {
    name: 'Win ₱20,000 Cash',
    productImgSrc: `${productPrizesImgSrc}/money.jpg`,
    description: '',
    price: 100,
    stock: 1,
    category: null
  },
  {
    name: 'WIN: iPhone 14',
    productImgSrc: `${productPrizesImgSrc}/iphone.jpg`,
    description: '',
    price: 125,
    stock: 1,
    category: null
  },
  {
    name: 'WIN: iPhone 14 Pro',
    productImgSrc: `${productPrizesImgSrc}/iphone.jpg`,
    description: '',
    price: 150,
    stock: 1,
    category: null
  },
  {
    name: 'WIN: MacBook Pro',
    productImgSrc: `${productPrizesImgSrc}/laptop.jpg`,
    description: '',
    price: 250,
    stock: 1,
    category: null
  },
  {
    name: 'WIN: Motor',
    productImgSrc: `${productPrizesImgSrc}/motor.jpg`,
    description: '',
    price: 250,
    stock: 1,
    category: null
  },
  {
    name: 'WIN: Bugatti',
    productImgSrc: `${productPrizesImgSrc}/bugatti.jpg`,
    description: '',
    price: 250,
    stock: 1,
    category: null
  },
]

products.forEach((product) => {
  product.description = faker.lorem.words(5);
})

const filters = [
  'All',
  'Tech',
  'Cars',
  'Others'
]

</script>

<style lang="scss" scoped>
.sections {
  min-height: 200px;
  margin-top: 60px;

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

.horizontal-product-layout {
  margin-bottom: 30px;
}
</style>