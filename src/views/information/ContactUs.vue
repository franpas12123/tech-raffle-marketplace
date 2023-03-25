<template>
  <SinglePageBase :title="title">
    <template v-slot:content>
      <form @submit.prevent="onClick">
        <ion-row class="ion-justify-content-center container">
          <ion-col size="12" size-sm="6">
            <ion-row ref="row">
              <ion-col>
                <ion-input v-model="form.firstName" type="text" label="First Name" label-placement="floating"
                  placeholder="John"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input v-model="form.lastName" type="text" label="Last Name" label-placement="floating"
                  placeholder="Doe"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row ref="row">
              <ion-col>
                <ion-input v-model="form.email" type="email" label="Email" label-placement="floating"
                  placeholder="john.doe@example.com"></ion-input>
              </ion-col>
              <ion-col>
                <ion-select v-model="form.topic" color="dark" label="Topic" aria-label="Topic" justify="space-between"
                  interface="popover">
                  <ion-select-option value="general-inquiry">General Inquiry</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row ref="row" class="ion-margin-top">
              <ion-textarea v-model="form.message" label="" aria-label="Message" placeholder="Message"
                :clear-on-edit="true" :maxlength="100"></ion-textarea>
            </ion-row>
            <ion-row ref="row" class="ion-margin-top ion-margin-left">
              <ion-button color="light" type="submit">
                <ion-icon slot="start" :icon="send"></ion-icon>
                Send
              </ion-button>
            </ion-row>
          </ion-col>
          <ion-col size="12" size-sm="6" class="ion-padding-horizontal">
            <!-- map -->
            <ion-row>
              <ion-col>
                <iframe title="rapol hq map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61799.95350206362!2d121.03038300879288!3d14.513535203567375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf4a54fe3001%3A0x2fae7af0a998d2ad!2sTaguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1679316702214!5m2!1sen!2sph"
                  :width="addressContainerWidth" :height="400" style="border:0;" :allowfullscreen="true" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </ion-col>
            </ion-row>
            <ion-row ref="addressContainer">
              <ion-col>
                <h3 class="title ion-text-capitalize address-name">Rapol HQ</h3>
                <span class="subtitle">Address Line1</span>
                <span class="subtitle"><br>Address Line2</span>
              </ion-col>
            </ion-row>
            <hr>
            <ion-row>
              <ion-col size="12" size-sm="6">
                <h3 class="title ion-text-capitalize">call us</h3>
                <span class="subtitle">+63 000 000 0000</span>
              </ion-col>
              <ion-col size="12" size-sm="6">
                <h3 class="title ion-text-capitalize">email us</h3>
                <span class="subtitle">support@rapol.com.ph</span>
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
      </form>
    </template>
  </SinglePageBase>
</template>

<script setup lang="ts">
import { IonRow, IonCol, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon } from '@ionic/vue';
import { send } from 'ionicons/icons';
import SinglePageBase from '@/components/base/SinglePageBase.vue';
import { faker } from '@faker-js/faker';
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';

const props = defineProps({
  title: String,
  text: {
    type: Array<string>,
    default: [faker.lorem.paragraphs(15, '<br><br>\n')]
  }
})

interface Form {
  firstName: string,
  lastName: string,
  email: string,
  topic: string,
  message: string
}

const form: Form = {
  firstName: '',
  lastName: '',
  email: '',
  topic: '',
  message: ''
}

const addressContainer = ref(null)
const row = ref(null)
const addressContainerWidth = useElementSize(addressContainer).width

// Todo: add send logic
const onClick = () => console.log('sent!', form)
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 100px;
}

ion-textarea,
ion-input,
ion-select {
  padding-left: var(--ion-padding, 12px) !important;
  padding-right: var(--ion-padding, 12px) !important;
  border: 1px solid;
  border-radius: 20px;
}

ion-textarea {
  height: 200px;

  .counter {
    color: #373737 !important;
  }
}

ion-button {
  width: 150px;
}

.title {
  font-weight: 700;
  margin-bottom: 0px;
}

.subtitle {
  font-size: .9rem;
  margin-top: 0;
}

hr {
  margin-top: 25px;
  background: #cececd;
}
</style>