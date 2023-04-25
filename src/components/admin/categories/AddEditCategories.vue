<template>
  <SinglePageBase :title="title">
    <template v-slot:content>
      <form @submit.prevent="onClick">
        <ion-row class="ion-justify-content-center container">
          <ion-col size="12" size-sm="6">
            <ion-row ref="row">
              <ion-col>
                <ion-input v-model="form.name" type="text" label="First Name" label-placement="floating"
                  placeholder="New Category"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row ref="row" class="ion-margin-top ion-margin-left">
              <ion-button color="light" type="submit">
                <ion-icon slot="start" :icon="send"></ion-icon>
                Send
              </ion-button>
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
})

interface Form {
  name: string,
  last_edited: Date | null
}

const form: Form = {
  name: '',
  last_edited: null
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