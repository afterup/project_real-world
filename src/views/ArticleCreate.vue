<template>
  <div class="article-create">
    <til-post></til-post>
  </div>
</template>

<script>
export default {
  name: 'ArticleCreate',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {},
  components: {
    TilPost: () => import('@/components/Til/Post'),
  },
};
</script>

<style scoped>
.ql-container {
  height: 50vh;
}
</style>
