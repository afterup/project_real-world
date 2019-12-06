<template>
  <v-container class="post-page">
    <div v-if="isLoading">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-container v-else class="post-container">
      <v-row class="mb-5 mx-10">
        <PostMeta :article="article"></PostMeta>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mb-5 mx-10">
        <v-col cols="8">
          <h1 class="headline">{{ article.title }}</h1>
          <div class="description">{{ article.description }}</div>
          <div class="body">{{ article.body }}</div>
        </v-col>
        <v-col cols="4">
          <v-btn @click="updateArticle">수정</v-btn>
          <v-btn @click="deleteArticle">삭제</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { FETCH_ARTICLE, DELETE_ARTICLE } from "@/store/action.types";
import { mapGetters } from "vuex";
import store from "@/store";

import PostMeta from "@/components/post/PostMeta.vue";

export default {
  name: "post-page",
  props: ["slug"],
  computed: {
    ...mapGetters(["article", "currentUser", "isLoading"])
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_ARTICLE, to.params.slug);
    next();
  },
  methods: {
    updateArticle() {
      this.$router.push({ name: "edit", params: this.slug });
    },
    deleteArticle() {
      this.$store.dispatch(DELETE_ARTICLE, this.slug).then(() => {
        this.$router.push({ name: "list" });
      });
    }
  },
  components: {
    PostMeta
  }
};
</script>

<style scoped>
.body {
  height: 400px;
}
</style>
