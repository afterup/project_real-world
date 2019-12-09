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
        <v-col cols="1">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-btn @click.prevent="updateArticle">수정</v-btn>
            <v-btn @click.prevent="deleteArticle">삭제</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="mb-5"></v-divider>
      <h3>Comment</h3>
      <v-row>
        <BaseIcon :user="article.author" :size="50" />
        <v-text-field></v-text-field>
        <v-btn>submit</v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { FETCH_ARTICLE, DELETE_ARTICLE } from "@/store/action.types";
import { mapGetters } from "vuex";
import store from "@/store";

import BaseIcon from "@/components/ui/BaseIcon";
import PostMeta from "@/components/post/PostMeta.vue";

export default {
  name: "post-page",
  props: {
    slug: {
      type: String,
      required: false
    }
  },
  components: {
    PostMeta,
    BaseIcon
  },
  computed: {
    ...mapGetters(["article", "currentUser", "isLoading"])
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_ARTICLE, to.params.slug);
    console.log(to.params.slug);
    next();
  },
  methods: {
    updateArticle() {
      this.$router.push({
        name: "edit",
        params: { slug: this.slug, previousArticle: this.article }
      });
    },
    deleteArticle() {
      this.$store.dispatch(DELETE_ARTICLE, this.slug).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped>
.body {
  height: 400px;
}
</style>
