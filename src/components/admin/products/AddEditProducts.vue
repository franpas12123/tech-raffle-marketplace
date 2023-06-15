<template>
  <h1 class="ion-margin-bottom ion-margin-start">{{ title }}</h1>
  <!-- <h1 class="ion-margin-bottom">Products</h1> -->
  <slot name="content" class="container">
    <form @submit.prevent="onClick">
      <!-- <ion-row class="product-id-container">
        <ion-col>
          <span class="product-id">{{ getConfig('product_id')?.vModel }}</span>
        </ion-col>
      </ion-row> -->
      <ion-row v-for="(c, i) in config" :key="i" class="container">
        <ion-col v-if="c.name !== 'product_id'" size="12" size-lg="6">
          <ion-input v-if="c.name !== 'description'" :ref="c.name" v-model="c.vModel"
            :type="c.type === 'number' ? 'number' : 'text'" :label="c.placeholder" label-placement="floating" />
          <ion-textarea v-else v-model="c.vModel" aria-label="Message" :label="c.placeholder" label-placement="floating"
            :auto-grow="true" :clear-on-edit="true" :maxlength="300"></ion-textarea>
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
import { reactive, ref, onMounted, computed } from 'vue';
import { trashOutline, pencilOutline, searchOutline, send } from 'ionicons/icons';
import { IonSearchbar, IonInput, IonTextarea } from '@ionic/vue'
import { useRoute, useRouter } from 'vue-router';
// ignore this for now
import { supabase } from '@/lib/supabaseClient'
import { Product } from '@/types/product';
import store from '@/store';


const route = useRoute()
const router = useRouter()

const mode = route.name.includes('add') ? 'Add' : route.name.includes('edit') ? 'Edit' : ''
const title = mode + ' Products'
const computedButtonName = computed(() => mode === 'Add' ? 'Add Product' : 'Update Product')
// const categories = ref([])
let product: Product = reactive({
  name: '',
  description: '',
  stock: 0,
  price: 0,
  product_id: '',
})

const getProdcutById = async () => {
  // Fetch the item using the ID parameter from the route
  const itemId = route.params.id;
  // Use the Supabase client to query the 'items' table and fetch the item by ID
  const { data, error } = await supabase
    .from('product')
    .select('*')
    .eq('id', itemId)

  if (error) {
    throw new Error(error.message);
  }
  product = { ...product, ...data[0] }
  console.log('data', product)
}

onMounted(async () => {
  // store.dispatch('showToast', { message: 'Product added successfully', color: 'success' })
  // store.state..toast('Product added successfully', 'success')
  if (mode === 'Edit') {
    // Get product details from the database when the component is mounted
    await getProdcutById()

    // Update the 'vModel' values when the component is mounted
    config.forEach(field => {
      // Set the initial value of 'vModel' using the 'product_id' field's initial value from the 'config' variable
      field.vModel = product[field.name]
      console.log('product field', product[field.name], field.name)
    });
    console.log('product', product, '\nconfig', config)
  }
})

// config for inputs
const config = reactive([
  {
    name: 'name',
    vModel: '',
    placeholder: 'Product Name',
  },
  {
    name: 'description',
    vModel: '',
    placeholder: 'Product Description',
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
    name: 'product_id',
    vModel: uuidv4(),
    placeholder: 'Product Id (optional)',
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
  const payload: Product = {
    name: getConfig('name')?.vModel,
    description: getConfig('description')?.vModel,
    stock: getConfig('stock')?.vModel,
    price: getConfig('price')?.vModel
  }

  console.log(payload)

  if (mode.toLowerCase() === 'add') {
    await insertProduct(payload)
  } else if (mode.toLowerCase() === 'edit') {
    await updateProduct(payload)
  }

  // console.log('clicked', getConfig('name')?.vModel, getConfig('stock')?.vModel, getConfig('price')?.vModel)
}
// d258010e-6afe-4638-9461-b231f23cefdf

const insertProduct = async (payload: Product) => {
  const { data, error } = await supabase
    .from('products')
    .insert(payload)

  if (error) {
    throw new Error(error.message);
  }
  // toast
  // store.state.toast('Product added successfully', 'success')
  alert('product added successfully')
  router.push({ name: 'adminProducts' })
  console.log('insert', data)
}
const updateProduct = async (payload: Product) => {
  const { error } = await supabase
    .from('products')
    .update(payload)
    .eq('id', route.params.id)

  if (error) {
    throw new Error(error.message);
  }
  console.log('update', error, payload)
}
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

.product-id-container {
  padding-top: 0;

  .product-id {
    font-size: 0.9rem;
    font-weight: 400;
  }
}
</style>