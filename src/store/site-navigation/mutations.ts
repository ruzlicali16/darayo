import { MutationTree } from "vuex";
import { SiteNavigationState } from "./state";

const mutation: MutationTree<SiteNavigationState> = {
  rightDrawer(state: SiteNavigationState, opened: boolean) {
    state.rightDrawer = opened;
  },
  bookPage(state: SiteNavigationState, opened: boolean) {
    state.bookPage = opened;
  },
  addBookDialog(state: SiteNavigationState, opened: boolean) {
    state.addBookDialog = opened;
  }
};

export default mutation;
