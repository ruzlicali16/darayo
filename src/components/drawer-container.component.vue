<template>
  <q-drawer
    :content-class="userRole == 'client' ? 'bg-grey-9 text-white' : 'bg-white text-grey-9'"
    v-model="rightDrawer"
    side="left"
    :overlay="userRole == 'client'"
    :behavior="userRole == 'admin' && !$q.screen.lt.sm  ? 'desktop' : 'mobile'"
    elevated
    :width="$q.screen.lt.sm ? 250 : 300"
  >
    <ClientDrawerContent v-if="userRole == 'client'" />
    <AdminDrawerContent v-else-if="userRole == 'admin'" />
  </q-drawer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ClientDrawerContent from "./drawer-components/client-drawer.content.vue";
import AdminDrawerContent from "./drawer-components/admin-drawer.content.vue";

@Component({
  components: { ClientDrawerContent, AdminDrawerContent }
})
export default class DrawerContainer extends Vue {
  name: string = "drawer-container";

  // Auth Data
  userRole: any = "";

  created() {
    this.getUserRole();
    console.log(this.$store.getters["authService/savedUserInfoLoggedIn"]);
  }

  // Methods
  getUserRole() {
    var user = this.$store.getters["authService/savedUserInfoLoggedIn"];
    if (user) {
      this.userRole = user.role;
    } else {
      console.log("No Users!");
    }
  }

  // UI Logic
  get rightDrawer(): boolean {
    return this.$store.state.siteNav.rightDrawer;
  }
  set rightDrawer(val: boolean) {
    this.$store.commit("siteNav/rightDrawer", val);
  }
}
</script>

<style></style>
