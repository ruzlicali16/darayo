<template>
  <q-layout>
    <q-page-container>
      <q-page class="background flex flex-center">
        <title>Signup | eGib</title>
        <q-card
          class="shadow-10"
          v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '40%' }"
        >
          <q-linear-progress
            v-show="onLoading"
            :indeterminate="onLoading"
            color="deep-orange"
            size="3px"
          />
          <q-card-section>
            <div class="text-center q-pt-md">
              <div class="text-h6 text-bold text-deep-orange q-pr-sm">
                Create Account
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pb-sm">
              <div
                class="col text-subtitle1 text-grey-9 ellipsis text-weight-regular"
              >
                Welcome. We're glad to see you.
              </div>
              <div
                class="col text-caption text-grey-6 ellipsis text-weight-regular"
              >
                Please fill in everything.
              </div>
            </div>
            <q-form class="q-gutter-md q-pb-md">
              <q-input
                ref="username"
                v-model="username"
                label="Email address"
                hint="Use a gmail address or any email address"
                dense
                color="deep-orange"
                outlined
                lazy-rules
                hide-bottom-space
                :rules="[
                  val => (val && val.length > 0) || 'Enter your Email adress *'
                ]"
              />
              <div :class="$q.screen.lt.sm ? 'q-gutter-y-md' : 'row'">
                <div :class="$q.screen.lt.sm ? '' : 'col-6 q-pr-sm'">
                  <q-input
                    ref="firstname"
                    v-model="firstname"
                    label="First name"
                    dense
                    color="deep-orange"
                    outlined
                    lazy-rules
                    hide-bottom-space
                    :rules="[
                      val =>
                        (val && val.length > 0) || 'Enter your First name *'
                    ]"
                  />
                </div>
                <div :class="$q.screen.lt.sm ? '' : 'col-6'">
                  <q-input
                    ref="lastname"
                    v-model="lastname"
                    label="Last name"
                    dense
                    color="deep-orange"
                    outlined
                    lazy-rules
                    hide-bottom-space
                    :rules="[
                      val => (val && val.length > 0) || 'Enter your Last name *'
                    ]"
                  />
                </div>
              </div>
              <q-input
                ref="password"
                type="password"
                v-model="password"
                label="Password"
                dense
                color="deep-orange"
                outlined
                lazy-rules
                hide-bottom-space
                :rules="[
                  val => (val && val.length > 0) || 'Enter your Password *'
                ]"
              />
              <q-input
                type="password"
                v-model="confirmpassword"
                label="Confirm password"
                hint="Use 8 or more characters with a mix of letters, numbers & symbols"
                dense
                color="deep-orange"
                outlined
                lazy-rules
                hide-bottom-space
                @keypress.enter="createAccount"
              >
              </q-input>
              <q-card-actions class="q-pt-none" align="between">
                <q-btn
                  flat
                  no-caps
                  label="Log In instead"
                  type="button"
                  color="deep-orange"
                  to="/login"
                />
                <q-btn
                  no-caps
                  label="Create account"
                  type="button"
                  color="deep-orange"
                  :loading="onLoading"
                  :disable="onLoading"
                  @click="createAccount"
                />
              </q-card-actions>
            </q-form>
            <!-- <div class="absolute-bottom text-center">
              <div class="row fit items-center justify-center">
                <div class="text-grey-6 text-caption text-bold">
                  ITSMarawi
                  <q-icon name="copyright" />
                  2020
                </div>
              </div>
            </div> -->
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
interface Signup extends Vue {
  validate(): void;
  hasError: boolean;
}
import { date } from "quasar";
import { Vue, Component } from "vue-property-decorator";
import { auth, db } from "src/firestore/firebaseInit";

@Component
export default class SignupPage extends Vue {
  $refs!: {
    username: Signup;
    firstname: Signup;
    lastname: Signup;
    password: Signup;
  };

  name: string = "signup-page";

  // Data
  showpassword: boolean = false;
  onLoading: boolean = false;
  username: string = "";
  firstname: string = "";
  lastname: string = "";
  password: string = "";
  confirmpassword: string = "";
  currentDate: string = "";

  // Methods
  getCurrentDate() {
    let timeStamp = Date.now();
    let formattedString = date.formatDate(
      timeStamp,
      "dddd, YYYY/MM/DD - h:mm:ss A"
    );
    return (this.currentDate = formattedString);
  }

  createAccount(): void {
    this.onLoading = true;

    this.getCurrentDate();
    this.$refs.username.validate();
    this.$refs.firstname.validate();
    this.$refs.lastname.validate();
    this.$refs.password.validate();

    if (
      !this.$refs.username.hasError &&
      !this.$refs.password.hasError &&
      !this.$refs.firstname.hasError &&
      !this.$refs.lastname.hasError
    ) {
      if (this.password == this.confirmpassword) {
        auth
          .createUserWithEmailAndPassword(this.username, this.password)
          .then((user: any) => {
            let currentUser: any = user;
            return db
              .collection("users")
              .doc(currentUser.user.uid)
              .set({
                fullname: this.firstname + " " + this.lastname,
                email: this.username,
                timestamp: this.currentDate,
                role: "client"
              })
              .then(() => {
                this.$router.replace("/");
                this.onLoading = false;
              })
              .catch(err => {
                console.log(err.message);
                this.onLoading = false;
              });
          })
          .catch(err => {
            this.$q.notify({
              type: "negative",
              message: `ERROR: ${err.message}`,
              caption: "Please try again.",
              timeout: 4000
            });
            this.onLoading = false;
          });
      } else {
        this.$q.notify({
          type: "warning",
          message: "Your password didn't match to confirm password!",
          caption: "Please enter your password again."
        });
        this.onLoading = false;
        this.password = "";
        this.confirmpassword = "";
      }
    } else {
      this.onLoading = false;
    }
  }
}
</script>

<style>
.background {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
</style>
