<template>
  <q-page-sticky
    v-if="this.$q.screen.lt.sm"
    position="bottom-right"
    :offset="fabPos"
  >
    <q-fab
      icon="widgets"
      direction="up"
      color="grey-9"
      external-label
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
    >
      <q-fab-action
        v-for="(fabAction, index) in fabActions"
        :key="index"
        label-class="bg-grey-9 text-white"
        external-label
        label-position="left"
        v-scroll-to="link"
        :color="fabAction.color"
        :label="fabAction.label"
        :icon="fabAction.icon"
        @click="scrollTo(fabAction.label)"
      />
    </q-fab>
  </q-page-sticky>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
@Component
export default class PageSticky extends Vue {
  name: string = "page-sticky-component";

  // UI Local Data
  fabActions: any[] = [
    {
      label: "Partners",
      color: "red-5",
      icon: "thumb_up"
    },
    {
      label: "About Us",
      color: "green",
      icon: "info"
    },
    {
      label: "Beneficiaries",
      color: "yellow-8",
      icon: "favorite"
    }
  ];
  fabPos: number[] = [18, 18];
  link: string = "";
  draggingFab: boolean = false;

  // UI Logic
  moveFab(ev: any) {
    this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;

    this.fabPos = [this.fabPos[0] - ev.delta.x, this.fabPos[1] - ev.delta.y];
  }

  scrollTo(val: string) {
    if (val == "About Us") {
      return (this.link = "#about-us");
    } else if (val == "Beneficiaries") {
      return (this.link = "#beneficiaries");
    } else {
      return (this.link = "#partners");
    }
  }
}
</script>

<style></style>
