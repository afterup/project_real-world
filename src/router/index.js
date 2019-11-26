import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
      children: []
    },
    {
      path: '/til',
      name: 'til',
      component: () => import('@/views/ArticleList')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/ArticleCreate')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/Register')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('@/views/ArticleView')
    }
  ],
  mode: 'history',
  base: process.env.BASE_URL
});
