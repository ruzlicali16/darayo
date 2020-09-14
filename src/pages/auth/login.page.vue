<template>
  <q-layout>
    <q-page-container>
      <q-page class="background flex flex-center">
        <title>Login | eGib</title>
        <q-ajax-bar
          ref="bar"
          position="top"
          color="white"
          size="4px"
          skip-hijack
        />
        <q-card
          class="shadow-10"
          v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="80px" class="absolute-center shadow-10">
              <q-img src="~assets/profile.svg" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-md">
              <div class="text-h6 text-bold text-deep-orange q-pr-sm">
                Darayo
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md q-pb-md">
              <q-input
                ref="username"
                v-model="username"
                label="Email address"
                color="deep-orange"
                dense
                filled
                lazy-rules
                hide-bottom-space
                :rules="[
                  val => (val && val.length > 0) || 'Enter your Email adress *'
                ]"
              />
              <q-input
                ref="password"
                :type="showpassword ? 'text' : 'password'"
                v-model="password"
                label="Password"
                color="deep-orange"
                dense
                filled
                lazy-rules
                hide-bottom-space
                :rules="[
                  val => (val && val.length > 0) || 'Enter your Passwrd *'
                ]"
                @keypress.enter="login"
              >
                <template v-slot:append>
                  <q-icon
                    :name="showpassword ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="showpassword = !showpassword"
                  />
                </template>
              </q-input>
              <q-card-actions class="q-pt-none" align="center">
                <q-btn
                  no-caps
                  class="full-width"
                  label="Login"
                  type="button"
                  color="deep-orange"
                  :disable="onLoading"
                  :loading="onLoading"
                  @click="login"
                />
                <q-btn
                  no-caps
                  class="full-width"
                  flat
                  label="Signup"
                  type="button"
                  color="deep-orange"
                  @click="signup"
                />
              </q-card-actions>
            </q-form>
            <div class="absolute-bottom text-center">
              <div class="row fit items-center justify-center">
                <div class="text-grey-6 text-caption text-weight-regular">
                  Darayo
                  <q-icon name="copyright" />
                  {{ currentYear }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
interface Login extends Vue {
  validate(): void;
  start(): void;
  stop(): void;
  hasError: boolean;
}
import { date } from "quasar";
import { Vue, Component } from "vue-property-decorator";
import { auth, db } from "src/firestore/firebaseInit";

@Component
export default class LoginPage extends Vue {
  name: string = "LoginPage";
  $refs!: {
    username: Login;
    password: Login;
    bar: Login;
  };

  // UI Data
  onLoading: boolean = false;
  // Auth Data
  showpassword: boolean = false;
  username: string = "";
  password: string = "";
  // Local Data
  currentYear: string = "";

  created() {
    this.currentDate();
  }

  // Methods
  login() {
    this.$refs.username.validate();
    this.$refs.password.validate();
    if (!this.$refs.username.hasError && !this.$refs.password.hasError) {
      this.onLoading = true;
      const bar = this.$refs.bar;
      bar.start();
      auth
        .signInWithEmailAndPassword(this.username, this.password)
        .then((user: any) => {
          db.collection("users")
            .doc(user.user.uid)
            .get()
            .then((doc: any) => {
              let userRole = doc.data().role;
              if (userRole == "client") {
                if (this.$route.path !== "/") {
                  console.log("Logged In as Client");
                  this.$router.replace("/");
                  this.$refs.bar.stop();
                  this.onLoading = false;
                }
              } else if (userRole = "admin") {
                 if (this.$route.path !== "/dashboard") {
                  console.log("Logged In as Admin");
                  this.$router.replace("/dashboard");
                  this.$refs.bar.stop();
                  this.onLoading = false;
                }
              }
            });
        })
        .catch(err => {
          this.$q.notify({
            type: "negative",
            message: `ERROR: ${err.message}`,
            caption: "Please try again.",
            timeout: 4000
          });
          this.$refs.bar.stop();
          this.onLoading = false;
        });
    } else {
      this.$refs.bar.stop();
      this.onLoading = false;
    }
  }
  signup() {
    if (this.username != "" && this.password != "") {
      this.$q
        .dialog({
          title: "Discard",
          message: "Are you sure to discard inputs?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.$router.replace("/signup");
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
    } else {
      this.$router.replace("/signup");
    }
  }
  currentDate() {
    let timeStamp = Date.now();
    this.currentYear = date.formatDate(timeStamp, "YYYY");
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
</style>
