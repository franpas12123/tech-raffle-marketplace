<template>
  <DefaultLayout :centerContent="false" :paddingTop="30" :paddingBottom="30">
    <template v-slot:content>
      <h1 class="ion-text-center title">{{ title }}</h1>
      <form @submit.prevent="onClick">
        <ion-row v-for="(c, i) in config" :key="i" class="ion-margin-top">
          <ion-col v-if="c.name === 'number'" size="3" size-lg="2">
            <ion-input :ref="c.name" :readonly="true" label="Country code" label-placement="floating" fill="outline"
              value="+63"></ion-input>
          </ion-col>
          <ion-col :size="c.name === 'number' ? 9 : 12" :size-lg="c.name === 'number' ? 4 : 6">
            <ion-input :ref="c.name" v-model="c.vModel"
              :type="c.type === 'password' && !c.showPass ? 'password' : c.type ? c.type : 'text'" :label="c.placeholder"
              :required="true" label-placement="floating" fill="outline"></ion-input>
          </ion-col>
        </ion-row>

        <ion-row class="checkbox-container">
          <ion-col size="12" size-lg="6">
            <ion-checkbox label-placement="end">I agree with the <b>User Agreement</b> and <b>Privacy
                Policy</b></ion-checkbox>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg="6">
            <ion-button type="submit" class="login-button" color="light" expand="block">Next</ion-button>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-lg="6" class="ion-text-center ion-margin-top">
            <p>Already have an acount? <router-link to="/login"><b class="url">Sign in here</b></router-link></p>
          </ion-col>
        </ion-row>
      </form>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { IonRow, IonCol, IonInput, IonButton, IonCheckbox } from '@ionic/vue';
import { reactive, defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Register'
  }
})

const config = reactive([
  {
    name: 'firstName',
    vModel: '',
    autocomplete: 'given-name',
    placeholder: 'First Name',
  },
  {
    name: 'lastName',
    vModel: '',
    autocomplete: 'family-name',
    placeholder: 'Last Name',
  },
  {
    name: 'email',
    vModel: '',
    type: 'email',
    autocomplete: 'email',
    placeholder: 'Email',
  },
  {
    name: 'number',
    vModel: '',
    type: 'tel',
    placeholder: 'Mobile number',
  },
  {
    name: 'password',
    showPass: false,
    type: 'password',
    vModel: '',
    placeholder: 'Password',
  },
  {
    name: 'confirmPassword',
    showPass: false,
    type: 'password',
    vModel: '',
    placeholder: 'Confirm Password',
  },
  {
    name: 'dateOfBirth',
    vModel: '',
    type: 'date',
    autocomplete: '',
    placeholder: 'Date of Birth',
  },
  {
    name: 'nationality',
    vModel: '',
    placeholder: 'Nationality',
  },
  {
    name: 'gender',
    vModel: '',
    placeholder: 'Gender',
  }
])

const onClick = () => {
  console.log('config', config)
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
}

ion-row {
  justify-content: center !important;
}

ion-button,
ion-input {
  --border-radius: 10px !important;
}

ion-input {
  --border-color: #ababaa;
  --highlight-color-focused: #13212d;
}

.checkbox-container {
  margin-top: 30px;
}

.url {
  color: black;
  cursor: pointer;
}
</style>