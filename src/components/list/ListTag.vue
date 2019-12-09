<template>
  <v-card class="mx-auto">
    <v-card-text>
      <p class="display-1 text--primary">Recent Tags</p>
      <v-divider></v-divider>
      <span class="ma-2" v-for="tag in tags" :key="tag">
        <v-chip small>{{ tag }}</v-chip>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tags"])
  },
  created() {
    this.$store.dispatch("FETCH_TAGS");
  }
};
</script>

<style>
</style>