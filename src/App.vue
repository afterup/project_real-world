<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <router-view />
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/TheHeader.vue";
import AppFooter from "@/components/common/TheFooter.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter
  },

  data: () => ({
    //
  })
};
</script>
