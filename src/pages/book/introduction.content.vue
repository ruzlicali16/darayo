<template>
  <q-parallax
    src="https://firebasestorage.googleapis.com/v0/b/darayo-web.appspot.com/o/static-images%2Flibrary.jpg?alt=media&token=41b326a6-c505-47b1-9ba2-08ce4f46f749"
    :height="$q.screen.lt.sm ? 800 : 650"
  >
    <div class="col">
      <q-card
        class="my-card bg-transparent float-left"
        :class="$q.screen.lt.sm ? '' : 'q-gutter-y-md'"
        flat
      >
        <q-card-section
          :style="$q.screen.lt.sm ? 'padding-top: 20rem' : 'padding-top: 10rem'"
        >
          <div
            class="text-overline text-white text-weight-bold"
            :style="$q.screen.lt.sm ? 'font-size: 3em' : 'font-size: 5em'"
          >
            Meranaw Books Collection
          </div>
        </q-card-section>
        <q-card-actions vertical align="left">
          <q-btn
            class="q-mb-xs"
            fab
            :text-color="storyText"
            :color="storyBg"
            label="Story Books"
            v-scroll-to="'#story-book'"
            :style="
              $q.screen.lt.sm
                ? 'width: 20em; font-size: 15px'
                : 'width: 20em; font-size: 20px'
            "
          />
          <q-btn
            fab
            :text-color="coloringText"
            :color="coloringBg"
            label="Coloring Books"
            v-scroll-to="'#coloring-book'"
            :style="
              $q.screen.lt.sm
                ? 'width: 20em; font-size: 15px'
                : 'width: 20em; font-size: 20px'
            "
          />
        </q-card-actions>
        <q-separator class="q-mt-xl" />
      </q-card>
    </div>
  </q-parallax>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -110,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
@Component
export default class IntroductionContent extends Vue {
  name: string = "introduction-content";

  // UI Local Data
  storyText: string = "white";
  storyBg: string = "deep-orange";
  coloringText: string = "white";
  coloringBg: string = "accent";
}
</script>

<style></style>
