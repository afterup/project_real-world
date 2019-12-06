<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <Logo />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <NavigationItems />
    </v-toolbar>
  </div>
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
