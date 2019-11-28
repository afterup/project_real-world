<template>
  <v-container class="update">
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
import { mapGetters } from "vuex";
import { FETCH_ARTICLE, UPDATE_ARTICLE } from "@/store/action.types";

export default {
  data() {
    return {
      title: "",
      description: "",
      body: ""
      // taglist: []
    };
  },
  props: ["slug"],
  created() {
    this.$store.dispatch(FETCH_ARTICLE, this.slug).then(article => {
      this.title = article.title;
      this.description = article.description;
      this.body = article.body;
    });
  },
  methods: {
    onSubmit() {
      console.log(this.slug);
      this.$store
        .dispatch(UPDATE_ARTICLE, {
          title: this.title,
          description: this.description,
          body: this.body,
          slug: this.slug
          // taglist: this.taglist
        })
        .then(() => {
          this.$router.push({ name: `article`, params: this.slug });
        });
    }
  }
};
</script>

<style scopde>
.quill {
  height: 100vh;
}
</style>
