<template>
  <div>
    <ion-grid>
      <ion-row class="non-table ion-align-items-center">
        <ion-col>
          <h1 class="title">{{ route?.params?.linked_product }}</h1>
        </ion-col>
        <!-- <ion-col size="3.5">
          <ion-button expand="block" @click="() => router.push({ name: 'addCampaigns' })">Add Campaign</ion-button>
        </ion-col> -->
        <ion-col size="4">
          <ion-button expand="block">Export</ion-button>
        </ion-col>
      </ion-row>
      <!-- 2nd row would be the search bar -->
      <ion-row class="non-table ion-align-items-center">
        <ion-col>
          <ion-searchbar class="" placeholder="Ticket Number"></ion-searchbar>
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
            <ion-row class="table-header ion-align-items-center">
              <ion-col>Ticket Number</ion-col>
              <ion-col>Ticket Owner</ion-col>
              <ion-col>Date Created</ion-col>
              <ion-col size="2">Action</ion-col>
            </ion-row>
            <ion-row v-for="(ticket, index) in state.tickets" :key="index" :class="{ 'darker-bg': index % 2 !== 0 }"
              class="ion-align-items-center">
              <ion-col size="">RPL-000-0000-0 {{ ticket.name }}123123</ion-col>
              <ion-col size="">username1 {{ ticket.ticket_owner }}</ion-col>
              <ion-col size="">{{ formatDate(ticket.dateCreated) }}</ion-col>
              <ion-col class="actions-column" size="2">
                <!-- <ion-button @click="viewCampaign">
                  <ion-icon class="action-icon" color="light" src="./assets/icons/ticket-white.svg"></ion-icon>
                </ion-button> -->
                <ion-button @click="() => router.push({ name: 'editCampaigns', params: { ticketId: ticket.id } })">
                  <ion-icon class="action-icon" :icon="pencilOutline" aria-hidden="true"></ion-icon>
                </ion-button>
                <ion-button @click="deleteCampaign(ticket.id, index)">
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
import { useRouter, useRoute } from 'vue-router';
import dayjs from 'dayjs'
// import { Campaign } from '@/types/ticket';

// ignore this for now
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()
const route = useRoute()

const state = reactive({
  campaign: null,
  tickets: [
    {
      ticketNumber: 'RPL-000-0000-0',
      ticketOwner: 'username1',
      dateCreated: '2021-01-01',
    },
    {
      ticketNumber: 'RPL-000-0000-1',
      ticketOwner: 'username2',
      dateCreated: '2021-02-01',
    },
    {
      ticketNumber: 'RPL-000-0000-2',
      ticketOwner: 'username4',
      dateCreated: '2021-03-01',
    },
    {
      ticketNumber: 'RPL-000-0000-3',
      ticketOwner: 'username3',
      dateCreated: '2021-04-01',
    },
  ]
})

const getCampaignInfo = async () => {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', route?.params?.campaignId)

  state.campaign = data
  console.log('ticket inside', state.campaign)
}

const getCampaigns = async () => {
  const { data, error } = await supabase
    .from('ticket')
    .select('*')

  state.tickets = data
  console.log('ticket inside', state.tickets)
}

onMounted(async () => {
  // await getCampaigns()
  await getCampaignInfo()
  console.log('ticket', state.tickets)
  console.log('campaign', state.campaign)
})

// const tickets = reactive([
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
  console.log('deleting ticket')
  // try {
  //   const { data, error } = await supabase
  //     .from('ticket')
  //     .delete()
  //     .match({ id });

  //   if (error) {
  //     throw new Error(error.message);
  //   }

  //   console.log('Item deleted successfully:', data);
  //   state.tickets.splice(index, 1)
  // } catch (error) {
  //   console.error('Error deleting item:', error);
  // }
}

const viewCampaign = () => {
  console.log('view ticket')
}

const editCampaign = () => {
  console.log('edit ticket')
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

  ion-col:last-child {
    text-align: right;
    // margin-right: 20px;
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

.actions-column {
  text-align: right;

  ion-button {
    font-size: 10px;
  }
}


ion-searchbar {
  color: black;
}

.non-table,
ion-grid {
  padding: 0 !important;
}
</style>