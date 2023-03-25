<template>
  <ion-card color="dark">
    <ion-card-header class="ion-text-center">
      <img class="profile-pic" alt="Silhouette of mountains" src="/assets/user.svg" />
      <ion-card-title>{{ user.name }}</ion-card-title>
      <ion-card-subtitle>{{ user.email }}</ion-card-subtitle>
    </ion-card-header>
    <!-- <ion-card-content class="content"> -->
    <!-- <ion-item color="dark" v-for="menu in userMenu" :key="menu.title + Math.random() * 999"> -->
    <!-- <ion-thumbnail slot="start" class="ion-align-items-center ion-justify-content-center"> -->
    <!-- <ion-row>
          <ion-col> -->

    <!-- </ion-col>
            </ion-row> -->
    <!-- </ion-thumbnail> -->
    <!-- <ion-label>{{ menu.title }}</ion-label> -->
    <ion-button v-for="menu in userMenu" :key="menu.title + Math.random() * 999" class="" expand="full" color="dark"
      :href="`/user/test/${menu.route}`">
      <div class="icon-start">
        <ion-icon class="ion-margin-horizontal" slot="start" :icon="menu.icon"></ion-icon>
        <span slot="start" class="ion-text-capitalize ion-text-start">{{ menu.title }}</span>
      </div>
      <ion-icon class="icon-end ion-margin-right" slot="end" :icon="chevronForwardOutline"></ion-icon>
    </ion-button>
    <!-- </ion-item> -->
    <!-- </ion-card-content> -->
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue';
import { personOutline, ticket, giftOutline, locationSharp, cardOutline, cogOutline, logOutOutline, chevronForwardOutline } from 'ionicons/icons';

interface User {
  name: string,
  email: string,
}

const firstName = 'Francis'
const middleName = ''
const lastName = 'Eisma'
const email = 'testmail@gmail.com'


const user: User = {
  name: `${firstName} ${middleName} ${lastName}`,
  email
}

interface UserMenu {
  icon: string,
  title: string,
  route: string,
}

const userMenu: Array<UserMenu> = [
  {
    icon: personOutline,
    title: 'Personal Details',
    route: '',
  },
  {
    icon: ticket,
    title: 'Active Tickets',
    route: 'active-tickets',
  },
  {
    icon: giftOutline,
    title: 'My Purchase',
    route: 'my-purchase',
  },
  {
    icon: locationSharp,
    title: 'My Address',
    route: 'my-address',
  },
  {
    icon: cardOutline,
    title: 'Payment Options',
    route: 'payment-options',
  },
  {
    icon: cogOutline,
    title: 'Change Password',
    route: 'change-password',
  },
  {
    icon: logOutOutline,
    title: 'Logout',
    route: 'logout',
  }
] 
</script>

<style lang="scss" scoped>
$box-shadow-color: #cececd;

ion-card {
  border-radius: 30px;
  box-shadow: 3px 3px 5px $box-shadow-color;
}

ion-item {
  --padding-start: 0;
}

/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

.profile-pic {
  margin: auto;
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.content {
  margin-top: 30px;
}

.ion-color-dark {
  --ion-color-base: white !important
}

ion-button {
  margin: 0;
  border: none !important;
  height: 50px;
}

.icon-start {
  position: absolute;
  left: 0;
}

.icon-end {
  position: absolute;
  right: 0;
}
</style>