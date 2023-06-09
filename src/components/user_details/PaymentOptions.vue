<template>
  <h1 class="ion-margin-bottom">{{ title }}</h1>
  <slot name="content" class="container">
    <ion-card v-for="(paymentType, index) in config" :key="index">
      <ion-row class="ion-align-items-center">
        <ion-col size-xs="4" size-sm="2" class="img-container">
          <img class="img ion-margin-start" alt="product" :src="paymentType.icon" />
        </ion-col>
        <ion-col class="card-content">
          <ion-card-header>
            <ion-card-title class="title">
              <slot name="title">
                <!-- <p :class="{ 'ion-text-center': alignment === 'center', 'ion-text-left': alignment === 'left' }">
                  {{ product.name }}
                </p> -->
              </slot>
            </ion-card-title>
            <!-- <ion-card-subtitle>
        <slot name="subtitle" class="subtitle">
          subtitle
        </slot>
      </ion-card-subtitle> -->
          </ion-card-header>

          <ion-card-content class="">
            <ion-row>
              <ion-col>
                <p class="content">Buy a Rosso set and make it <b>yours</b>!</p>
              </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-col>
        <ion-col size="12" size-sm="5" class="img-container">
          <ion-row>
            <ion-col>
              Set Default
            </ion-col>
            <ion-col>
              Delete
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-card>
  </slot>
</template>

<script setup lang="ts">
import { localAssetUrl } from '@/utils/helpers/paymentMethods';
import { IonRow, IonCol, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { send, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: 'Card / Debit Card'
  }
})

const route = useRoute()

// const onPasswordRevealClick = (index: number) => {
//   config[index].showPass = !config[index].showPass
//   console.log('type', config[index].showPass)
// }

// change password logic
interface ChangePassword {
  currentPass: object,
  newPass: object,
  confirmPass: object,
}

const assetFolder = './assets/test'

const getEyeIcon = (type: boolean) => type ? eyeOutline : eyeOffOutline
// config
const config = reactive([
  {
    name: 'default',
    cardNumber: '',
    default: true,
    type: 'mastercard',
    icon: localAssetUrl('mastercard')
  },
  {
    name: 'new',
    cardNumber: '',
    default: false,
    type: 'visa',
    icon: localAssetUrl('visa')
  }
])

const getConfig = (name: string) => config.find(c => c.name === name)

const onClick = () => console.log('password changed!', getConfig('new')?.vModel)

// const buttonDisabled = computed(() => {
//   console.log('current', getConfig('current')?.vModel, '\nnew', getConfig('new')?.vModel, '\nconfirm', getConfig('confirm')?.vModel, '\n', getConfig('new')?.vModel === getConfig('confirm')?.vModel)
//   return !(getConfig('current')?.vModel && getConfig('new')?.vModel && getConfig('new')?.vModel === getConfig('confirm')?.vModel)
// })
</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
  font-weight: 700;

  /* margin-top: 3rem;
  margin-bottom: 1.5rem; */
}

ion-card {
  background-color: white;
  color: black;
  border-radius: var(--border-radius-reduced);
  box-shadow: var(--box-shadow);
}

.container {
  /* max-height: 60vh; */
  /* overflow: scroll; */
  margin-bottom: 2rem;
}

.img-container {
  .img {
    max-width: 80px;
  }
}
</style>