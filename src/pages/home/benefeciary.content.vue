<template>
  <q-banner class="bg-grey-8 text-white">
    <div
      :class="
        this.$q.screen.lt.sm ? 'text-center q-py-sm q-gutter-y-md' : 'row'
      "
      class="q-px-md"
    >
      <div class="col-5">
        <q-card
          class="my-card"
          flat
          :class="this.$q.screen.lt.sm ? '' : 'q-my-md'"
        >
          <!-- <q-img src="~assets/kid1.jpg" style="width: 100%; height: 100%" /> -->
          <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
            autoplay
            style="height: 350px"
          >
            <q-carousel-slide :name="1" img-src="~assets/kid.jpg" />
            <q-carousel-slide :name="2" img-src="~assets/kid1.jpg" />
            <q-carousel-slide :name="3" img-src="~assets/kid2.jpg" />
            <q-carousel-slide :name="4" img-src="~assets/library.jpg" />
          </q-carousel>
        </q-card>
      </div>
      <div
        class="col-7"
        :class="
          this.$q.screen.lt.sm
            ? ''
            : 'q-pl-xl q-py-md text-center q-pt-xl q-mt-xl'
        "
      >
        <div
          class="text-h4 text-weight-bold q-pb-md"
          style="font-family: inherit"
        >
          Benefeciaries <q-icon name="redeem" color="pink-4" />
        </div>
        <div class="text-subtitle2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          voluptate sunt beatae nulla, aspernatur adipisci voluptates blanditiis
          facere esse provident laudantium sequi est commodi deleniti quaerat et
          odit quo laboriosam!
        </div>
        <div class="q-pt-lg">
          <q-btn
            push
            color="pink-4"
            :size="$q.screen.lt.sm ? 'md' : 'lg'"
            label="Donate Now"
            icon="favorite"
            icon-right="favorite"
            :style="$q.screen.lt.sm ? '' : 'width: 20em'"
          />
        </div>
      </div>
    </div>
  </q-banner>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class BenefeciaryContent extends Vue {
  name: string = "benefeciary-content";

  // UI Local Data
  slide: number = 1;
}
</script>

<style></style>
