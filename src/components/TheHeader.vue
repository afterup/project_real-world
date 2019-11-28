<template>
  <v-toolbar flat>
    <v-container mx-1 py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
        />
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
        <v-spacer />
        <div v-if="!isAuthenticated">
          <v-btn
            v-for="link in links"
            :key="link"
            :to="{ name: `${link}` }"
            class="ml-0 hidden-sm-and-down"
            text
            exact
            >{{ link }}</v-btn
          >
        </div>
        <div v-else>
          <v-btn
            v-for="link in memberLinks"
            :key="link"
            :to="{ name: `${link}` }"
            class="ml-0 hidden-sm-and-down"
            text
            exact
            >{{ link }}</v-btn
          >
          <v-menu offset-y class="ml-0 hidden-sm-and-down">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">{{ currentUser.username }}</v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>{{ currentUser.username }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Mypage</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title @click="logout()">Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppNavigation",
  data() {
    return {
      links: ["home", "board", "login", "signup"],
      memberLinks: ["home", "board", "post"]
    };
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    }
  }
};
</script>

<style></style>
