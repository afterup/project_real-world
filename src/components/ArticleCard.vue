<template>
  <v-card class="article-card mx-2 mb-4" max-width="500">
    <v-card-text>
      <div class="text--primary mb-3">{{ article.title }}</div>
      <div>{{ article.description }}</div>
      <p class="display-1 text--primary">
        <!-- {{ value.author }} -->
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "article-card",
  props: ["article"],
  methods: {
    articleClick(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.article-card:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
</style>