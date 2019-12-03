<template>
  <div class="editor-page">
    <Editor :prevArticle="article"></Editor>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { RESET_ARTICLE } from "@/store/mutation.types";

import Editor from "@/components/editor/Editor.vue";

export default {
  name: "editor-page",
  props: ["slug"],
  async beforeRouteEnter(to, from, next) {
    // SO: https://github.com/vuejs/vue-router/issues/1034
    // If we arrive directly to this url, we need to fetch the article
    await store.commit(RESET_ARTICLE);
    if (to.params.slug !== undefined) {
      await store.dispatch(FETCH_ARTICLE, to.params.slug);
    }
    return next();
  },

  created() {
    if (this.slug) {
      this.$store.dispatch(FETCH_ARTICLE, this.slug);
    }
  },
  computed: {
    ...mapGetters(["article"])
  },
  components: {
    Editor
  }
};
</script>

<style scoped></style>
