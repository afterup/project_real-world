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
    path: "/til",
    name: "til",
    component: () => import("@/views/About.vue"),
    meta: {
      requiresAuth: true
    }
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
