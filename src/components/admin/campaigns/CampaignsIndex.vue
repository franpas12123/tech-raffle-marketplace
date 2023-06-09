<template>
  <div>
    <ion-grid>
      <ion-row class="non-table ion-align-items-center">
        <ion-col>
          <h1 class="title">Campaigns</h1>
        </ion-col>
        <ion-col size="3.5">
          <ion-button expand="block" @click="() => router.push({ name: 'addCampaigns' })">Add Campaign</ion-button>
        </ion-col>
        <ion-col size="3.5">
          <ion-button expand="block">Export</ion-button>
        </ion-col>
      </ion-row>
      <!-- 2nd row would be the search bar -->
      <ion-row class="non-table ion-align-items-center">
        <ion-col>
          <ion-searchbar class="" placeholder="Campaign Name"></ion-searchbar>
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
              <ion-col size="2">Campaign Name</ion-col>
              <ion-col size="1">Tickets Issued</ion-col>
              <ion-col size="1">Max Tickets</ion-col>
              <!-- <ion-col>Categories</ion-col> -->
              <ion-col size="1.5">Categories</ion-col>
              <ion-col size="1.5">Date Created</ion-col>
              <ion-col size="1.5">Max Draw Date</ion-col>
              <ion-col>Linked Campaign</ion-col>
              <ion-col>Action</ion-col>
            </ion-row>
            <ion-row v-for="(campaign, index) in state.campaigns" :key="index" :class="{ 'darker-bg': index % 2 !== 0 }"
              class="ion-align-items-center">
              <ion-col size="2">{{ campaign.name }}</ion-col>
              <ion-col size="1">{{ campaign.ticketsIssued }}</ion-col>
              <ion-col size="1">{{ campaign.maxTickets }}</ion-col>
              <ion-col size="1.5">{{ campaign.categories[0] }}</ion-col>
              <ion-col size="1.5">{{ formatDate(campaign.dateCreated) }}</ion-col>
              <ion-col size="1.5">{{ formatDate(campaign.maxDrawDate) }}</ion-col>
              <ion-col>{{ campaign.linkedCampaign[0] }}</ion-col>
              <ion-col class="actions-column">
                <ion-button @click="viewCampaign">
                  <ion-icon class="action-icon" color="light" src="./assets/icons/ticket-white.svg"></ion-icon>
                </ion-button>
                <ion-button @click="() => router.push({ name: 'editCampaigns', params: { id: campaign.id } })">
                  <ion-icon class="action-icon" :icon="pencilOutline" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button @click="deleteCampaign(campaign.id, index)">
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
import { reactive, ref, onMounted } from 'vue';
import { trashOutline, pencilOutline, searchOutline } from 'ionicons/icons';
import { IonSearchbar, IonIcon } from '@ionic/vue'
import { useRouter } from 'vue-router';
import dayjs from 'dayjs'
// import { Campaign } from '@/types/campaign';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()

const state = reactive({
  campaigns: [
    {
      name: 'iPhone 14 Pro',
      ticketsIssued: 528,
      maxTickets: 1200,
      categories: ['Tech'],
      dateCreated: '2021-01-01',
      maxDrawDate: '2023-12-31',
      linkedCampaign: ['Rosso Set']
    },
    {
      name: '₱50,000 Cash',
      ticketsIssued: 856,
      maxTickets: 1800,
      categories: ['Cash'],
      dateCreated: '2021-01-01',
      maxDrawDate: '2023-12-31',
      linkedCampaign: ['Jacket']
    },
    {
      name: 'MacBook Pro',
      ticketsIssued: 645,
      maxTickets: 1800,
      categories: ['Tech'],
      dateCreated: '2021-01-01',
      maxDrawDate: '2023-12-31',
      linkedCampaign: ['Rosso Set']
    },
    {
      name: 'Toyota Fortuner',
      ticketsIssued: 327,
      maxTickets: 1200,
      categories: ['Cars'],
      dateCreated: '2021-01-01',
      maxDrawDate: '2023-12-31',
      linkedCampaign: ['Mug']
    },
  ]
})

const getCampaigns = async () => {
  const { data, error } = await supabase
    .from('campaign')
    .select('*')

  state.campaigns = data
  console.log('campaign inside', state.campaigns)
}

onMounted(async () => {
  // await getCampaigns()
  console.log('campaign', state.campaigns)
})

// const campaigns = reactive([
//   {
//     name: 'Campaign 1',
//     stock: 100,
//     price: 10,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 2',
//     stock: 200,
//     price: 20,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 3',
//     stock: 300,
//     price: 30,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 4',
//     stock: 400,
//     price: 40,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 5',
//     stock: 500,
//     price: 50,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 6',
//     stock: 600,
//     price: 60,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 7',
//     stock: 700,
//     price: 70,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 8',
//     stock: 800,
//     price: 80,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 9',
//     stock: 900,
//     price: 90,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
//   {
//     name: 'Campaign 10',
//     stock: 1000,
//     price: 100,
//     categories: ['category 1', 'category 2'],
//     date: '2021-01-01'
//   },
// ])


const deleteCampaign = async (id, index) => {
  console.log('deleting campaign')
  // try {
  //   const { data, error } = await supabase
  //     .from('campaign')
  //     .delete()
  //     .match({ id });

  //   if (error) {
  //     throw new Error(error.message);
  //   }

  //   console.log('Item deleted successfully:', data);
  //   state.campaigns.splice(index, 1)
  // } catch (error) {
  //   console.error('Error deleting item:', error);
  // }
}

const viewCampaign = () => {
  console.log('view campaign')
}

const editCampaign = () => {
  console.log('edit campaign')
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