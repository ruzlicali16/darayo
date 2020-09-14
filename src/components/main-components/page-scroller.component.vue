<template>
  <q-page-scroller
    expand
    :position="$q.screen.lt.sm ? 'top' : 'bottom-right'"
    :scroll-offset="600"
    :offset="[0, 0]"
  >
    <div
      v-if="$q.screen.lt.sm"
      class="col cursor-pointer q-pa-sm bg-pink text-white text-center"
    >
      Scroll up...
    </div>
    <q-btn
      class="q-ma-md"
      v-else
      fab-mini
      icon="keyboard_arrow_up"
      color="grey-10"
    />
  </q-page-scroller>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PageScroller extends Vue {
  name: string = "page-scroller-component";
}
</script>

<style></style>
