<template>
  <q-parallax
    src="https://firebasestorage.googleapis.com/v0/b/darayo-web.appspot.com/o/static-images%2Fkid1.jpg?alt=media&token=13447728-3c1f-4fd9-a0d6-94749494511a"
    :height="$q.screen.lt.sm ? 800 : 650"
  >
    <div class="text-white" :class="this.$q.screen.lt.sm ? '' : 'row'">
      <div
        class="col-6"
        :class="this.$q.screen.lt.sm ? 'q-px-md text-center' : 'q-px-xl'"
        :style="this.$q.screen.lt.sm ? 'margin-top: 10px' : ''"
      >
        <div
          :class="
            $q.screen.lt.sm ? 'q-gutter-y-md q-pb-md' : 'q-gutter-y-md q-pb-md'
          "
        >
          <div
            class="text-overline text-weight-bold"
            :style="$q.screen.lt.sm ? 'font-size: 3em' : 'font-size: 4em'"
          >
            Welcome to
          </div>
          <div
            class="text-overline text-weight-bold"
            :style="$q.screen.lt.sm ? 'font-size: 3em' : 'font-size: 4em'"
          >
            Darayo
          </div>
          <div
            class="text-overline text-weight-bold"
            :style="$q.screen.lt.sm ? 'font-size: 3em' : 'font-size: 4em'"
          >
            Online library
          </div>
        </div>
        <div
          :class="$q.screen.lt.sm ? 'text-h6 text-weight-regular' : 'text-h5'"
        >
          {{ intro }}
        </div>
        <div class="text-subtitle1 text-grey-9"></div>
        <div class="q-pt-lg text-center">
          <q-btn
            class="full-width"
            push
            :size="this.$q.screen.lt.sm ? 'md' : 'lg'"
            color="red-5"
            label="Contact Us"
            icon="fab fa-facebook"
          />
        </div>
      </div>
      <div
        class="col-12 text-center"
        :style="$q.screen.lt.sm ? 'padding-top: 100px' : 'padding-top: 90px'"
      >
        <q-icon
          class="animate__animated animate__bounce animate__slow animate__infinite"
          name="expand_more"
          :size="$q.screen.lt.sm ? 'lg' : 'xl'"
        />
      </div>
    </div>
  </q-parallax>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class IntroductionContent extends Vue {
  name: string = "introduction-content";

  // UI Local Data
  intro: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        voluptate sunt beatae nulla, aspernatur adipisci voluptates blanditiis
        facere esse provident laudantium sequi est commodi deleniti quaerat et
        odit quo laboriosam!`;
}
</script>

<style></style>
