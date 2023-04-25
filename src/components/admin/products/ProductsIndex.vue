<template>
  <div>
    <ion-grid>
      <ion-row class="ion-align-items-center">
        <ion-col>
          <h1 class="title">Products</h1>
        </ion-col>
        <ion-col size="3.5">
          <ion-button expand="block" @click="() => router.push({ name: 'addProducts' })">Add Product</ion-button>
        </ion-col>
        <ion-col size="3.5">
          <ion-button expand="block">Export</ion-button>
        </ion-col>
      </ion-row>
      <!-- 2nd row would be the search bar -->
      <ion-row class="ion-align-items-center">
        <ion-col>
          <ion-searchbar class="" placeholder="Product Name"></ion-searchbar>
        </ion-col>
        <ion-col size="2">
          <ion-button expand="block">Search</ion-button>
        </ion-col>
        <ion-col size="2">
          <ion-button expand="block">Reset</ion-button>
        </ion-col>
      </ion-row>
      <!-- 3rd row would be the table -->
      <ion-row class="table">
        <ion-col size="12">
          <ion-grid>
            <!-- table header -->
            <ion-row class="table-header">
              <ion-col size="3">Product Name</ion-col>
              <ion-col>Stock</ion-col>
              <ion-col>Price</ion-col>
              <ion-col size="2">Categories</ion-col>
              <ion-col>Date</ion-col>
              <ion-col>Action</ion-col>
            </ion-row>
            <ion-row v-for="(product, index) in state.products" :key="index" :class="{ 'darker-bg': index % 2 === 0 }"
              class="ion-align-items-center">
              <ion-col size="3">{{ product.name }}</ion-col>
              <ion-col>{{ product.stock }}</ion-col>
              <ion-col>₱{{ product.price }}</ion-col>
              <!-- <ion-col size="2">{{ product.categories[0] }}</ion-col> -->
              <ion-col size="2"></ion-col>
              <ion-col>{{ formatDate(product.last_edited) }}</ion-col>
              <ion-col size="2" class="actions-column">
                <ion-button @click="viewProduct">
                  <ion-icon :icon="searchOutline" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button @click="() => router.push({ name: 'editProducts', params: { id: product.id } })">
                  <ion-icon :icon="pencilOutline" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button @click="deleteProduct(product.id, index)">
                  <ion-icon :icon="trashOutline" aria-hidden="true"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { trashOutline, pencilOutline, searchOutline } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/vue'
import { useRouter } from 'vue-router';
import dayjs from 'dayjs'
// import { Product } from '@/types/product';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()

const state = reactive({
  products: []
})

const getProducts = async () => {
  const { data, error } = await supabase
    .from('product')
    .select('*')

  state.products = data
  console.log('product inside', state.products)
}

onMounted(async () => {
  await getProducts()
  console.log('product', state.products)
})

// const products = reactive([
//   {
//     name: 'Product 1',
//     stock: 100,
//     price: 10,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 2',
//     stock: 200,
//     price: 20,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 3',
//     stock: 300,
//     price: 30,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 4',
//     stock: 400,
//     price: 40,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 5',
//     stock: 500,
//     price: 50,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 6',
//     stock: 600,
//     price: 60,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 7',
//     stock: 700,
//     price: 70,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 8',
//     stock: 800,
//     price: 80,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 9',
//     stock: 900,
//     price: 90,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Product 10',
//     stock: 1000,
//     price: 100,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
// ])


const deleteProduct = async (id, index) => {

  try {
    const { data, error } = await supabase
      .from('product')
      .delete()
      .match({ id });

    if (error) {
      throw new Error(error.message);
    }

    console.log('Item deleted successfully:', data);
    state.products.splice(index, 1)
  } catch (error) {
    console.error('Error deleting item:', error);
  }
}

const viewProduct = () => {
  console.log('view product')
}

const editProduct = () => {
  console.log('edit product')
}

// a function to convert a js date to dayjs date in this format('DD/MM/YYYY')
const formatDate = (date) => {
  return dayjs(date).format('DD/MM/YYYY')
}


</script>

<style lang="scss" scoped>
.table {
  font-size: 13px;
}

.table-header {
  font-size: larger;
  background-color: var(--bg-color-primary);
  color: white;
}

.darker-bg {
  background-color: var(--bg-color-primary-light);
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
</style>