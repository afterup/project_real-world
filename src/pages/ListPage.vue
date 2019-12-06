<template>
  <v-container>
    <div class="board-title mb-5">
      <div class="display-1">🖥</div>
      <h1>BOARD</h1>
    </div>
    <v-row no-gutters>
      <v-col cols="7">
        <v-row v-for="article in articles" :key="article.slug">
          <ListCard :article="article"></ListCard>
        </v-row>
      </v-col>
      <v-col cols="5" align="start">
        <ListSide></ListSide>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListCard from "@/components/list/ListCard";
import ListSide from "@/components/list/ListSide";
import { FETCH_ARTICLES } from "@/store/action.types";
import { mapGetters } from "vuex";

export default {
  name: "list-page",
  computed: {
    ...mapGetters(["articles"])
  },
  created() {
    this.$store.dispatch(FETCH_ARTICLES);
  },
  components: {
    ListCard,
    ListSide
  }
};
</script>

<style></style>
