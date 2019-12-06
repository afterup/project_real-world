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
    path: "/article/:slug",
    name: "article",
    component: () => import("@/pages/PostPage.vue"),
    props: true
  },
  {
    path: "/edit/:slug?",
    name: "edit",
    meta: {
      requiresAuth: true
    },
    component: () => import("@/pages/EditorPage.vue"),
    props: true
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/pages/NotFoundPage.vue")
  },
  {
    path: "*",
    redirect: { name: "404" }
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
