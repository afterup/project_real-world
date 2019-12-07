<template>
  <v-container>
    <div class="board-title mb-5">
      <h1>Global Feed</h1>
      <v-divider></v-divider>
    </div>
    <div v-if="isLoading">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-row no-gutters>
      <v-col cols="7">
        <v-row v-for="article in articles" :key="article.slug">
          <ListCard :article="article"></ListCard>
        </v-row>
      </v-col>
      <v-col cols="5" align="start">
        <ListTag></ListTag>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListCard from "@/components/list/ListCard";
import ListTag from "@/components/list/ListTag";
import { FETCH_ARTICLES } from "@/store/action.types";
import { mapGetters } from "vuex";

export default {
  name: "list",
  computed: {
    ...mapGetters(["articles", "isLoading"])
  },
  created() {
    this.$store.dispatch(FETCH_ARTICLES);
  },
  components: {
    ListCard,
    ListTag
  }
};
</script>

<style></style>
