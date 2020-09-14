import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { SiteContentState } from "./state";

const getters: GetterTree<SiteContentState, StateInterface> = {
  storyBooks(state) {
    return state.storyBooks;
  },
  storyBookTrends(state) {
    return state.storyBookTrends;
  },
  coloringBooks(state) {
    return state.coloringBooks;
  }
};

export default getters;
