<template>
  <div class="auth">
    <SignIn v-if="this.$route.path==='/signin'"></SignIn>
    <SignUp v-else></SignUp>
  </div>
</template>

<script>
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";

export default {
  name: "auth",
  components: {
    SignIn,
    SignUp
  }
};
</script>

<style>
</style>