<template>
  <div
    :class="$q.screen.lt.sm ? 'q-gutter-y-md' : 'q-gutter-y-lg'"
    class="row q-pt-md justify-center"
  >
    <div
      :class="$q.screen.lt.sm ? 'text-h6 q-pt-sm' : 'text-h5 q-pb-md'"
      class="col-12 text-center text-grey-8 text-weight-bolder"
    >
      Meranaw Coloring Books
      <q-icon name="palette" />
    </div>

    <div
      v-for="(book, index) in coloringBooks"
      :key="index"
      :class="$q.screen.lt.sm ? 'col-6' : 'col-3'"
    >
      <q-card
        class="my-card my-card border cursor-pointer"
        :class="$q.screen.lt.sm ? ' q-mx-sm' : ' q-mx-md'"
      >
        <q-img
          :src="require(`../../assets/${book.image}`)"
          basic
          spinner-color="deep-orange"
          spinner-size="3rem"
          style="max-height: 50%;"
          :style="$q.screen.lt.sm ? 'height: 200px' : 'height: 350px'"
        >
          <div class="absolute-bottom text-subtitle2" style="padding: 5px; ">
            <q-card-actions class="q-pa-none" align="between">
              {{ book.title }}
              <q-btn
                dense
                round
                color="deep-orange"
                icon="book"
                :size="$q.screen.lt.sm ? 'sm' : 'md'"
              >
                <q-tooltip
                  v-if="!$q.screen.lt.sm"
                  content-class="bg-deep-orange"
                  :offset="[10, 10]"
                >
                  Read
                </q-tooltip>
              </q-btn>
            </q-card-actions>
          </div>
        </q-img>
      </q-card>
    </div>

    <div class="row text-center q-gutter-y-xs">
      <div
        class="col-12 text-weight-light text-grey-8"
        :class="this.$q.screen.lt.sm ? 'text-h6' : 'text-h4'"
      >
        Check out our growing library
      </div>
      <div class="col-12" :class="$q.screen.lt.sm ? 'q-px-md' : ''">
        <q-btn
          :class="$q.screen.lt.sm ? 'full-width' : ''"
          push
          :size="$q.screen.lt.sm ? 'md' : 'xl'"
          color="blue"
          label="Browse Library"
          icon="pageview"
          to="/books"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class ColoringBookContent extends Vue {
  name: string = "coloring-book-content";

  // UI Store Getters
  get coloringBooks() {
    return this.$store.state.siteContent.coloringBooks;
  }
}
</script>

<style></style>
