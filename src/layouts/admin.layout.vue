<template>
  <q-layout view="hHh lpR fff">
    <Header />
    <Drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "components/main-components/header.component.vue";
import Drawer from "components/drawer-container.component.vue";
import Footer from "components/main-components/footer.component.vue";
import PageScroller from "components/main-components/page-scroller.component.vue";
import PageStickyButton from "components/main-components/page-sticky.component.vue";

@Component({
  components: { Header, Drawer, Footer, PageScroller, PageStickyButton }
})
export default class AdminLayout extends Vue {
  name: string = "admin-layout";

  // UI Logic
  get bookPage(): boolean {
    return this.$store.state.siteNav.bookPage;
  }
}
</script>

<style></style>
