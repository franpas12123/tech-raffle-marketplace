<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="dark" class="logo" @click="() => router.push('/')">
          <ion-img class="banner" :src="`./assets/icons/rapol-logo.svg`" alt=""></ion-img>
        </ion-button>
      </ion-buttons>
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
      <ion-buttons slot="end">
        <!-- @Todo: remove href later -->
        <ion-button aria-label="Login/Signup" @click="() => router.push('/login')" href="/login">
          login / signup
          <ion-icon :src="`${assets}/user-transparent.svg`" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button aria-label="Cart">
          cart({{ cartItemsCount }})
          <ion-icon :src="`${assets}/cart-transparent.svg`" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonIcon, IonButton, IonButtons } from '@ionic/vue';
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
  width: 100px;

  ion-button {
    border-radius: 0 !important;
  }

  ion-img {
    padding: 10px;
  }
}

ion-title {
  padding: 0;
}
</style>