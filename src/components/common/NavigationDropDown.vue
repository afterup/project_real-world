<template>
  <v-menu offset-y class="ml-0 hidden-sm-and-down">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">{{ currentUser.username }}</v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title>{{ currentUser.username }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="mypage(currentUser.username)">Mypage</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title @click="logout()">Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["currentUser"],
  methods: {
    mypage(username) {
      console.log(username);
      this.$router.push({ name: "mypage", params: { username: username } });
    },
    logout() {
      this.$store.dispatch("LOGOUT");
    }
  }
};
</script>

<style></style>
