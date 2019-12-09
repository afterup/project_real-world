<template>
  <v-row align="end">
    <v-col cols="2">
      <img :src="article.author.image" alt="user-image" />
    </v-col>
    <v-col col="4">
      <h3 class="user-name">{{ article.author.username }}</h3>
      <div>{{ article.createdAt }}</div>
    </v-col>
    <v-col cols="3">
      <v-btn>Favorite {{ article.favoritesCount }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "post-meta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log(this.article.author.image);
  }
};
</script>

<style></style>
