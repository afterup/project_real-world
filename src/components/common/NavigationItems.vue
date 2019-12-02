<template>
  <div class="navigation-items">
    <div v-if="!isAuthenticated">
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name: 'home'}">홈페이지</v-btn>
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name: 'list'}">게시판</v-btn>
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name: 'signin'}">로그인</v-btn>
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name: 'signup'}">회원가입</v-btn>
    </div>
    <div v-else>
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name:'home'}">홈페이지</v-btn>
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name: 'list'}">게시판</v-btn>
      <v-btn class="ml-0 hidden-sm-and-down" text exact :to="{name: 'edit'}">새글작성</v-btn>
      <NavigationDropDown :currentUser="this.currentUser"></NavigationDropDown>
    </div>
  </div>
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

<style>
</style>