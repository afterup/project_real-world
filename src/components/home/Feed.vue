<template>
   <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <feed-card
        v-for="article in articles"
        :key="article.id"
        :value="article"
      />
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Feed',
    created(){
      this.$store.dispatch('fetchArticle')
    },
    components: {
      FeedCard: () => import('@/components/home/FeedCard')
    },
    computed: {
      ...mapGetters(['articles'])
    }
  }
</script>

<style>

</style>