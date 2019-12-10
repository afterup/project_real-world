<template>
  <v-container>
    <h3>Comment</h3>
    <v-row>
      <BaseIcon :user="currentUser" :size="50" />
      <v-text-field v-model="body"></v-text-field>
      <v-btn @click.prevent="onSubmit">submit</v-btn>
    </v-row>
    <v-row>
      <CommentList :slug="this.slug" />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "@/components/ui/BaseIcon";
import CommentList from "@/components/post/CommentList";

export default {
  name: "comment",
  data() {
    return {
      body: ""
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  components: {
    BaseIcon,
    CommentList
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("PUBLISH_COMMENT", {
          slug: this.slug,
          body: this.body
        })
        .then(() => {
          this.$store.dispatch("FETCH_COMMENT");
        });
    }
  }
};
</script>

<style></style>
