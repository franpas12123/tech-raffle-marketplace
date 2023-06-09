<template>
  <h1 class="ion-margin-bottom">{{ title }}</h1>
  <slot name="content" class="container">
    <form @submit.prevent="onClick">
      <ion-row v-for="(c, i) in config" :key="i" class="container">
        <ion-col size="12" size-lg="6">
          <ion-input :ref="c.name" v-model="c.vModel" :type="c.showPass ? 'text' : 'password'" :label="c.placeholder"
            label-placement="floating" fill="outline"></ion-input>
        </ion-col>
      </ion-row>
      <ion-row ref="row" class="ion-margin-top ion-margin-left">
        <ion-button color="light" type="submit" :disabled="buttonDisabled">
          <ion-icon slot="start" :icon="send"></ion-icon>
          Send
        </ion-button>
      </ion-row>
    </form>
  </slot>
</template>

<script setup lang="ts">
import { IonRow, IonCol, IonInput, IonButton, IonIcon } from '@ionic/vue';
import { send, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { computed, reactive } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Change Password'
  }
})

const onPasswordRevealClick = (index: number) => {
  config[index].showPass = !config[index].showPass
  console.log('type', config[index].showPass)
}

// change password logic
interface ChangePassword {
  currentPass: object,
  newPass: object,
  confirmPass: object,
}

const getEyeIcon = (type: boolean) => type ? eyeOutline : eyeOffOutline
// config
const config = reactive([
  {
    name: 'current',
    showPass: false,
    vModel: '',
    placeholder: 'Current password',
  },
  {
    name: 'new',
    showPass: false,
    vModel: '',
    placeholder: 'New password',
  },
  {
    name: 'confirm',
    showPass: false,
    vModel: '',
    placeholder: 'Confirm password',
  }
])

const getConfig = (name: string) => config.find(c => c.name === name)

const onClick = () => console.log('password changed!', getConfig('new')?.vModel)

const buttonDisabled = computed(() => {
  console.log('current', getConfig('current')?.vModel, '\nnew', getConfig('new')?.vModel, '\nconfirm', getConfig('confirm')?.vModel, '\n', getConfig('new')?.vModel === getConfig('confirm')?.vModel)
  return !(getConfig('current')?.vModel && getConfig('new')?.vModel && getConfig('new')?.vModel === getConfig('confirm')?.vModel)
})
</script>

<style scoped>
h1 {
  font-size: 25px;
  font-weight: 700;

  /* margin-top: 3rem;
  margin-bottom: 1.5rem; */
}

.container {
  /* max-height: 60vh; */
  /* overflow: scroll; */
  margin-bottom: 1rem;
}
</style>