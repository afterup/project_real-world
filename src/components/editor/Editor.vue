<template>
  <v-container class="editor">
    <v-row>
      <v-col>
        <form @submit.prevent="onSubmit">
          <v-text-field v-model="article.title" label="Title"></v-text-field>
          <v-text-field v-model="article.description" label="description"></v-text-field>
          <v-textarea v-model="article.body" label="body"></v-textarea>
          <v-btn type="submit">등록</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import {
  PUBLISH_ARTICLE,
  FETCH_ARTICLE,
  UPDATE_ARTICLE
} from "@/store/action.types";

export default {
  name: "editor",
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: ""
        // taglist: []
      }
    };
  },
  props: ["prevArticle"],
  created() {
    if (this.prevArticle) {
      this.article = this.prevArticle;
    }
  },
  methods: {
    onSubmit() {
      if (!this.prevArticle) {
        this.$store
          .dispatch(PUBLISH_ARTICLE, {
            title: this.article.title,
            description: this.article.description,
            body: this.article.body
            // taglist: this.taglist
          })
          .then(slug => {
            this.$router.push({ name: `article`, params: slug });
          });
      } else {
        this.$store
          .dispatch(UPDATE_ARTICLE, {
            title: this.article.title,
            description: this.article.description,
            body: this.article.body,
            slug: this.prevArticle.slug
            // taglist: this.taglist
          })
          .then(() => {
            this.$router.push({
              name: `article`,
              params: this.prevArticle.slug
            });
          });
      }
    }
  }
};
</script>

<style>
</style>