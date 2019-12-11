<template>
  <v-container v-if="comments">
    <v-row v-for="comment in comments" :key="comment.id">
      <v-col cols="1" class="mr-3">
        <BaseIcon
          :user="comment.author"
          :size="50"
          @click.native="toUserPage(comment.author.username)"
          class="base-icon"
        />
      </v-col>
      <v-col cols="7">
        <div class="font-weight-bold">{{ comment.author.username }}</div>
        <p class="body-2">
          {{ comment.body }}
        </p>
        <div class="caption">
          {{ comment.createdAt }}
        </div>
      </v-col>
      <v-col cols="2">
        <v-btn @click="deleteComment(comment.id)">x</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import BaseIcon from "@/components/ui/BaseIcon";

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    BaseIcon
  },
  computed: {
    ...mapGetters(["comments"])
  },
  created() {
    console.log(this.slug);
    this.$store.dispatch("FETCH_COMMENT", this.slug);
  },
  methods: {
    toUserPage(username) {
      this.$router.push({ name: "user-articles", params: { username: username } });
    },

    deleteComment(id) {
      this.$store
        .dispatch("DELETE_COMMENT", {
          slug: this.slug,
          id: id
        })
        .then(() => {
          this.$store.dispatch("FETCH_COMMENT", this.slug);
        });
    }
  }
};
</script>

<style scoped>
.base-icon:hover {
  cursor: pointer;
}
</style>
