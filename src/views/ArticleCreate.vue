<template>
  <v-container class="post">
    <v-row>
      <v-col>
        <form @submit.prevent="onSubmit">
          <v-text-field v-model="title" label="Title"></v-text-field>
          <v-text-field v-model="description" label="description"></v-text-field>
          <quill-editor :content="body" @change="onEditorChange($event)" class="quill">
          </quill-editor>
          <v-btn type="submit">등록</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { PUBLISH_ARTICLE } from "@/store/action.types";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      title: "",
      description: "",
      body: ""
      // taglist: []
    };
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      this.body = html;
    },
    onSubmit() {
      this.$store
        .dispatch(PUBLISH_ARTICLE, {
          title: this.title,
          description: this.description,
          body: this.body
          // taglist: this.taglist
        })
        .then(slug => {
          this.$router.push({ name: `board` });
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
