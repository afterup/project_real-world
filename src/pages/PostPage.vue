<template>
  <div class="post-page">
    <Post :slug="this.slug"></Post>
  </div>
</template>

<script>
import Post from "@/components/post/Post.vue";

export default {
  name: "post-page",
  props: ["slug"],
  components: {
    Post
  }
};
</script>

