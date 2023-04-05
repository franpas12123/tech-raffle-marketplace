<!-- <template>
  <swiper>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonicSlides } from '@ionic/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/vue/css/ionic-swiper.css';

</script>

<style scoped></style> -->

<template>
  <div class="swiper-container">
    <swiper-container ref="swiperContainerRef" :spaceBetween="0" :slides-per-view="slidesPerView" :loop="true" :autoplay="{
      // delay: 2500,
      // disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">
      <swiper-slide>
        <VerticalProductLayout></VerticalProductLayout>
      </swiper-slide>
      <swiper-slide>
        <VerticalProductLayout :title="2"></VerticalProductLayout>
      </swiper-slide>
      <swiper-slide>
        <VerticalProductLayout></VerticalProductLayout>
      </swiper-slide>
    <swiper-slide>
      <VerticalProductLayout></VerticalProductLayout>
    </swiper-slide>
    <swiper-slide>
      <VerticalProductLayout></VerticalProductLayout>
    </swiper-slide>
    <swiper-slide>
      <VerticalProductLayout></VerticalProductLayout>
      </swiper-slide>
      <swiper-slide>
        <VerticalProductLayout></VerticalProductLayout>
      </swiper-slide>
      <swiper-slide>
        <VerticalProductLayout></VerticalProductLayout>
      </swiper-slide>
      <swiper-slide>
        <VerticalProductLayout></VerticalProductLayout>
      </swiper-slide>
      <swiper-slide>
        <VerticalProductLayout></VerticalProductLayout>
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
<script setup>
import { ref, onMounted, nextTick } from 'vue';
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

import VerticalProductLayout from '@/layouts/products/VerticalProductLayout.vue';


defineProps({
  slidesPerView: {
    type: Number,
    default: 4
  }
})

// const progressCircle = ref(null);
// const progressContent = ref(null);
// const onAutoplayTimeLeft = (s, time, progress) => {
//   progressCircle.value.style.setProperty('--progress', 1 - progress);
//   progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
// };
// const modules = [Autoplay, Pagination, Navigation]
const modules = [Pagination, Navigation]
// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//     VerticalProductLayout
//   },
//   setup() {
//     const progressCircle = ref(null);
//     const progressContent = ref(null);
//     const onAutoplayTimeLeft = (s, time, progress) => {
//       progressCircle.value.style.setProperty('--progress', 1 - progress);
//       progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
//     };
//     return {
//       onAutoplayTimeLeft,
//       progressCircle,
//       progressContent,
//       modules: [Autoplay, Pagination, Navigation],
//     };
//   },
// };

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

swiper-container {
  width: 90%;
  /* margin-left: 10px;
  margin-right: 10px; */
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