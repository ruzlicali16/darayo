import { route } from "quasar/wrappers";
import VueRouter from "vue-router";
import { Store } from "vuex";
import { StateInterface } from "../store";
import routes from "./routes";
import { auth, db } from "../firestore/firebaseInit";
import { nextTick } from "process";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route<Store<StateInterface>>(function({ Vue, store }) {
  Vue.use(VueRouter);

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach(async (to, from, next) => {
    let userInfo: any = null;
    let userRole: any = null;
    let users: any = null;
    const user = await new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user: any) => {
        if (user) {
          store.commit("authService/userToken", user.toJSON());
          userInfo = user;
          //
        } else {
          store.commit("authService/userToken", null);
          store.commit("authService/savedUserInfoLoggedIn", null);
          userInfo = null;
        }
        resolve(user);
      });
    });

    // const requiresAdmin = to.matched.some(
    //   recordedRoute => recordedRoute.meta.requiresAdmin
    // );
    const requiresAuth = to.matched.some(
      recordedRoute => recordedRoute.meta.requiresAuth
    );
    const requireGuest = to.matched.some(
      recordedRoute => recordedRoute.meta.requiresGuest
    );

    if (requiresAuth) {
      if (!user) {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        let savedUserInfo = store.getters["authService/savedUserInfoLoggedIn"];
        if (savedUserInfo) {
          users = savedUserInfo;
          userRole = users.role;
          if (userRole == "client") {
            if (to.path == "/dashboard" || to.path == "/manage-books") {
              return next({
                path: "/"
              });
            } else {
              next();
            }
          } else if (userRole == "admin") {
            if (to.path == "/" || to.path == "/books") {
              return next({
                path: "/dashboard"
              });
            } else {
              next();
            }
          }
        } else {
          db.collection("users")
            .doc(userInfo.uid)
            .get()
            .then((doc: any) => {
              let payload = doc.data();
              store.commit("authService/savedUserInfoLoggedIn", payload);
              users = payload;
              userRole = users.role;
              if (userRole == "client") {
                if (to.path == "/dashboard" || to.path == "/manage-books") {
                  return next({
                    path: "/"
                  });
                } else {
                  next();
                }
              } else if (userRole == "admin") {
                if (to.path == "/" || to.path == "/books") {
                  return next({
                    path: "/dashboard"
                  });
                } else {
                  next();
                }
              }
            });
        }
      }
    } else if (requireGuest) {
      if (user) {
        next({
          path: "/",
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        next();
      }
    } else {
      console.log("Next");
      next();
    }
  });

  return Router;
});
