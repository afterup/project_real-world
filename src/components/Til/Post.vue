<template>
  <div class="post">
    <form @submit.prevent="onSubmit">
      <v-text-field v-model="title" label="Title"></v-text-field>
      <quill-editor :content="description" @change="onEditorChange($event)">
      </quill-editor>
      <v-btn type="submit">등록</v-btn>
    </form>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor';

export default {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      console.log('editor change', quill, html, text);
      this.description = html;
    },
    onSubmit() {
      this.$store.dispatch('publishArticle', {
        title: this.title,
        description: this.description,
      });
    },
  },
};
</script>

<style></style>
