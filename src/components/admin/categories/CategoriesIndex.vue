<template>
  <div>
    <ion-grid>
      <ion-row class="ion-align-items-center">
        <ion-col>
          <h1 class="title">Categories</h1>
        </ion-col>
        <ion-col size="3.5">
          <ion-button expand="block" @click="() => router.push({ name: 'addCategories' })">Add Category</ion-button>
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
    </ion-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { trashOutline, pencilOutline, searchOutline } from 'ionicons/icons';
import { IonSearchbar } from '@ionic/vue'
import { useRouter } from 'vue-router';
import dictionary from '@/utils/dictionary';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()

const product_categories = ref([])

async function getProductCategories() {
  const { data: product_categories, error } = await supabase
    .from('product_categories')
    .select('name')

  if (!error) {
    product_categories.value = product_categories
  } else {
    console.error(dictionary.genericError.fetch + ' product categories', error)
  }
}
onMounted(() => {
  getProductCategories()
})




console.log('product_categories', product_categories)

const categories = reactive([
  {
    name: 'Tech 1',
    last_edited: new Date()
  },

])

const deleteProduct = (index: number) => {
  product_categories.value.splice(index, 1)
  console.log('products', product_categories.value)
}

const viewProduct = () => {
  console.log('view product')
}

const editProduct = () => {
  console.log('edit product')
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