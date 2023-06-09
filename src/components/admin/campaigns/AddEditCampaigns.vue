<template>
  <h1 class="ion-margin-bottom ion-margin-start">{{ title }}</h1>
  <!-- <h1 class="ion-margin-bottom">Campaigns</h1> -->
  <slot name="content" class="container">
    <form @submit.prevent="onClick">
      <!-- <ion-row class="campaign-id-container">
        <ion-col>
          <span class="campaign-id">{{ getConfig('campaign_id')?.vModel }}</span>
        </ion-col>
      </ion-row> -->
      <ion-row v-for="(c, i) in config" :key="i" class="container">
        <ion-col v-if="c.name !== 'campaign_id'" size="12" size-lg="6">
          <ion-input v-if="c.name !== 'description'" :ref="c.name" v-model="c.vModel"
            :type="c.type === 'number' ? 'number' : 'text'" :label="c.placeholder" label-placement="floating" />
          <ion-textarea v-else v-model="c.vModel" aria-label="Message" :label="c.placeholder" label-placement="floating"
            :auto-grow="true" :clear-on-edit="true" :maxlength="300"></ion-textarea>
        </ion-col>
      </ion-row>
      <VueFileAgent :uploadUrl="uploadUrl" v-model="fileRecords"></VueFileAgent>
      <ion-row ref="row" class="ion-margin-left">
        <ion-button type="submit" :disabled="false">
          <ion-icon slot="start" :icon="send"></ion-icon>
          {{ computedButtonName }}
        </ion-button>
      </ion-row>
    </form>
  </slot>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import { reactive, ref, onMounted, computed } from 'vue';
import { trashOutline, pencilOutline, searchOutline, send } from 'ionicons/icons';
import { IonSearchbar, IonInput, IonTextarea } from '@ionic/vue'
import { useRoute, useRouter } from 'vue-router';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'
import { Campaign } from '@/types/campaign';
import store from '@/store';


const route = useRoute()
const router = useRouter()

const mode = route.name.includes('add') ? 'Add' : route.name.includes('edit') ? 'Edit' : ''
const title = mode + ' Campaigns'
const computedButtonName = computed(() => mode === 'Add' ? 'Add Campaign' : 'Update Campaign')
// const categories = ref([])
let campaign: Campaign = reactive({
  name: '',
  description: '',
  stock: 0,
  price: 0,
  campaign_id: '',
})

const getProdcutById = async () => {
  // Fetch the item using the ID parameter from the route
  const itemId = route.params.id;
  // Use the Supabase client to query the 'items' table and fetch the item by ID
  const { data, error } = await supabase
    .from('campaign')
    .select('*')
    .eq('id', itemId)

  if (error) {
    throw new Error(error.message);
  }
  campaign = { ...campaign, ...data[0] }
  console.log('data', campaign)
}

onMounted(async () => {
  // store.dispatch('showToast', { message: 'Campaign added successfully', color: 'success' })
  // store.state..toast('Campaign added successfully', 'success')
  if (mode === 'Edit') {
    // Get campaign details from the database when the component is mounted
    await getProdcutById()

    // Update the 'vModel' values when the component is mounted
    config.forEach(field => {
      // Set the initial value of 'vModel' using the 'campaign_id' field's initial value from the 'config' variable
      field.vModel = campaign[field.name]
      console.log('campaign field', campaign[field.name], field.name)
    });
    console.log('campaign', campaign, '\nconfig', config)
  }
})

// config for inputs
const config = reactive([
  {
    name: 'name',
    vModel: '',
    placeholder: 'Campaign Name',
  },
  {
    name: 'description',
    vModel: '',
    placeholder: 'Campaign Description',
  },
  {
    name: 'stock',
    type: 'number',
    vModel: '',
    placeholder: 'Stock',
  },
  {
    name: 'price',
    type: 'number',
    vModel: '',
    placeholder: 'Price',
  },
  {
    name: 'campaign_id',
    vModel: uuidv4(),
    placeholder: 'Campaign Id (optional)',
  },
])

const getConfig = (name: string) => config.find(c => c.name === name)

// const buttonDisabled = computed(() => {
//   console.log('name', !!getConfig('name')?.vModel, '\nstock', getConfig('stock')?.vModel, '\nprice', getConfig('price')?.vModel, '\n')
//   return !getConfig('name')?.vModel
// })

// const { data, error } = await supabase.auth.signInWithPassword({
//   email: 'franpas12123@gmail.com',
//   password: 'pignam-8Sebwu-nyrfic'
// })

// console.log('login', data, error)

// const { data: { user } } = await supabase.auth.getUser()
// console.log('user', user)

// onclick function
const onClick = async () => {
  const payload: Campaign = {
    name: getConfig('name')?.vModel,
    description: getConfig('description')?.vModel,
    stock: getConfig('stock')?.vModel,
    price: getConfig('price')?.vModel
  }

  console.log(payload)

  if (mode.toLowerCase() === 'add') {
    await insertCampaign(payload)
  } else if (mode.toLowerCase() === 'edit') {
    await updateCampaign(payload)
  }

  // console.log('clicked', getConfig('name')?.vModel, getConfig('stock')?.vModel, getConfig('price')?.vModel)
}
// d258010e-6afe-4638-9461-b231f23cefdf

const insertCampaign = async (payload: Campaign) => {
  const { data, error } = await supabase
    .from('campaign')
    .insert(payload)

  if (error) {
    throw new Error(error.message);
  }
  // toast
  // store.state.toast('Campaign added successfully', 'success')
  alert('campaign added successfully')
  router.push({ name: 'adminCampaigns' })
  console.log('insert', data)
}
const updateCampaign = async (payload: Campaign) => {
  const { error } = await supabase
    .from('campaign')
    .update(payload)
    .eq('id', route.params.id)

  if (error) {
    throw new Error(error.message);
  }
  console.log('update', error, payload)
}

// File upload`
const fileRecords = []
const uploadUrl = 'https://example.com'
</script>

<style lang="scss" scoped>
.table {
  font-size: 13px;
}

ion-textarea,
ion-input,
ion-select {
  padding-left: var(--ion-padding, 12px) !important;
  padding-right: var(--ion-padding, 12px) !important;
  border: 1px solid;
  border-radius: 20px;
}

.table-header {
  font-size: larger;
  // background-color: var(--bg-color-primary);
  color: white;
}

.darker-bg {
  // background-color: var(--bg-color-primary-light);
}

.title {
  font-weight: 700;
}

ion-row {
  padding: 8px 14px;
}

ion-button {
  --background: var(--bg-color-primary) !important;
  --color: white !important;
}

.actions-column ion-button {
  font-size: 10px;
}

ion-searchbar {
  color: black;
}

.campaign-id-container {
  padding-top: 0;

  .campaign-id {
    font-size: 0.9rem;
    font-weight: 400;
  }
}
</style>