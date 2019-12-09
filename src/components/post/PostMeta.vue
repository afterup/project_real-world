<template>
  <v-row align="end">
    <v-col cols="2">
      <BaseIcon :user="article.author" :size="100" />
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
import BaseIcon from "@/components/ui/BaseIcon";

export default {
  name: "post-meta",
  components: {
    BaseIcon
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
