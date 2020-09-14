<template>
  <q-page>
    <title>Home | Darayo</title>
    <IntroductionContent
      :style="$q.screen.lt.sm ? 'margin-bottom: 40px' : 'margin-bottom: 90px'"
    />
    <StoryBookContent
      :style="$q.screen.lt.sm ? 'margin-bottom: 10px' : 'margin-bottom: 20px'"
    />
    <ColoringBookContent
      :style="$q.screen.lt.sm ? 'margin-bottom: 70px' : 'margin-bottom: 90px'"
    />
    <BenefeciaryContent
      id="beneficiaries"
      :style="$q.screen.lt.sm ? 'margin-bottom: 60px' : 'margin-bottom: 90px'"
    />
    <AboutUsContent
      id="about-us"
      :style="$q.screen.lt.sm ? 'margin-bottom: 90px' : 'margin-bottom: 90px'"
    />
    <PartnerContent
      id="partners"
      :style="$q.screen.lt.sm ? 'margin-bottom: 40px' : 'margin-bottom: 40px'"
    />
    <ContactContent />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import IntroductionContent from "./home/introduction.content.vue";
import StoryBookContent from "./home/story-book.content.vue";
import ColoringBookContent from "./home/coloring-book.content.vue";
import BenefeciaryContent from "./home/benefeciary.content.vue";
import AboutUsContent from "./home/about.content.vue";
import PartnerContent from "./home/partner.content.vue";
import ContactContent from "./home/contact.content.vue";

@Component({
  components: {
    IntroductionContent,
    StoryBookContent,
    ColoringBookContent,
    BenefeciaryContent,
    AboutUsContent,
    PartnerContent,
    ContactContent
  }
})
export default class HomeContainerPage extends Vue {}
</script>

<style></style>
