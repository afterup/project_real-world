import Vue from "vue";
import VueRouter from "vue-router";
import JwtService from "@/common/jwt.service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/views/ArticleBoard.vue")
  },
  {
    path: "/article/:slug",
    name: "article",
    component: () => import("@/views/ArticleView.vue"),
    meta: {
      requiresAuth: true
    },
    props: true
  },
  {
    path: "/post",
    name: "post",
    component: () => import("@/views/ArticleCreate.vue")
  },
  {
    path: "/edit/:slug",
    name: "edit",
    component: () => import("@/views/ArticleUpdate.vue"),
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
