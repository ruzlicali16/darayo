<template>
  <div>
    <AdminLayout v-if="user.role == 'admin'" />
    <ClientLayout v-if="user.role == 'client'" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { db } from "src/firestore/firebaseInit";
import AdminLayout from "./admin.layout.vue";
import ClientLayout from "./client.layout.vue";

@Component({
  components: { AdminLayout, ClientLayout }
})
export default class MainLayout extends Vue {
  name: string = "main-layout";

  // Auth Data
  user: any = "";

  created() {
    this.getuserProfile();
  }

  // UI Logic
  get bookPage(): boolean {
    return this.$store.state.siteNav.bookPage;
  }

  // Methods
  getuserProfile() {
    let user = this.$store.getters["authService/userToken"];
    if (user) {
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
  }
}
</script>

<style></style>
