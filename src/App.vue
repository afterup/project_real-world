<template>
  <v-app>
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/TheHeader.vue';
import AppFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>
