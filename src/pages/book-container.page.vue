<template>
  <q-page>
    <title>Books | Darayo</title>
    <Intro
      :style="$q.screen.lt.sm ? 'margin-bottom: 40px' : 'margin-bottom: 90px'"
    />
    <StoryBook
      id="story-book"
      :style="$q.screen.lt.sm ? 'margin-bottom: 40px' : 'margin-bottom: 90px'"
    />
    <q-separator
      inset
      :style="$q.screen.lt.sm ? 'margin-bottom: 40px' : 'margin-bottom: 60px'"
    />
    <ColoringBook
      id="coloring-book"
      :style="$q.screen.lt.sm ? 'margin-bottom: 40px' : 'margin-bottom: 90px'"
    />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Intro from "./book/introduction.content.vue";
import StoryBook from "./book/story-book.content.vue";
import ColoringBook from "./book/coloring-book.content.vue";

@Component({
  components: {
    Intro,
    StoryBook,
    ColoringBook
  }
})
export default class BookContainerPage extends Vue {
  name: string = "book-container-page";

  beforeCreate() {
    this.bookPage = true;
  }
  // UI Logic
  get bookPage(): boolean {
    return this.$store.state.siteContent.bookPage;
  }
  set bookPage(val: boolean) {
    this.$store.commit("siteNav/bookPage", val);
  }

  beforeDestroy() {
    this.bookPage = false;
  }
}
</script>

<style></style>
