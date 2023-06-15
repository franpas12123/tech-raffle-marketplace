<template>
  <div>
    <ion-grid>
      <ion-row class="non-table ion-align-items-center">
        <ion-col>
          <h1 class="title">Users</h1>
        </ion-col>
        <ion-col size="3.5">
          <ion-button disabled expand="block" @click="() => router.push({ name: 'addUsers' })">Add User</ion-button>
        </ion-col>
        <ion-col size="3.5">
          <ion-button expand="block">Export</ion-button>
        </ion-col>
      </ion-row>
      <!-- 2nd row would be the search bar -->
      <ion-row class="non-table ion-align-items-center">
        <ion-col>
          <ion-searchbar class="" placeholder="User Name"></ion-searchbar>
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
        <ion-col size="12" class="non-table">
          <ion-grid>
            <!-- table header -->
            <ion-row class="table-header">
              <ion-col size="">Email</ion-col>
              <ion-col size="">First Name</ion-col>
              <ion-col size="">Last Name</ion-col>
              <ion-col size="">Mobile Number</ion-col>
              <ion-col size="">Join Date</ion-col>
              <ion-col>Action</ion-col>
            </ion-row>
            <ion-row v-for="(user, index) in state.users" :key="index" :class="{ 'darker-bg': index % 2 !== 0 }"
              class="ion-align-items-center">
              <!-- {{ user?.id }} -->
              <ion-col size="">{{ user?.email }}</ion-col>
              <ion-col size="">{{ user?.first_name }}</ion-col>
              <ion-col size="">{{ user?.last_name }}</ion-col>
              <ion-col size="">{{ user?.mobile_number }}</ion-col>
              <ion-col size="">{{ new Date(user?.date_created).toLocaleDateString() }}</ion-col>
              <ion-col class="actions-column">
                <ion-button disabled
                  @click="() => router.push({ name: 'viewUsers', params: { user_uuid: user.user_uuid } })">
                  <ion-icon class="action-icon" :icon="searchOutline" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button disabled
                  @click="() => router.push({ name: 'editUsers', params: { user_uuid: user.user_uuid } })">
                  <ion-icon class="action-icon" :icon="pencilOutline" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button disabled @click="deleteUser(user.id, index)">
                  <ion-icon class="action-icon" :icon="trashOutline" aria-hidden="true"></ion-icon>
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
import { reactive, ref, onMounted, nextTick } from 'vue';
import { trashOutline, pencilOutline, searchOutline } from 'ionicons/icons';
import { IonSearchbar, IonIcon } from '@ionic/vue'
import { useRouter } from 'vue-router';
import dayjs from 'dayjs'
// import { formatDate } from '@/utils/helpers/helpers';
// import { User } from '@/types/user';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()

const state = reactive({
  users: [
    // {
    //   id: Math.floor(Math.random() * 100),
    //   name: 'iPhone 14 Pro',
    //   ticketsIssued: 528,
    //   maxTickets: 1200,
    //   categories: ['Tech'],
    //   dateCreated: '2021-01-01',
    //   maxDrawDate: '2023-12-31',
    //   linkedUser: ['Rosso Set']
    // },
    // {
    //   id: Math.floor(Math.random() * 100),
    //   name: '₱50,000 Cash',
    //   ticketsIssued: 856,
    //   maxTickets: 1800,
    //   categories: ['Cash'],
    //   dateCreated: '2021-01-01',
    //   maxDrawDate: '2023-12-31',
    //   linkedUser: ['Jacket']
    // },
    // {
    //   id: Math.floor(Math.random() * 100),
    //   name: 'MacBook Pro',
    //   ticketsIssued: 645,
    //   maxTickets: 1800,
    //   categories: ['Tech'],
    //   dateCreated: '2021-01-01',
    //   maxDrawDate: '2023-12-31',
    //   linkedUser: ['Rosso Set']
    // },
    // {
    //   id: Math.floor(Math.random() * 100),
    //   name: 'Toyota Fortuner',
    //   ticketsIssued: 327,
    //   maxTickets: 1200,
    //   categories: ['Cars'],
    //   dateCreated: '2021-01-01',
    //   maxDrawDate: '2023-12-31',
    //   linkedUser: ['Mug']
    // },
  ],
  productsFromUsers: [],
})

const getUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  state.users = data
  console.log('user inside', state.users)
}

const getProduct = async (id) => {
  // if (id) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)

  console.log('data', id, data)
  return data
  // }
}

const getProducts = async (ids) => {
  if (ids.length) {
    const { data, error } = await supabase
      .from('products')
      .select('id, name')
      .in('id', ids)

    console.log('data', ids, data)
    if (!error) {
      state.productsFromUsers = data
      console.log('productsFromUsers', state.productsFromUsers)
    } else {
      throw new Error(error)
    }
  }
}

const getProductFromUsers = () => {
  return state.users.map(user => user?.linked_product)
}

const findProductFromUser = (id) => {
  return state.productsFromUsers.find(product => product.id === id)
}

onMounted(async () => {
  await getUsers()
  // await getProducts(getProductFromUsers())

  // console.log('user', state.users, getProductFromUsers(), await getProducts(getProductFromUsers()))
})

// const users = reactive([
//   {
//     name: 'User 1',
//     stock: 100,
//     price: 10,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 2',
//     stock: 200,
//     price: 20,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 3',
//     stock: 300,
//     price: 30,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 4',
//     stock: 400,
//     price: 40,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 5',
//     stock: 500,
//     price: 50,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 6',
//     stock: 600,
//     price: 60,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 7',
//     stock: 700,
//     price: 70,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 8',
//     stock: 800,
//     price: 80,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 9',
//     stock: 900,
//     price: 90,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'User 10',
//     stock: 1000,
//     price: 100,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
// ])


const deleteUser = async (id, index) => {
  console.log('deleting user')
  // try {
  //   const { data, error } = await supabase
  //     .from('user')
  //     .delete()
  //     .match({ id });

  //   if (error) {
  //     throw new Error(error.message);
  //   }

  //   console.log('Item deleted successfully:', data);
  //   state.users.splice(index, 1)
  // } catch (error) {
  //   console.error('Error deleting item:', error);
  // }
}

const viewUser = () => {
  console.log('view user')
}

const editUser = () => {
  console.log('edit user')
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
  text-align: center;

  ion-col:first-child {
    text-align: left;
  }
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

.non-table,
ion-grid {
  padding: 0 !important;
}
</style>