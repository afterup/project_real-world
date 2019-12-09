<template>
  <v-card @click="articleClick" class="article-card mx-2 mb-4" min-width="650px" max-height="180px">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="9">
            <div class="title text-weight-bold mb-2">{{ article.title }}</div>
            <p class="body-2">{{ article.description }}</p>
            <div class="caption">
              {{ article.createdAt }}
            </div>
          </v-col>
          <v-col cols="3">
            <BaseIcon class="mb-5" :user="article.author" :size="40" />
            <div class="font-weight-medium">{{ article.author.username }}</div>
            <v-btn color="blue lighten-3" outlined small>Like {{ article.favoritesCount }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "@/components/ui/BaseIcon";

export default {
  name: "list-card",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    articleClick() {
      this.$router.push({
        name: "article",
        params: { slug: this.article.slug }
      });
    }
  },
  components: {
    BaseIcon
  }
};
</script>

<style scoped>
.article-card:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
</style>
