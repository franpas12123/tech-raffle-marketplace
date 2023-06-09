<template>
  <h1>{{ title }}</h1>
  <slot name="content" class="container">
    <form @submit.prevent="onClick()">
      <!-- <div class="address-buttons ion-margin-vertical">
        <ion-row>
          <ion-col v-for="(btn, index) in personalDetails" :key="`address-btn-${index}`">
            <BaseButton :text="btn.name" :wider="true" @click.prevent="currentAddressView = index"></BaseButton>
          </ion-col>
        </ion-row>
      </div> -->
      <ion-row class="container">
        <ion-col v-for="(c, i) in personalDetails" :key="i" size="12" :size-sm="c.fullWidth ? '12' : '6'">
          <ion-input :readonly="!editMode" :ref="c.name" v-model="c.vModel" :label="c.placeholder"
            label-placement="floating" :type="c?.type ? c.type : 'text'" fill="outline"></ion-input>
        </ion-col>
      </ion-row>
      <SingleButton v-if="!editMode" text="Edit" :wider="true" @click="editMode = !editMode"></SingleButton>
      <ion-row>
        <ion-col size="4" size-sm="2">
          <SingleButton v-if="editMode" text="Save" :wider="true" type="submit" />
        </ion-col>
        <ion-col size="4" size-sm="2">
          <SingleButton v-if="editMode" text="Cancel" :wider="true" class="cancel" @click="editMode = !editMode" />
        </ion-col>
      </ion-row>
    </form>
  </slot>
</template>

<script setup lang="ts">
import { IonRow, IonCol, IonInput } from '@ionic/vue';
import { onMounted, reactive, ref } from 'vue';
import SingleButton from '@/components/base/SingleButton.vue'
import BaseButton from '../base/BaseButton.vue';
import { supabase } from '@/lib/supabaseClient';

defineProps({
  title: {
    type: String,
    default: 'Personal Details'
  }
})

const currentAddressView = ref(0)
const personalDetails: Array<InputConfig> = reactive([
  {
    name: 'first_name',
    vModel: '',
    placeholder: 'First Name',
  },
  {
    name: 'last_name',
    vModel: '',
    placeholder: 'LastName',
  },
  {
    name: 'email',
    vModel: '',
    placeholder: 'Email',
    type: 'email'
  },
  {
    name: 'date_of_birth',
    vModel: '',
    placeholder: 'Date of Birth',
    type: 'date'
  },
  {
    name: 'nationality',
    vModel: '',
    // fullWidth: true,
    placeholder: 'Nationality',
  },
  {
    name: 'number',
    vModel: '',
    // fullWidth: true,
    placeholder: 'Mobile Number',
  },
  {
    name: 'gender',
    vModel: '',
    placeholder: 'Gender',
  },
])

const onClick = () => console.log('saving address!', personalDetails)

onMounted(async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
  })
  const { data: { user } } = await supabase.auth.getUser()

  const userDetails: UserDetails = user?.user_metadata
  console.log('user', user)
  console.log('personaldetails', personalDetails)
  console.log('userdetails', userDetails)
  if (user) {
    personalDetails.forEach((c) => {
      c.vModel = userDetails[c.name]
    })
  }
})

// edit personal details
const editMode = ref(false)

// const buttonDisabled = computed(() => {
//   console.log('current', getConfig('current')?.vModel, '\nnew', getConfig('new')?.vModel, '\nconfirm', getConfig('confirm')?.vModel, '\n', getConfig('new')?.vModel === getConfig('confirm')?.vModel)
//   return !(getConfig('current')?.vModel && getConfig('new')?.vModel && getConfig('new')?.vModel === getConfig('confirm')?.vModel)
// })

</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
  font-weight: 700;
}

.container {
  ion-col {
    ion-input {
      --border-radius: 20px;
      --padding-start: 25px;
    }
  }

  /* margin-bottom: 2rem; */
}

.address-buttons {
  display: flex;
}
</style>