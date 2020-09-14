<template>
  <div>
    <div class="row">
      <div class="col-12">
        <q-img
          src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/118472071_178020693776099_8720391410695437442_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHJz1pjUuQlC3RVFAUpHPhCd_6Efaw4b_53_oR9rDhv_j91GR_S9duOoMGWm0J8pW2QC5kFBP_UKeQmtk-15IuC&_nc_ohc=Xf2BDLCIGawAX9WpvLX&_nc_ht=scontent.fmnl4-1.fna&oh=6ea329d5d3bd3bba5668d8e2ea2f923f&oe=5F834AEA"
          style="height: 250px"
        >
        </q-img>
      </div>
      <div class="col-12 q-pt-sm">
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
              <q-icon :name="menuItem.icon" size="20px" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-12 absolute-bottom text-center">
        <div class="text-overline text-grey-7">Darayo Org <q-icon name="copyright" size="xs" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
const menuList = [
  {
    icon: "dashboard",
    label: "Dashboard",
    to: "/dashboard"
  },
  {
    icon: "library_books",
    label: "Manage Books",
    to: "/manage-books"
  },
  {
    icon: "supervisor_account",
    label: "Manage Accounts"
  }
];
@Component
export default class AdminDrawerContent extends Vue {
  name: string = "admin-drawer-content";

  // UI Local Data
  menuLists = menuList;

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
