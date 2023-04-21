<template>
  <div :class="layout !== 'horizontal' ? 'swiper-container-smaller' : 'swiper-container'">
    <swiper-container ref="swiperContainerRef" :slides-per-view="computedSlidesPerView" :loop="true" :modules="modules"
      class="mySwiper">
      <swiper-slide v-for="(product, index) in products" :key="index">
        <VLayout v-if="verticalLayout" :product="product" :layoutType="props.layout"></VLayout>
        <HLayout v-else :product="product"></HLayout>
      </swiper-slide>
    </swiper-container>

    <!-- <div class="custom-control-container" ref="customControlContainer"
        :style="{ marginTop: `-${(swiperContainerHeight + customControlContainerHeight) / 2}px` }">
        <ion-button class="prev">
          left
        </ion-button>
        <ion-button class="next">
          right
        </ion-button>
      </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@ionic/vue/css/ionic-swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation, } from 'swiper';

import { IonButton } from '@ionic/vue'

import { useElementSize } from '@vueuse/core'

import VLayout from '@/layouts/products/VerticalProductLayout.vue';
import HLayout from '@/layouts/products/HorizontalProductLayout.vue';

const props = defineProps({
  slidesPerView: {
    type: Number,
    default: 5
  },
  layout: {
    type: String,
    default: ''
  },
  products: {
    type: Object,
    required: true
  }
})

const verticalLayout = props.layout !== 'explore campaigns'

const computedSlidesPerView = computed(() => {
  if (props.slidesPerView > props.products.length) {
    return props.products.length
  } else {
    return props.slidesPerView
  }
})

const modules = [Pagination, Navigation]

const swiperContainerRef = ref(null)
const swiperContainerHeight = useElementSize(swiperContainerRef).height
const customControlContainer = ref(null)
const customControlContainerHeight = useElementSize(customControlContainer).height

onMounted(() => {

  // add custom swiper controls
  // const swiperContainer = document.querySelector('.swiper-container');
  const swiperEl = document.querySelector('swiper-container');

  const prevBtn = document.querySelector('.prev');
  console.log('swiper-el', swiperEl, prevBtn)

  // prevBtn.addEventListener('click', () => {
  //   console.log('clicked')
  //   swiperEl.swiper.slideNext();
  // });

  // console.log('container', swiperContainer.clientHeight)

  // get height of swiper-container

  // console.log('swiper-el', swiperContainer.clientHeight)

})
nextTick(() => {
  // console.log('height', swiperContainerHeight.value)
})

// const vLayoutParams = 
</script>

<style lang="scss" >
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* .autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
} */

/* .autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
} */

.swiper-container {
  width: 95%;
  /* margin-left: 10px;
  margin-right: 10px; */
}

.swiper-container-smaller {
  width: 85%;
  /* margin-left: 10px;
  margin-right: 10px; */
}

.swiper-container,
.swiper-container-smaller {
  margin: auto;
}

.swiper-slide {
  background: transparent
}

.swiper-button-prev,
.swiper-button-next {
  color: var(--swiper-arrow-color);
  // z-index: 100;
}

.swiper-button-prev {
  /* padding-right: 20px; */
  /* left: -20px;

  margin-top: 0px;
  position: absolute;
  top: 50%;
  right: -40px;
  width: 45px;
  height: 45px;
  transform: translateY(-50%); */
}

.swiper-button-next {
  /* padding-left: 20px; */
  right: -20px;
}

// .swiper-slide-active {
//   margin-left: 40px;
// }

// .swiper-slide:nth-child(4) {
//   margin-right: 40px !important;
// }


.custom-control-container {

  // margin-top: 0px;
  position: absolute;
  // top: 200;
  // top: 50%;
  // right: -40px;
  // width: 45px;
  // height: 45px;
  // transform: translateY(-50%);
  z-index: 100;

  .next {
    position: absolute;
    margin-left: auto;
  }
}
</style>