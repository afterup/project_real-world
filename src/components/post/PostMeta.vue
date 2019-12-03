<template>
  <v-row class="user-meta">
    <v-col cols="9">
      <img :src="article.author.image" alt="user-image" class="user-image" />
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
  props: ["article"]
};
</script>

<style>
</style>