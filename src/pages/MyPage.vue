<template>
  <v-container>
    <v-row>
      <v-col>
        mypage
        {{ profile }}
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
