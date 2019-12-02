import Vue from "vue";
import VueRouter from "vue-router";
import JwtService from "@/common/jwt.service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/pages/AuthPage.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/pages/AuthPage.vue")
  },
  {
    path: "/list",
    name: "list",
    component: () => import("@/pages/ListPage.vue")
  },
  {
    path: "/post/:slug",
    name: "post",
    component: () => import("@/pages/PostPage.vue"),
    meta: {
      requiresAuth: true
    },
    props: true
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("@/pages/EditorPage.vue")
  },
  {
    path: "/edit/:slug",
    name: "edit",
    component: () => import("@/pages/EditorPage.vue"),
    meta: {
      requiresAuth: true
    },
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = JwtService.getToken();
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    /* meta: requiresAuth=true일 때 */
    next("/");
    return;
  }
  next();
});

export default router;
