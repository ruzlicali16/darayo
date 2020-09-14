import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    meta: { requiresAuth: true },
    component: () => import("layouts/main.layout.vue"),
    children: [
      { path: "", component: () => import("pages/home-container.page.vue") },
      {
        path: "books",
        component: () => import("pages/book-container.page.vue")
      }
    ]
  },
  {
    path: "/",
    meta: { requiresAuth: true },
    component: () => import("layouts/main.layout.vue"),
    children: [
      { path: "dashboard", component: () => import("pages/admin/dashboard-container.page.vue") },
      { path: "manage-books", component: () => import("pages/admin/manage-books.container.page.vue") },
    ]
  },
  {
    path: "/",
    meta: { requiresGuest: true },
    component: () => import("layouts/auth.layout.vue"),
     children: [
      { path: "login", component: () => import("pages/auth/login.page.vue") },
      {
        path: "signup",
        component: () => import("pages/auth/signup.page.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
