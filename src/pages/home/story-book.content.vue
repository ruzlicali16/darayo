<template>
  <div
    :class="$q.screen.lt.sm ? 'q-gutter-y-md' : 'q-gutter-y-lg'"
    class="row q-pt-md justify-center"
  >
    <div
      :class="$q.screen.lt.sm ? 'text-h4 q-px-md' : 'text-h3'"
      class="col-12 text-center text-deep-orange text-weight-bolder "
    >
      Let’s Look at Some storyBooks!
    </div>

    <div
      :class="$q.screen.lt.sm ? 'text-h6 q-pt-sm' : 'text-h5 q-pb-md'"
      class="col-12 text-center text-grey-8 text-weight-bolder"
    >
      Meranaw Folktales
      <q-icon name="book" />
    </div>

    <div
      v-for="(book, index) in storyBookTrends"
      :key="index"
      :class="$q.screen.lt.sm ? 'col-12' : 'col-5'"
    >
      <q-card
        class="my-card cursor-pointer"
        :class="$q.screen.lt.sm ? 'q-mx-sm ' : 'q-mx-md shadow-10'"
      >
        <q-img
          :src="require(`../../assets/${book.image}`)"
          basic
          spinner-color="blue"
          spinner-size="3rem"
          style="max-height: 50%;"
          :style="$q.screen.lt.sm ? 'height: 300px' : 'height: 500px'"
        />

        <q-card-section
          :class="$q.screen.lt.sm ? 'q-pa-none q-pt-sm q-pl-sm' : ''"
        >
          <!-- <div class="text-caption text-orange-9">{{ book.caption }}</div> -->
          <div
            :class="
              $q.screen.lt.sm ? 'q-py-xs text-subtitle2' : 'text-h5 q-mt-sm'
            "
          >
            {{ book.title }}
          </div>
          <div class="text-caption text-grey"></div>
        </q-card-section>
        <q-card-actions class="q-gutter-y-sm" align="center">
          <q-btn
            class="full-width"
            label="Summary"
            text-color="blue"
            flat
            :size="$q.screen.lt.sm ? 'sm' : 'md'"
            :icon="book.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section
                class=""
                :class="
                  $q.screen.lt.sm ? 'q-pa-none text-caption' : 'text-subitle1'
                "
              >
                {{ book.summary }}
              </q-card-section>
            </div>
          </q-slide-transition>
          <q-btn
            class="full-width"
            label="Read Full Story"
            icon-right="book"
            color="blue"
            :size="$q.screen.lt.sm ? 'sm' : 'md'"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
@Component
export default class StoryBookContent extends Vue {
  name: string = "story-book-content";

  // UI Local Data
  expanded: boolean = false;

  // UI Store Getters
  get storyBookTrends() {
    return this.$store.state.siteContent.storyBookTrends;
  }
}
</script>

<style></style>
