<template>
  <ion-header>
    <ion-toolbar>
      <ion-grid fixed>
        <ion-row class="ion-align-items-center">
          <ion-col class="logo" size="4" size-md="2.5" size-lg="2">
            <ion-button @click="() => router.push('/')" fill="clear">
              <ion-img class="banner" :src="`./assets/icons/rapol-logo.svg`" alt=""></ion-img>
            </ion-button>
          </ion-col>
          <ion-col class="ion-hide-lg-down">
            <ion-buttons class="nav-links">
              <ion-button @click="() => router.push('/prizes')">
                Prizes
              </ion-button>
              <ion-button @click="() => router.push('/products')">
                Products
              </ion-button>
              <ion-button @click="() => router.push('/winners')">
                Winners
              </ion-button>
              <ion-button @click="() => router.push('/faq')">
                FAQ
              </ion-button>
              <ion-button @click="() => router.push('/charity')">
                Charity
              </ion-button>
            </ion-buttons>
          </ion-col>
          <ion-col>
            <ion-row class="ion-justify-content-end">
              <ion-buttons slot="">
                <!-- @Todo: remove href later -->
                <ion-button aria-label="Login/Signup" @click="() => router.push('/login')" href="/login">
                  login / signup
                  <ion-icon :src="`${assets}/user-transparent.svg`" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button aria-label="Cart">
                  cart({{ cartItemsCount }})
                  <ion-icon :src="`${assets}/cart-transparent.svg`" aria-hidden="true"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-row>

          </ion-col>
          <!-- <ion-col>
            <ion-buttons slot="">
              <ion-button aria-label="Cart">
                cart({{ cartItemsCount }})
                <ion-icon :src="`${assets}/cart-transparent.svg`" aria-hidden="true"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-col> -->
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonIcon, IonButton, IonButtons, IonGrid } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const assets = './assets/icons'

const cartItemsCount = ref(0)
</script>

<style lang="scss" scoped>
* {
  font-weight: bold;
  font-size: 12px;
}

ion-button {
  --padding-start: 12px;
  --padding-end: 12px;
  --background: #23242f !important;
  --border-radius: 30px !important;
  --color: #fff;

  font-size: 9px;

  ion-icon {
    margin-left: 4px;
    font-size: 16px;
  }
}

.nav-links {
  ion-button {
    --background: transparent !important;
  }
}

.logo {
  min-width: 100px;
  width: 100px;

  ion-button {
    --background: transparent !important;
  }

  ion-img {
    width: 100px;
    padding: 10px;
  }
}

ion-title {
  padding: 0;
}
</style>