<template>
  <div class="navigation-items">
    <div v-if="!isAuthenticated">
      <NavigationItem :link="{name: 'home'}">홈페이지</NavigationItem>
      <NavigationItem :link="{name: 'list'}">게시판</NavigationItem>
      <NavigationItem :link="{name: 'signin'}">로그인</NavigationItem>
      <NavigationItem :link="{name: 'signup'}">회원가입</NavigationItem>
    </div>
    <div v-else>
      <NavigationItem :link="{name:'home'}">홈페이지</NavigationItem>
      <NavigationItem :link="{name: 'list'}">게시판</NavigationItem>
      <NavigationItem :link="{name: 'edit'}">새글작성</NavigationItem>
      <NavigationDropDown :currentUser="this.currentUser"></NavigationDropDown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationItem from "@/components/common/NavigationItem.vue";
import NavigationDropDown from "@/components/common/NavigationDropDown.vue";

export default {
  name: "navigation-items",
  components: {
    NavigationItem,
    NavigationDropDown
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>

<style>
</style>