<template>
  <div>
    <q-banner
      :class="this.$q.screen.lt.sm ? 'q-pb-xl' : 'q-py-xl'"
      class="bg-white  text-black text-center"
    >
      <div class="text-h3">
        Let’s be friends
      </div>
      <div class="q-pb-lg text-subtitle1 text-grey-8">
        "Giginawae tano saya"
      </div>
      <div class="row justify-center">
        <div
          class="text-center text-overline text-w
          eight-regular"
          :class="$q.screen.lt.sm ? '' : 'col-7'"
          style="font-size: 15px"
        >
          Follow Darayo for new knowledge, books, meranaw culture and tradition
          resources and a community committed to spending the love of art and
          reading
        </div>
      </div>
      <div>
        <q-btn round flat icon="fab fa-facebook" color="blue" />
        <q-btn round flat icon="fab fa-twitter" color="blue-10" />
        <q-btn round flat icon="fab fa-instagram" color="red-5" />
        <q-btn round flat icon="fab fa-linkedin" color="indigo-10" />
      </div>
    </q-banner>
    <q-banner class="bg-blue-6 text-white text-center q-py-xl">
      <div class="text-h3 text-wight text-weight-bolder">
        The love of reading starts here
        <q-icon name="favorite" color="red-2" />
      </div>

      <q-btn
        class="q-mt-md"
        outlined
        :color="color"
        text-color="blue"
        :size="this.$q.screen.lt.sm ? 'md' : 'xl'"
        icon="menu_book"
        label="Browse Now"
        to="/books"
        dark
        @mouseover="color = 'black'"
        @mouseout="color = 'white'"
      />
    </q-banner>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class ContactContent extends Vue {
  name: string = "contact-content";

  // UI Local Data
  color: string = "white";
}
</script>

<style></style>
