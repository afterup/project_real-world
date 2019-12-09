<template>
  <v-container class="content">
    <v-row>
      <v-col cols="8">
        <h1 class="display-1">{{ article.title }}</h1>
        <div class="subtitle-1">{{ article.description }}</div>
        <hr />
        <div class="body-1">{{ article.body }}</div>
      </v-col>
      <v-col col="4" v-if="checkUser">
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
  name: "post",
  props: {
    article: {
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    checkUser() {
      if (this.currentUser.username && this.article.author.username) {
        return this.currentUser.username === this.article.author.username;
      }
      return false;
    }
  },
  created() {
    this.$store.dispatch(FETCH_ARTICLE, this.article.slug);
  },
  methods: {
    updateArticle() {
      this.$router.push({ name: "edit", params: this.article.slug });
    },
    deleteArticle() {
      this.$store.dispatch(DELETE_ARTICLE, this.article.slug).then(() => {
        this.$router.push({ name: "list" });
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
}

.headline {
  margin-bottom: 10px;
}

.body {
  margin-top: 10px;
}
</style>
