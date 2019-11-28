<template>
  <v-app class="article-board">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <h1>BOARD</h1>
        </v-col>
        <v-col v-for="article in articles" :key="article.slug" cols="8">
          <article-card :article="article"></article-card>
        </v-col>
        <v-col cols="4"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";
import { FETCH_ARTICLES } from "@/store/action.types";
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch(FETCH_ARTICLES);
  },
  computed: {
    ...mapGetters(["articles"])
  },
  components: {
    ArticleCard
  }
};
</script>

<style></style>
