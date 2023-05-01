<template>
  <ion-footer>
    <ion-toolbar>
      <ion-grid fixed>
        <ion-row class="ion-justify-content-center">
          <ion-col size="6" size-md="3">
            <ion-row class="ion-justify-content-center">
              <ion-col size="6" size-sm="4" size-lg="6">
                <ion-img @click="() => router.push('/')" :src="`./assets/icons/rapol-logo.svg`" alt=""></ion-img>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col v-for="src in storeImgSrc" :key="src">
                <ion-img class="store-icons" :src="`${assetFolder}/test/${src}`" alt=""></ion-img>
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col size="12" size-lg="6" class="middle-column">
            <ion-row class="ion-justify-content-start">
              <ion-col size="6" size-lg="4" v-for="footerLink of footerLinksCenter" :key="footerLink.title">
                <ion-row>
                  <h5>{{ footerLink.title }}</h5>
                </ion-row>
                <ion-row v-for="link in footerLink.links" :key="link.name">
                  <a :href="link.link" class="link ion-margin">{{ link.name }}</a>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-col>
          <ion-col>
            <ion-row class="ion-justify-content-start ion-margin-top">
              <div class="payment-icons-container">
                <span class="link">We accept</span>
                <ion-row>
                  <ion-col v-for="link in paymentLinks" :key="Math.random() * 999 + link">
                    <div class="payment-icon-container ion-margin-top">
                      <ion-img class="payment-icon" :src="`${assetFolderTest}/${link}`" alt=""></ion-img>
                    </div>
                  </ion-col>
                </ion-row>
              </div>
              <div class="payment-icons-container ion-padding-top ion-padding-bottom">
                <span class="link">Regulated by</span>
                <ion-row>
                  <ion-col>
                    <div class="payment-icon-container  ion-margin-top">
                      <ion-img class="payment-icon" :src="`${assetFolderTest}/dti.png`" alt=""></ion-img>
                    </div>
                  </ion-col>
                </ion-row>
              </div>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center ion-margin-top">
            © 2017-2023 Next Level. All Rights Reserved.
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonTitle, IonToolbar, IonRow, IonCol, IonImg, IonGrid } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

interface LinkGroup {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}

const assetFolder = './assets'
const assetFolderTest = assetFolder + '/test'

const footerLinksCenter: LinkGroup[] = [
  {
    title: 'Quick Links',
    links: [
      {
        name: 'About Us',
        link: '/about-us'
      },
      {
        name: 'My Account',
        link: '/my-account'
      },
      {
        name: 'Active Tickets',
        link: '/active-tickets'
      },
      {
        name: 'Charity',
        link: '/charity'
      }
    ]
  },
  {
    title: 'Information',
    links: [
      {
        name: 'Contact Us',
        link: '/contact-us'
      },
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'How it works',
        link: '/how-it-works'
      },
      {
        name: 'Privacy Policy',
        link: '/privacy-policy'
      },
      {
        name: 'User Agreement',
        link: '/user-agreement'
      }
    ]
  },
  {
    title: 'Socials',
    links: [
      {
        name: 'Facebook',
        link: 'https://fb.com'
      },
      {
        name: 'Instagram',
        link: 'https://instagram.com'
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com'
      },
      {
        name: 'Tiktok',
        link: 'https://tiktok.com'
      }
    ]
  },
]

const storeImgSrc: string[] = [
  'download on the app store.png',
  'download on the google store.png'
]


const paymentLinks: string[] = [
  'visa.png',
  'mastercard.png',
  'gcash.png',
]
</script>

<style lang="scss" scoped>
.middle-column {
  margin: 0 10px;
}

.store-icons {
  height: 70px;
}

.payment-icons-container {

  .payment-icon-container {
    background-color: white;
    padding: 5px 15px;
    border-radius: 10px;
    width: 80px;
  }
}

.payment-icon {
  height: 35px;
  margin: auto
}

.link {
  font-size: 13px;
}
</style>