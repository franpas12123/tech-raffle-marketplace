<template>
  <DefaultLayout :centerContent="false" :paddingTop="30" :paddingBottom="30">
    <template v-slot:content>
      <h1 class="ion-text-center title">{{ title }}</h1>

      <form @submit.prevent="onSubmit">
        <ion-row v-for="(c, i) in config" :key="i" class="ion-margin-top">
          <ion-col size="12" size-lg="6">
            <ion-input :ref="c.name" v-model="c.vModel" :type="c?.showPass ? 'text' : 'password'" :label="c.placeholder"
              label-placement="floating" fill="outline"></ion-input>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center ion-margin-top">
          <ion-col size="6" size-lg="3">
            <ion-checkbox color="light" label-placement="end">Remember me</ion-checkbox>
          </ion-col>
          <ion-col size="6" size-lg="3" class="ion-text-end">
            <router-link to="forgot-password">
              <span class="url">Forgot password?</span>
            </router-link>
          </ion-col>
        </ion-row>

        <ion-row class="ion-margin-top">
          <ion-col size="12" size-lg="6">
            <ion-button class="login-button" color="light" expand="full">Login</ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg="6">
            <h3 class="text-in-line">
              <span class="ion-margin-horizontal">or login using</span>
            </h3>
          </ion-col>
        </ion-row>

        <ion-row class="social-signins-container ion-margin-top ion-justify-content-center">
          <ion-col size="1.7" size-md="0.8" class="">
            <ion-img @click="socialSigninClick('fb')" class="social-signins" src="/assets/icons/facebook-icon.svg"
              alt=""></ion-img>
          </ion-col>
          <ion-col size="1.7" size-md="0.8" class="">
            <ion-img @click="socialSigninClick('google')" class="social-signins" src="/assets/icons/google-icon.svg"
              alt=""></ion-img>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg="6" class="ion-text-center ion-margin-top">
            <p>Don't have an account? <router-link to="/signup"><b class="url">Register here</b></router-link></p>
          </ion-col>
        </ion-row>
      </form>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { IonRow, IonCol, IonInput, IonButton, IonCheckbox } from '@ionic/vue';
import { reactive } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Welcome back!'
  }
})

const config = reactive([
  {
    name: 'email',
    vModel: '',
    placeholder: 'Email',
  },
  {
    name: 'password',
    showPass: false,
    vModel: '',
    placeholder: 'Password',
  },
])

// handle email signin
const onSubmit = () => {
  console.log('onSubmit')
}

// handle social signin
const socialSigninClick = (type: string) => {
  console.log('socialSigninClick', type)
}

</script>

<style lang="scss" scoped>
.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
}

ion-checkbox {
  --size: 32px;
  --checkbox-background: transparent;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #ababaa;
}

ion-row {
  justify-content: center !important;
}

.text-in-line {
  overflow: hidden;
  text-align: center;

  &::before,
  &::after {
    background-color: grey;
    content: "";
    display: inline-block;
    height: 1px;
    // position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &::before {
    right: var(--ion-margin-top);
    margin-left: -50%;
  }

  &::after {
    left: var(--ion-margin-top);
    margin-right: -50%;
  }

  span {
    font-size: 18px;
    font-weight: 400;
  }
}

.social-signins {
  max-width: 36px;
  max-height: 36px;

  margin-left: auto;
  margin-right: auto;

  cursor: pointer;
}

.url {
  color: black;
  cursor: pointer;
}

ion-button {
  --border-radius: 30px !important;
}
</style>