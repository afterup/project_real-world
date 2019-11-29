<template>
  <v-container class="post">
    <v-row>
      <v-col>
        <form @submit.prevent="onSubmit">
          <v-text-field v-model="title" label="Title"></v-text-field>
          <v-text-field v-model="description" label="description"></v-text-field>
          <v-textarea v-model="body" label="body"></v-textarea>
          <v-btn type="submit">등록</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { PUBLISH_ARTICLE } from "@/store/action.types";
import { FRESH_ARTICLE } from "@/store/mutation.types";

export default {
  data() {
    return {
      title: "",
      description: "",
      body: ""
      // taglist: []
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(PUBLISH_ARTICLE, {
          title: this.title,
          description: this.description,
          body: this.body
          // taglist: this.taglist
        })
        .then(slug => {
          this.$router.push({ name: "article", params: { slug: slug } });
          this.$store.commit(FRESH_ARTICLE);
        });
    }
  }
};
</script>

<style scopde></style>
