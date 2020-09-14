import { store } from "quasar/wrappers";
import Vuex from "vuex";

import siteNav from "./site-navigation";
import siteContent from "./site-content";
import authService from "./auth-service";
import bookService from "./book-service";
import { SiteNavigationState } from "./site-navigation/state";
import { SiteContentState } from "./site-content/state";
import { AuthServiceState } from "./auth-service/state";
import { BookServiceState } from "./book-service/state";

// last code setup books service

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  siteNav: SiteNavigationState;
  siteContent: SiteContentState;
  authService: AuthServiceState;
  bookService: BookServiceState;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      siteNav,
      siteContent,
      authService,
      bookService
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
