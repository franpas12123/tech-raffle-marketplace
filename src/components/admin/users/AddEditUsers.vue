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
        <ion-col v-if="c.name !== 'campaign_id' && c.name !== 'tickets_issued'" size="12" size-lg="6">
          <ion-input v-if="c.name !== 'description' && !c.type || c.type === 'number'" :ref="c.name" v-model="c.vModel"
            :type="c.type === 'number' ? 'number' : 'text'" :label="c.placeholder" label-placement="floating"
            :readonly="c.readonly" />
          <div v-else-if="c.type === 'date'">
            <ion-input :type="!edit ? 'date' : 'text'" :ref="c.name" v-model="c.vModel" :label="c.placeholder"
              label-placement="floating" />
            <!-- {{ c.vModel }}
            <ion-datetime-button :datetime="c.name"></ion-datetime-button>
            <ion-modal :keep-contents-mounted="false">
              <ion-datetime :id="c?.name" v-model="c.vModel"></ion-datetime>
            </ion-modal> -->
          </div>
          <!-- <ion-textarea v-else v-model="c.vModel" aria-label="Message" :label="c.placeholder" label-placement="floating"
            :auto-grow="true" :clear-on-edit="true" :maxlength="300"></ion-textarea> -->
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12" size-lg="6">
          <ion-select aria-label="product" placeholder="Select product" @ion-change="onLinkedProductChange"
            :value="selectedProduct">
            <ion-select-option v-for="(product, index) in products" :key="index" :value="product.id">{{ product.name
            }}</ion-select-option>
          </ion-select>
        </ion-col>
      </ion-row>
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
import { reactive, ref, onMounted, computed, nextTick, onBeforeMount } from 'vue';
import { trashOutline, pencilOutline, searchOutline, send } from 'ionicons/icons';
import { IonSearchbar, IonInput, IonTextarea, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue'
import { useRoute, useRouter } from 'vue-router';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'
// import { Campaign } from '@/types/campaign';
import store from '@/store';
import { Campaign } from '@/types/campaigns';
import { Product } from '@/types/product';
import { formatDate } from '@/utils/helpers/helpers';

const route = useRoute()
const router = useRouter()

const mode = route.name.includes('add') ? 'Add' : route.name.includes('edit') ? 'Edit' : ''
const title = mode + ' Campaigns'
const computedButtonName = computed(() => mode === 'Add' ? 'Add Campaign' : 'Update Campaign')
// const categories = ref([])
// let campaign: Campaign = reactive({
//   name: '',
//   description: '',
//   stock: 0,
//   price: 0,
//   campaign_id: '',
// })
let mounted = false
const onmounted = computed(() => mounted)
let edit = false

let campaign: Campaign = reactive({
  id: '',
  name: '',
  description: '',
  max_tickets: 0,
  max_draw_date: new Date().toLocaleDateString(),
  linked_product: '',
})

const selectedProduct = ref('')
let products: Array<Product> = ref([])

const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('id,name')

  if (error) {
    throw new Error(error.message);
  }
  // campaign = { ...campaign, ...data[0] }
  console.log('data', data)
  products = ref(data)
  selectedProduct.value = products.value[0].id
}

const getCampaign = async (id: string) => {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(error.message);
  }
  campaign = { ...campaign, ...data }
  // products = ref(data)
  // selectedProduct.value = products.value[0].id
}

onBeforeMount(async () => {
  console.log('mounted', mounted)
  await getProducts()
  // store.dispatch('showToast', { message: 'Campaign added successfully', color: 'success' })
  // store.state..toast('Campaign added successfully', 'success')
  if (mode === 'Edit') {
    edit = true
    // Get campaign details from the database when the component is mounted
    // console.log('params', route.params.campaignId)
    await getCampaign(route.params?.campaignId)

    // Update the 'vModel' values when the component is mounted
    config.forEach(field => {
      if (field.type === 'date') {
        console.log('date', field, formatDate(campaign[field.name]))
        field.vModel = new Date((campaign[field.name])).toLocaleDateString()
      } else if (field.type === 'number') {
        field.vModel = campaign[field.name] ?? 0
      } else {
        // Set the initial value of 'vModel' using the 'campaign_id' field's initial value from the 'config' variable
        field.vModel = campaign[field.name] ?? ''
      }
      console.log('campaign field', campaign[field.name], field.name)
    });

    // assign linked product
    selectedProduct.value = campaign.linked_product
    console.log('campaign', campaign, '\nconfig', config)
  } else {
    edit = false
  }

  mounted = true
  console.log('mounted', mounted)
})

// config for inputs
const config = reactive([
  {
    name: 'name',
    vModel: '',
    placeholder: 'Campaign Name',
  },
  // {`
  //   name: 'description',
  //   vModel: '',
  //   placeholder: 'Campaign Description',
  // },
  {
    name: 'tickets_issued',
    type: 'number',
    vModel: '',
    placeholder: 'Tickets Issued',
    readonly: true
  },
  {
    name: 'max_tickets',
    type: 'number',
    vModel: '',
    placeholder: 'Max Tickets',
  },
  {
    name: 'max_draw_date',
    type: 'date',
    vModel: '',
    placeholder: 'Max Draw Date',
  },
  // {
  //   name: 'campaign_id',
  //   vModel: uuidv4(),
  //   placeholder: 'Campaign Id (optional)',
  // },
])

const getConfig = (name: string) => config.find(c => c.name === name)

const onLinkedProductChange = (e) => {
  selectedProduct.value = e.target.value
  console.log('onLinkedProductChange', e.target.value)
}

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
    // description: getConfig('description')?.vModel,
    max_tickets: getConfig('max_tickets')?.vModel,
    max_draw_date: getConfig('max_draw_date')?.vModel,
    linked_product: selectedProduct?.value,
  }

  console.log(payload)

  if (mode.toLowerCase() === 'add') {
    // payload.date_created = formatDate(new Date())
    await insertCampaign(payload)
  } else if (mode.toLowerCase() === 'edit') {
    await updateCampaign(payload)
  }

  // console.log('clicked', getConfig('name')?.vModel, getConfig('stock')?.vModel, getConfig('price')?.vModel)
}
// d258010e-6afe-4638-9461-b231f23cefdf

const insertCampaign = async (payload: Campaign) => {
  const { data, error } = await supabase
    .from('campaigns')
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
    .from('campaigns')
    .update(payload)
    .eq('id', route.params?.campaignId)

  if (error) {
    throw new Error(error.message);
  }
  console.log('update', route.params?.campaignId, payload)
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

ion-alert {
  --background: black !important;
}
</style>