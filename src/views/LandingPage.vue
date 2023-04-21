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
    title: 'Win ₱10,000 Cash',
    productImgSrc: `${productPrizesImgSrc}/money.jpg`,
    details: '',
    price: 50
  },
  {
    title: 'Win ₱50,000 Cash',
    productImgSrc: `${productPrizesImgSrc}/money.jpg`,
    details: '',
    price: 150
  },
  {
    title: 'Win ₱20,000 Cash',
    productImgSrc: `${productPrizesImgSrc}/money.jpg`,
    details: '',
    price: 100
  },
  {
    title: 'WIN: iPhone 14',
    productImgSrc: `${productPrizesImgSrc}/iphone.jpg`,
    details: '',
    price: 125
  },
  {
    title: 'WIN: iPhone 14 Pro',
    productImgSrc: `${productPrizesImgSrc}/iphone.jpg`,
    details: '',
    price: 150
  },
  {
    title: 'WIN: MacBook Pro',
    productImgSrc: `${productPrizesImgSrc}/laptop.jpg`,
    details: '',
    price: 250
  },
  {
    title: 'WIN: Motor',
    productImgSrc: `${productPrizesImgSrc}/motor.jpg`,
    details: '',
    price: 250
  },
  {
    title: 'WIN: Bugatti',
    productImgSrc: `${productPrizesImgSrc}/bugatti.jpg`,
    details: '',
    price: 250
  },
]

products.forEach((product) => {
  product.details = faker.lorem.words(5);
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