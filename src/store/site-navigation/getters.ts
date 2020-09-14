import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { SiteNavigationState } from "./state";

const getters: GetterTree<SiteNavigationState, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
