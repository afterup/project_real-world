<template>
  <v-toolbar-items v-if="!isAuthenticated">
    <v-btn text exact :to="{ name: 'home' }">홈페이지</v-btn>
    <v-btn text exact :to="{ name: 'signin' }">로그인</v-btn>
    <v-btn text exact :to="{ name: 'signup' }">회원가입</v-btn>
  </v-toolbar-items>
  <v-toolbar-items v-else>
    <v-btn text exact :to="{ name: 'home' }">홈페이지</v-btn>
    <v-btn text exact :to="{ name: 'edit' }">새글작성</v-btn>
    <NavigationDropDown :currentUser="this.currentUser"></NavigationDropDown>
  </v-toolbar-items>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationDropDown from "@/components/common/NavigationDropDown.vue";

export default {
  name: "navigation-items",
  components: {
    NavigationDropDown
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>

<style></style>
