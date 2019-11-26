<template>
  <v-app>
    <TILHeader></TILHeader>
    <v-content>
      <router-view></router-view>
    </v-content>
    <TILFooter></TILFooter>
  </v-app>
</template>

<script>
import TILHeader from '@/components/TheHeader';
import TILFooter from '@/components/TheFooter';

export default {
  components: {
    TILHeader,
    TILFooter
  }
};
</script>

<style lang="scss">
// @import '@/assets/scss/main.scss';
</style>
