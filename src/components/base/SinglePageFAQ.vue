<template>
  <SinglePageBase :title="title">
    <template v-slot:content>
      <div class="ion-margin-vertical ion-padding-vertical">
        <ion-accordion-group class="" v-for="topic in topics" :key="Math.random() * 999 + topic.title">
          <h4>{{ topic.title }}</h4>
          <ion-grid>
            <ion-row>
              <ion-col size="12" size-sm="6" v-for="question in topic.questions"
                :key="Math.random() * 999 + question.question">
                <ion-accordion>
                  <ion-item slot="header" color="dark">
                    <ion-label>{{ question.question }}</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">
                    {{ question.answer }}
                  </div>
                </ion-accordion>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-accordion-group>
      </div>
    </template>
  </SinglePageBase>
</template>

<script setup lang="ts">
import {
  IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonGrid, IonRow, IonCol
} from '@ionic/vue';
import SinglePageBase from './SinglePageBase.vue';
import { faker } from '@faker-js/faker';

const props = defineProps({
  title: String,
})

const topics: Array<Topic> = []

interface Topic {
  title: string,
  questions: Array<Question>
}

interface Question {
  question: string,
  answer: string
}

// test
for (let x = 1; x <= 3; x++) {
  const topic: Topic = {
    title: 'Title ' + x,
    questions: []
  }
  for (let y = 1; y <= 6; y++) {
    const question = {
      question: 'Question ' + y,
      answer: faker.lorem.sentence()
    }
    topic.questions.push(question)
  }
  topics.push(topic)
}
</script>

<style lang="scss" scoped>
h4 {
  font-weight: 700;
}

ion-accordion {
  border-radius: 10px;
  box-shadow: 3px 2px 5px #c7c6c5;
}
</style>