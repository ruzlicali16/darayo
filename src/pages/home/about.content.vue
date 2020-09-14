<template>
  <div :class="this.$q.screen.lt.sm ? '' : 'row'" class="justify-center">
    <div class="col-12 text-center q-py-md">
      <div
        :class="this.$q.screen.lt.sm ? 'q-pb-sm text-h4 q-px-md' : 'q-pb-md'"
        class="col-12 text-center text-h3 text-red-5 text-weight-bolder"
        style="font-family: inherit"
      >
        About Us
      </div>
      <div
        class="text-overline text-grey-9"
        :class="this.$q.screen.lt.sm ? 'q-px-md' : ''"
        style="font-size: 20px"
      >
        Meranaw Folktales Brought to Life 💜
      </div>
    </div>
    <div
      class="col-5 text-center text-overline text-grey-9 text-weight-light"
      :class="this.$q.screen.lt.sm ? 'q-pb-md q-px-md' : ''"
      :style="this.$q.screen.lt.sm ? 'font-size: 15px' : 'font-size: 20px'"
    >
      <div
        :class="this.$q.screen.lt.sm ? 'q-pb-md text-h5' : 'q-pb-md text-h4'"
      >
        Mission
      </div>
      {{ mission }}
    </div>
    <div
      class="col-5 text-center text-overline text-grey-9 text-weight-light"
      :class="this.$q.screen.lt.sm ? 'q-px-md' : ''"
      :style="this.$q.screen.lt.sm ? 'font-size: 15px' : 'font-size: 20px'"
    >
      <div
        :class="this.$q.screen.lt.sm ? 'q-pb-md text-h5' : 'q-pb-md text-h4'"
      >
        Vision
      </div>
      {{ vision }}
    </div>

    <div
      :class="this.$q.screen.lt.sm ? 'q-px-md q-pt-md' : 'q-pt-lg text-center'"
    >
      <q-btn
        class="full-width"
        push
        :size="this.$q.screen.lt.sm ? 'md' : 'lg'"
        color="yellow-8"
        label="Know more About Us?"
        icon="loyalty"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class AboutContent extends Vue {
  name: string = "about-content";

  // UI Local Data
  mission: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque a
      deleniti pariatur, rerum assumenda ab architecto ea voluptate unde. Unde
      ad hic nihil beatae illo perspiciatis repellendus dicta consectetur
      magnam.`;
  vision: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque a
      deleniti pariatur, rerum assumenda ab architecto ea voluptate unde. Unde
      ad hic nihil beatae illo perspiciatis repellendus dicta consectetur
      magnam.`;
}
</script>

<style></style>
