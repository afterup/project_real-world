<template>
  <v-container>
    <PostMeta :article="article"></PostMeta>
    <Post :article="article"></Post>
  </v-container>
</template>

<script>
import { FETCH_ARTICLE } from "@/store/action.types";
import { mapGetters } from "vuex";

import PostMeta from "@/components/post/PostMeta.vue";
import Post from "@/components/post/Post.vue";

export default {
  name: "post-page",
  props: ["slug"],
  computed: {
    ...mapGetters(["article"])
  },
  created() {
    this.$store.dispatch(FETCH_ARTICLE, this.slug);
  },
  components: {
    PostMeta,
    Post
  }
};
</script>

