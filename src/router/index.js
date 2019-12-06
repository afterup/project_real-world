import Vue from "vue";
import VueRouter from "vue-router";
import JwtService from "@/common/jwt.service";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/pages/HomePage.vue")
  },
  {
    name: "signin",
    path: "/signin",
    component: () => import("@/pages/AuthPage.vue")
  },
  {
    name: "signup",
    path: "/signup",
    component: () => import("@/pages/AuthPage.vue")
  },
  {
    name: "list",
    path: "/list",
    component: () => import("@/pages/ListPage.vue")
  },
  {
    name: "article",
    path: "/article/:slug",
    component: () => import("@/pages/PostPage.vue"),
    props: true
  },
  {
    name: "edit",
    path: "/edit/:slug?",
    meta: {
      requiresAuth: true
    },
    component: () => import("@/pages/EditorPage.vue"),
    props: true
  },
  {
    name: "mypage",
    path: "/:username",
    component: () => import("@/pages/MyPage.vue"),
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
