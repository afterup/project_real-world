<template>
  <v-toolbar flat>
    <v-container mx-1 py-0>
      <v-layout>
        <Logo />
        <v-spacer />
        <NavigationItems />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationItems from "@/components/common/NavigationItems";
import Logo from "@/components/common/Logo";

export default {
  name: "the-header",
  components: {
    NavigationItems,
    Logo
  }
};
</script>

<style></style>
