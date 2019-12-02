<template>
  <v-toolbar flat>
    <v-container mx-1 py-0>
      <v-layout>
        <v-spacer />
        <NavigationItems />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationItems from "@/components/common/NavigationItems";

export default {
  name: "the-header",
  components: {
    NavigationItems
  }
};
</script>

<style></style>
