<template>
  <form @submit.prevent="onSubmit" class="mt-5">
    <v-text-field v-model="user.username" label="Username"></v-text-field>
    <v-text-field v-model="user.email" label="Email"></v-text-field>
    <v-text-field v-model="user.password" label="Password"></v-text-field>
    <v-text-field v-model="user.bio" label="Introduction"></v-text-field>
    <v-text-field v-model="user.img" label="Image URL"></v-text-field>
    <v-btn color="primary" type="submit">등록</v-btn>
    <v-btn>취소</v-btn>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_USER, FETCH_PROFILE, UPDATE_USER } from "@/store/action.types";

export default {
  name: "setting",
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.$store.dispatch(FETCH_USER);
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch(UPDATE_USER, this.user);
      await this.$store.dispatch(FETCH_PROFILE, this.user.username);
    }
  }
};
</script>

<style></style>
