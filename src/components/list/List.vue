<template>
  <fragment>
    <div v-if="isLoading">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <v-row v-for="article in articles" :key="article.slug">
      <ListCard :article="article"></ListCard>
    </v-row>
  </fragment>
</template>

<script>
import ListCard from "@/components/list/ListCard";

import { FETCH_ARTICLES } from "@/store/action.types";
import { mapGetters } from "vuex";

export default {
  name: "list",
  components: {
    ListCard
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    author: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    favorited: {
      type: String,
      required: false
    }
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {};

      if (this.author) {
        filters.author = this.author;
      }

      if (this.tag) {
        filters.tag = this.tag;
      }

      if (this.favorited) {
        filters.favorited = this.favorited;
      }

      return {
        filters
      };
    },
    ...mapGetters(["articles", "isLoading"])
  },
  mounted() {
    this.fetchArticles();
  },
  watch: {
    type() {
      this.fetchArticles();
    },
    author() {
      this.fetchArticles();
    }
  },
  methods: {
    fetchArticles() {
      console.log(this.listConfig);
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig);
    }
  }
};
</script>

<style></style>
