<template>
  <ion-row>
    <ion-col>
      <div class="img-container">
        <ion-img class="banner" :src="`${assetFolderTest}/idealz-landing-banner-top-wide.jpeg`" alt=""></ion-img>
        <ion-row class="banner-text-container ion-align-items-center">
          <ion-col>
            <h2 class="banner-text-title"><i>WIN</i></h2>
            <h3 class="banner-text-subtitle">Toyota Fortuner 2023</h3>
            <p class="banner-text-info">Buy a out <b>Toro Hoodie</b> and make it yours!</p>
            <ion-button class="ion-margin-top ion-text-capitalize" :href="topBannerURL" @click="onTopBannerClick()"
              fill="clear" text-capitalize="false">
              <b>See details</b>
            </ion-button>
          </ion-col>
        </ion-row>
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <a :href="topBannerMiniLeftURL">
        <ion-img class="banner" :src="`${assetFolderTest}/idealz-landing-banner-top-mini.png`" alt=""></ion-img>
      </a>
    </ion-col>
    <ion-col>
      <a :href="topBannerMiniRightURL">
        <ion-img class="banner" :src="`${assetFolderTest}/idealz-landing-banner-top-mini-right.png`" alt=""></ion-img>
      </a>
    </ion-col>
  </ion-row>
</template>

<script setup lang="ts">
import { IonImg, IonRow, IonCol, IonButton } from '@ionic/vue';
import { useRoute } from 'vue-router'
const assetFolderTest = './assets/test'

const route = useRoute()
const onTopBannerClick = () => {
  route
}

const topBannerURL = 'https://toyota.com.ph/fortuner'
const topBannerMiniLeftURL = 'https://www.mbusa.com/en/vehicles/model/g-class/suv/g63w4'
const topBannerMiniRightURL = '#'
</script>

<style lang="scss" scoped>
$bannerColor: #992d2e;

ion-img::part(image) {
  border-radius: 20px;
}

.banner-text-container {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  color: white;

  .banner-text-title {
    margin: 0;
    padding: 0;
    color: $bannerColor;
    font-size: 40px;
    line-height: 35px;

    i {
      font-weight: 900;
    }
  }

  .banner-text-subtitle {
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-weight: 800;
    line-height: 35px;
  }

  .banner-text-info {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 15px;
  }

  ion-button {
    color: white;
    // width: 100px;
    font-size: 10px;
    font-weight: 600;

    --background: #992d2e;
    --border-radius: 10px;

    b {
      padding: 0 20px;
    }
  }
}
</style>