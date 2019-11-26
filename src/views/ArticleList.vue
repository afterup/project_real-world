<template>
  <v-app class="article-list">
    <til-article :articles="articles"></til-article>
  </v-app>
</template>

<script>
import TilArticle from '@/components/Til/Article';
import { mapGetters } from 'vuex';
// import store from '@/store';

export default {
  name: 'article-list',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('fetchArticle');
  },
  computed: {
    ...mapGetters(['articles'])
  },
  components: {
    TilArticle
  }
};
</script>

<style></style>
