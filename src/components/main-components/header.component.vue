<template>
  <q-header
    :bordered="user.role == 'client'"
    class="bg-grey-9 text-white"
    :elevated="$q.screen.lt.sm"
    :class="$q.screen.lt.sm ? '' : 'q-py-md'"
  >
    <q-toolbar>
      <q-btn
        :class="this.$q.screen.lt.sm ? 'q-mr-xs' : 'q-mr-md'"
        icon="menu"
        dense
        flat
        round
        @click="rightDrawer = !rightDrawer"
      />
      <div
        v-if="!this.$q.screen.lt.sm && !bookPage && user.role == 'client'"
        class="q-gutter-x-sm"
      >
        <q-btn
          class="text-overline"
          push
          v-for="(button, index) in buttons"
          :key="index"
          v-scroll-to="link"
          :color="button.color"
          :label="button.label"
          @click="scrollTo(button.label)"
        />
      </div>
      <q-toolbar-title
        class="text-h4"
        :class="$q.screen.lt.sm ? 'q-pa-none' : 'q-pl-md'"
      >
        <div
          class="text-green text-overline text-weight-light"
          :style="this.$q.screen.lt.sm ? 'font-size: 20px' : 'font-size: 30px'"
        >
          Da<span class="text-yellow-8">ra</span
          ><span class="text-red-5">yo</span>
        </div>
      </q-toolbar-title>
      <q-btn
        v-if="user.role == 'client'"
        class="text-overline"
        push
        round
        flat
        dense
        text-color="white"
        icon="search"
        size="md"
        :style="$q.screen.lt.sm ? 'margin-right: 5px' : 'margin-right: 10px'"
      />
      <div
        v-if="user.role == 'admin'"
        class="q-pr-md "
        :class="$q.screen.lt.sm ? 'text-caption' : 'text-h5'"
      >
        @Administrator
      </div>
      <q-btn
        v-if="!userLoggedIn"
        class="text-overline"
        push
        color="white"
        text-color="blue"
        label="login"
        :size="this.$q.screen.lt.sm ? 'sm' : 'md'"
        :style="
          this.$q.screen.lt.sm
            ? 'margin-right: 5px'
            : 'width: 200px; margin-right: 5px'
        "
        to="/login"
      />
      <q-btn v-else round color="white" size="sm">
        <q-avatar size="28px">
          <img
            v-if="user.role == 'client'"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          />
          <img
            v-else-if="user.role == 'admin'"
            src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/118472071_178020693776099_8720391410695437442_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHJz1pjUuQlC3RVFAUpHPhCd_6Efaw4b_53_oR9rDhv_j91GR_S9duOoMGWm0J8pW2QC5kFBP_UKeQmtk-15IuC&_nc_ohc=Xf2BDLCIGawAX9WpvLX&_nc_ht=scontent.fmnl4-1.fna&oh=6ea329d5d3bd3bba5668d8e2ea2f923f&oe=5F834AEA"
          />
          <!-- <q-icon name="person" color="grey-9" size="sm" /> -->
        </q-avatar>

        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
          :offset="[0, 15]"
          content-style="width: 250px"
        >
          <div class="row no-wrap q-pa-md justify-center">
            <div class="column items-center text-center q-mx-xs">
              <q-avatar size="100px">
                <img
                  v-if="user.role == 'client'"
                  src="https://cdn.quasar.dev/img/avatar4.jpg"
                />
                <img
                  v-else-if="user.role == 'admin'"
                  src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/118472071_178020693776099_8720391410695437442_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHJz1pjUuQlC3RVFAUpHPhCd_6Efaw4b_53_oR9rDhv_j91GR_S9duOoMGWm0J8pW2QC5kFBP_UKeQmtk-15IuC&_nc_ohc=Xf2BDLCIGawAX9WpvLX&_nc_ht=scontent.fmnl4-1.fna&oh=6ea329d5d3bd3bba5668d8e2ea2f923f&oe=5F834AEA"
                />
              </q-avatar>
              <div class="text-subtitle1 text-bold q-mt-md">
                {{ user.fullname }} 
              </div>
              <div class="text-caption text-grey-7 q-mb-lg">
                {{ user.email }}
              </div>
              <q-btn
                color="deep-orange"
                label="Logout"
                push
                size="11px"
                @click="logout"
              />
            </div>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
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

import { Vue, Component } from "vue-property-decorator";
import { auth, db } from "src/firestore/firebaseInit";

@Component
export default class Header extends Vue {
  name: string = "header-component";

  // Auth Data
  user: any = "";
  // UI Local Data
  link: string = "";
  buttons: any[] = [
    {
      label: "Beneficiaries",
      color: "green"
    },
    {
      label: "About Us",
      color: "yellow-8"
    },

    {
      label: "Partners",
      color: "red-5"
    }
  ];

  created() {
    this.getuserProfile();
  }

  // UI Logic
  get rightDrawer(): boolean {
    return this.$store.state.siteNav.rightDrawer;
  }
  set rightDrawer(val: boolean) {
    this.$store.dispatch("siteNav/rightDrawer", val);
  }
  get bookPage(): boolean {
    return this.$store.state.siteNav.bookPage;
  }
  set bookPage(val: boolean) {
    this.$store.dispatch("siteNav/bookPage", val);
  }
  get userLoggedIn() {
    return this.$store.getters["authService/userToken"];
  }

  // Methods
  getuserProfile() {
    let user = this.$store.getters["authService/userToken"];
    let savedUserInfo = this.$store.getters[
      "authService/saveduserInfoLoggedIn"
    ];
    if (savedUserInfo) {
      this.user = savedUserInfo;
    } else {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc: any) => {
          let payload = doc.data();
          this.$store.commit("authService/savedUserInfoLoggedIn", payload);
          this.user = payload;
        });
    }
  }

  logout() {
    auth.signOut().then(() => {
      this.$router.replace("/login");
      console.log("Logged out!", this.$store.getters["authSerivce/userToken"]);
    });
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
