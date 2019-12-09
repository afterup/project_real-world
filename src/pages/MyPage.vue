<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-avatar class="profile" color="grey" size="270" tile>
          <v-img :src="profile.image"></v-img>
        </v-avatar>
        <h3 class="display-1 font-weight-bold">{{ profile.username }}</h3>
        <p class="font-weight-light">{{ profile.bio }}</p>
        <v-btn color="blue lighten-2" dark large>Follow</v-btn>
      </v-col>
      <v-col cols="9">
        <v-toolbar flat>
          <v-toolbar-items>
            <v-btn text exact :to="{ name: 'user-articles' }">작성한 글</v-btn>
            <v-btn text exact :to="{ name: 'home'}" :username="this.username">좋아요한 글</v-btn>
            <v-btn text exact :to="{ name: 'setting' }" large>설정</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FETCH_PROFILE } from "@/store/action.types";
import { mapGetters } from "vuex";

export default {
  name: "my-page",
  props: ["username"],
  created() {
    this.$store.dispatch(FETCH_PROFILE, this.username);
  },
  computed: {
    ...mapGetters(["profile"])
  }
};
</script>

<style></style>
