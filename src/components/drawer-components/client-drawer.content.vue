<template>
  <q-scroll-area class="fit">
    <div :style="$q.screen.lt.sm ? '' : 'margin-top: 15px'">
      <q-toolbar>
        <q-btn
          color="red-5"
          icon="close"
          size="md"
          flat
          dense
          round
          @click="drawerClosed"
        />
        <q-toolbar-title>
          <div
            class="text-green text-overline text-weight-light float-right"
            :style="$q.screen.lt.sm ? 'font-size: 15px' : 'font-size: 25px'"
          >
            Da<span class="text-yellow-8">ra</span
            ><span class="text-red-5">yo</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <div class="text-center">
        <q-btn
          color="white"
          text-color="red"
          icon="favorite"
          label="Donate Now"
          style="width: 20em"
          icon-right="favorite"
          type="a"
          target="_blank"
          href="https://web.facebook.com/Darayo-Develop-Aspire-and-Revitalize-the-Artistry-of-Young-Optimist-105131947731641/?epa=SEARCH_BOX"
        />
      </div>
      <div
        class="q-py-sm text-overline text-center"
        :style="this.$q.screen.lt.sm ? '' : 'font-size: 1em'"
      >
        Menu
      </div>

      <q-list v-for="(menuItem, index) in menuLists" :key="index">
        <q-item
          class="q-ml-sm"
          clickable
          exact-active-class="bg-grey-8 text-white"
          :to="menuItem.to"
          exact
          v-ripple
          style="
          border-radius:50px 5px 5px 50px;
      "
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" size="xs" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
      </q-list>

      <div class="text-center fixed-bottom">
        <q-btn
          color="red-5"
          text-color="white"
          label="Contact Us"
          style="width: 20em"
          icon="fab fa-facebook"
          type="a"
          target="_blank"
          href="https://quasar.dev/start/pick-quasar-flavour"
        />

        <div class="text-caption q-pt-md">
          <div class="q-ma-none text-weight-bolder">Location:</div>
          4th Street, Bo.Salam, MSU Marawi City
        </div>
        <q-toolbar class="q-pb-md">
          <q-toolbar-title
            class="text-overline"
            :class="
              this.$q.screen.lt.sm ? 'text-center' : 'q-pa-none q-ma-none'
            "
          >
            <q-btn
              v-for="(socialMedia, index) in socialMedias"
              :key="index"
              flat
              round
              size="sm"
              type="a"
              :icon="socialMedia.icon"
            />

            | Meranaw Folktales <q-icon name="copyright" size="xs" />
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </div>
  </q-scroll-area>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
const menuList = [
  {
    icon: "fas fa-home",
    label: "Home",
    to: "/"
  },
  {
    icon: "fas fa-book-open",
    label: "Books",
    to: "/books"
  },
  {
    icon: "fas fa-heart",
    label: "Beneficiaries"
  },
  {
    icon: "fas fa-thumbs-up",
    label: "Partnership"
  },
  {
    icon: "fas fa-question-circle",
    label: "About Us"
  }
];
const socialMedia = [
  {
    icon: "fab fa-twitter",
    href: ""
  },
  {
    icon: "fab fa-instagram",
    href: ""
  },
  {
    icon: "fab fa-linkedin",
    href: ""
  }
];
@Component
export default class ClientDrawerContent extends Vue {
  name: string = "client-drawer-content";

  // UI Local Data
  menuLists = menuList;
  socialMedias = socialMedia;

  // UI Logic
  drawerClosed(): void {
    this.rightDrawer = false;
  }
  get rightDrawer(): boolean {
    return this.$store.state.siteNav.rightDrawer;
  }
  set rightDrawer(val: boolean) {
    this.$store.dispatch("siteNav/rightDrawer", val);
  }
}
</script>

<style></style>
