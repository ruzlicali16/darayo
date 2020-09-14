import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { SiteNavigationState } from "./state";

const actions: ActionTree<SiteNavigationState, StateInterface> = {
  rightDrawer(context, opened: boolean) {
    context.commit("rightDrawer", opened);
  },
  bookPage(context, opened: boolean) {
    context.commit("bookPage", opened);
  },
  addBookDialog(context, opened: boolean) {
    context.commit("addBookDialog", opened);
  }
};

export default actions;
