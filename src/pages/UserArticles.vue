<template>
  <v-container>
    sdfsdf
    <List :author="author" />
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
    author() {
      return this.$route.params.username;
    }
  }
};
</script>

<style></style>
