<template>
  <v-container>
    <v-row>
      <v-col col="9">
        <v-card
          v-for="article in articles"
          :key="article.id"
          :to="{name:'view'}"
          class="article-card mx-2 mb-4"
          max-width="500"
        >
          <v-card-text>
            <div class="text--primary mb-3">{{ article.title }}</div>
            <div>{{ article.description }}</div>
            <p class="display-1 text--primary">
              <!-- {{ value.author }} -->
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col col="3">
        <v-btn :to="{ name: 'post' }">임시POST</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'articles',
  props: ['articles'],
  methods: {
    articleClick(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.article-card:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
</style>