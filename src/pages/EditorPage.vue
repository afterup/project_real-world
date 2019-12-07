<template>
  <v-container>
    <div>
      <h1>New Post</h1>
    </div>
    <v-card outlined max-width="800px">
      <form @submit.prevent="onSubmit">
        <v-card-text>
          <v-text-field v-model="article.title" label="Title"></v-text-field>
          <v-text-field v-model="article.description" label="description"></v-text-field>
          <v-textarea v-model="article.body" label="body"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit">등록</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { RESET_ARTICLE } from "@/store/mutation.types";
import store from "@/store";
import { PUBLISH_ARTICLE, FETCH_ARTICLE, UPDATE_ARTICLE } from "@/store/action.types";

export default {
  name: "editor-page",
  props: ["slug"],
  async beforeRouteEnter(to, from, next) {
    await store.commit(RESET_ARTICLE);
    if (to.params.slug !== undefined) {
      await store.dispatch(FETCH_ARTICLE, to.params.slug);
    }
    return next();
  },
  computed: {
    ...mapGetters(["article"])
  },
  methods: {
    onSubmit() {
      const action = !this.slug ? PUBLISH_ARTICLE : UPDATE_ARTICLE;
      this.$store
        .dispatch(action, {
          title: this.article.title,
          description: this.article.description,
          body: this.article.body,
          slug: this.slug,
          taglist: this.taglist
        })
        .then(slug => {
          this.$router.push({ name: `list` });
        });
    }
  }
};
</script>

<style scoped></style>
