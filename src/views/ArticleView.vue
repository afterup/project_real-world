<template>
  <v-container>
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
    <v-row class="content">
      <v-col cols="8">
        <h1 class="headline">{{ article.title }}</h1>
        <div class="description">{{ article.description }}</div>
        <hr />
        <div class="body">{{ article.body }}</div>
      </v-col>
      <v-col col="4">
        <v-btn @click="updateArticle">수정</v-btn>
        <v-btn @click="deleteArticle">삭제</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE, DELETE_ARTICLE } from "@/store/action.types";

export default {
  props: ["slug"],
  computed: {
    ...mapGetters(["article"])
  },
  mounted() {
    this.$store.dispatch(FETCH_ARTICLE, this.slug);
  },
  methods: {
    updateArticle() {
      this.$router.push({ name: "edit", params: this.slug });
    },
    deleteArticle() {
      this.$store.dispatch(DELETE_ARTICLE, this.slug).then(() => {
        this.$router.push({ name: "board" });
      });
    }
  }
};
</script>

<style>
.user-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
}

.user-meta {
  border: 1px solid rgb(231, 227, 227);
  padding: 10px;
  margin: 10px;
}

.user-name {
  display: inline-block;
  margin-left: 10px;
}

.content {
  border: 1px solid rgb(231, 227, 227);
  height: 100vh;
  padding: 10px;
  margin: 10px;
}

.headline {
  margin-bottom: 10px;
}

.body {
  margin-top: 10px;
}
</style>
