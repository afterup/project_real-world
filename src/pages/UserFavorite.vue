<template>
  <v-container>
    <List :favorited="username" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import List from "@/components/list/List";

export default {
  components: {
    List
  },
  computed: {
    username() {
      return this.$route.params.username;
    }
  }
};
</script>

<style></style>
