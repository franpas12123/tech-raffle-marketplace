<template>
  <h1>{{ title }}</h1>
  <slot name="content" class="container">
    <form @submit.prevent="onClick()">
      <div class="address-buttons ion-margin-vertical">
        <ion-row>
          <ion-col v-for="(btn, index) in addresses" :key="`address-btn-${index}`">
            <BaseButton :text="btn.name" :wider="true" @click.prevent="currentAddressView = index"></BaseButton>
          </ion-col>
        </ion-row>
      </div>
      <ion-row class="container">
        <ion-col v-for="(c, i) in addresses[currentAddressView].address" :key="i" size="12"
          :size-sm="c.fullWidth ? '12' : '6'">
          <ion-input :ref="c.name" v-model="c.vModel" :label="c.placeholder" label-placement="floating"
            fill="outline"></ion-input>
        </ion-col>
      </ion-row>
      <SingleButton text="Save" :wider="true" type="submit"></SingleButton>
    </form>
  </slot>
</template>

<script setup lang="ts">
import { IonRow, IonCol, IonInput } from '@ionic/vue';
import { reactive, ref } from 'vue';
import SingleButton from '@/components/base/SingleButton.vue'
import BaseButton from '../base/BaseButton.vue';

defineProps({
  title: {
    type: String,
    default: 'My Address'
  }
})

const currentAddressView = ref(0)
const addresses = reactive([
  {
    name: 'Home',
    address: [
      {
        name: 'region',
        vModel: '',
        placeholder: 'Region',
      },
      {
        name: 'province',
        vModel: '',
        placeholder: 'Province',
      },
      {
        name: 'city',
        vModel: '',
        placeholder: 'City',
      },
      {
        name: 'barangay',
        vModel: '',
        placeholder: 'Barangay',
      },
      {
        name: 'address1',
        vModel: '',
        fullWidth: true,
        placeholder: 'Address Line 1',
      },
      {
        name: 'address2',
        vModel: '',
        fullWidth: true,
        placeholder: 'Address Line 2',
      }
    ]
  },
  {
    name: 'Work',
    address: [
      {
        name: 'region',
        vModel: '',
        placeholder: 'Region',
      },
      {
        name: 'province',
        vModel: '',
        placeholder: 'Province',
      },
      {
        name: 'city',
        vModel: '',
        placeholder: 'City',
      },
      {
        name: 'barangay',
        vModel: '',
        placeholder: 'Barangay',
      },
      {
        name: 'address1',
        vModel: '',
        fullWidth: true,
        placeholder: 'Address Line 1',
      },
      {
        name: 'address2',
        vModel: '',
        fullWidth: true,
        placeholder: 'Address Line 2',
      }
    ]
  },
  {
    name: 'Other',
    address: [
      {
        name: 'region',
        vModel: '',
        placeholder: 'Region',
      },
      {
        name: 'province',
        vModel: '',
        placeholder: 'Province',
      },
      {
        name: 'city',
        vModel: '',
        placeholder: 'City',
      },
      {
        name: 'barangay',
        vModel: '',
        placeholder: 'Barangay',
      },
      {
        name: 'address1',
        vModel: '',
        fullWidth: true,
        placeholder: 'Address Line 1',
      },
      {
        name: 'address2',
        vModel: '',
        fullWidth: true,
        placeholder: 'Address Line 2',
      }
    ]
  }
])

const onClick = () => console.log('saving address!', addresses[currentAddressView.value])

// const buttonDisabled = computed(() => {
//   console.log('current', getConfig('current')?.vModel, '\nnew', getConfig('new')?.vModel, '\nconfirm', getConfig('confirm')?.vModel, '\n', getConfig('new')?.vModel === getConfig('confirm')?.vModel)
//   return !(getConfig('current')?.vModel && getConfig('new')?.vModel && getConfig('new')?.vModel === getConfig('confirm')?.vModel)
// })

</script>

<style scoped>
h1 {
  font-size: 25px;
  font-weight: 700;
}

.container {
  margin-bottom: 2rem;
}

.address-buttons {
  display: flex;
}
</style>