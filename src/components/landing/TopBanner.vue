<template>
  <ion-row class="first-banner">
    <ion-col>
      <div class="img-container">
        <ion-img class="banner-top" :src="`${assetFolderTest}/main-image.jpg`" alt=""></ion-img>
        <ion-row class="banner-text-container ion-align-items-center">
          <ion-col offset="5" offset-sm="6">
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
  <ion-row class="second-banner">
    <ion-col size="12" size-lg="6">
      <ion-row class="banner-text-container banner-left ion-padding ion-align-items-center">
        <ion-col size="6" size-sm="7">
          <h3 class="banner-text-subtitle">Get <b>₱50 free credits</b></h3>
          <p class="banner-text-info">Create an account for the first time to receive ₱50 credits for free</p>
          <ion-button class="ion-text-capitalize" :href="topBannerURL" @click="onTopBannerClick()" fill="clear"
            text-capitalize="false">
            <b>Sign up</b>
          </ion-button>
        </ion-col>
      </ion-row>
      <a :href="topBannerMiniLeftURL">
        <ion-img class="banner" :src="`${assetFolderTest}/image-left.jpg`" alt=""></ion-img>
      </a>
    </ion-col>
    <ion-col>
      <a :href="topBannerMiniRightURL">
        <ion-img class="banner" :src="`${assetFolderTest}/image-right.jpg`" alt=""></ion-img>
      </a>
      <ion-row class="banner-text-container banner-right ion-padding ion-align-items-center">
        <ion-col size="6" size-sm="7">
          <h3 class="banner-text-subtitle"><b>Join us on mobile</b></h3>
          <p class="banner-text-info">Download our app to keep up to date with the latest news.</p>
          <!-- <ion-button class="ion-text-capitalize" :href="topBannerURL" @click="onTopBannerClick()" fill="clear"
            text-capitalize="false">
            <b>Sign up</b>
          </ion-button> -->
          <ion-row class="ion-justify-content-start mobile-store-container">
            <ion-col size="12" size-xs="6" size-sm="5" size-md="5" size-lg="4">
              <ion-img class="store-icons" :src="`${assetFolder}/test/${storeImgSrc[0]}`" alt=""></ion-img>
            </ion-col>
            <ion-col size="12" size-xs="6" size-sm="5" size-md="5" size-lg="4">
              <ion-img class="store-icons" :src="`${assetFolder}/test/${storeImgSrc[1]}`" alt=""></ion-img>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
</template>

<script setup lang="ts">
import { IonImg, IonRow, IonCol, IonButton } from '@ionic/vue';
import { useRoute } from 'vue-router'
const assetFolderTest = './assets/landingBanners'

const route = useRoute()
const onTopBannerClick = () => {
  route
}

const assetFolder = './assets'
const storeImgSrc: string[] = [
  'download on the app store.png',
  'download on the google store.png'
]
const topBannerURL = 'https://toyota.com.ph/fortuner'
const topBannerMiniLeftURL = 'https://www.mbusa.com/en/vehicles/model/g-class/suv/g63w4'
const topBannerMiniRightURL = '#'
</script>

<style lang="scss" scoped>
$subBannerPadding: 32px;
$bannerColor: #992d2e;

ion-img::part(image) {
  border-radius: 20px;
}

.second-banner {
  margin-top: 10px;
}

// .second-banner {
//   margin-top: 25px;
// }

.banner-top {
  // width: 100%;
  height: 400px;
  object-fit: cover;
  margin-top: 25px;
}

.banner-text-container {
  position: absolute;
  // width: 60%;
  height: 100%;
  width: 100%;
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
    font-size: 16px;
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

.banner-left {
  padding: $subBannerPadding;

  // left: 0 !important;
  // right: auto;
  .banner-text-subtitle {
    font-size: 1.3rem;

    b {
      font-size: 1.5rem;
      color: var(--button-bg-color-primary);
      font-weight: 800;
    }
  }

  .banner-text-info {
    line-height: 18px;
  }

  ion-button {
    --background: var(--button-bg-color-primary) !important;
    margin-top: 8px;

    b {
      font-size: 0.85rem;
      font-weight: 800;
    }
  }
}

.banner-right {
  padding: $subBannerPadding;

  // left: 0 !important;
  // right: auto;
  .banner-text-subtitle {
    font-size: 1.3rem;

    b {
      font-size: 1.5rem;
      color: var(--bg-color-primary);
      font-weight: 800;
    }
  }

  .banner-text-info {
    line-height: 18px;
    color: var(--bg-color-primary);
  }

  ion-button {
    --background: var(--button-bg-color-primary) !important;
    margin-top: 8px;

    b {
      font-size: 0.85rem;
      font-weight: 800;
    }
  }

  .mobile-store-container {
    ion-col {
      margin-top: 0.5rem;
      margin-right: 8px;
      padding: 0;

      ion-img::part(image) {
        border-radius: 8px;
      }
    }
  }
}
</style>