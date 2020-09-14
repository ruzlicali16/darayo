import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { AuthServiceState } from "./state";

const getters: GetterTree<AuthServiceState, StateInterface> = {
    userToken(state) {
        if (state.userToken != "") {
          return state.userToken;
        }
      },
      savedUserInfoLoggedIn(state) {
        if (state.savedUserInfoLoggedIn != "") {
          return state.savedUserInfoLoggedIn;
        }
      }
};

export default getters;
