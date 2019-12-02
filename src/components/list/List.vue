<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <h1>BOARD</h1>
      </v-col>
      <v-col v-for="article in articles" :key="article.slug" cols="8">
        <ListCard :article="article"></ListCard>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListCard from "@/components/list/ListCard";
import { FETCH_ARTICLES } from "@/store/action.types";
import { mapGetters } from "vuex";

export default {
  name: "list",
  computed: {
    ...mapGetters(["articles"])
  },
  mounted() {
    this.fetchArticle();
  },
  methods: {
    fetchArticle() {
      this.$store.dispatch(FETCH_ARTICLES);
    }
  },
  components: {
    ListCard
  }
};
</script>

<style></style>
