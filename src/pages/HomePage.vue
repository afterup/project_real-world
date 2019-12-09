<template>
  <fragment>
    <div class="banner-image">
      <v-container align="right">
        <div>
          <h1 class="display-3 white--text pt-6">Real World</h1>
          <div class="subheadingpl-2 mb-4 mt-2 ml-2 white--text">새로운 세상을 위한 도약</div>
          <v-btn @click="writeClick" color="primary" depressed rounded>WRITE</v-btn>
        </div>
      </v-container>
    </div>
    <v-container>
      <div class="board-title mb-5">
        <h1>Global Feed</h1>
        <v-divider></v-divider>
      </div>
      <v-row no-gutters>
        <v-col cols="8">
          <List />
        </v-col>
        <v-col cols="4" align="start">
          <ListTag></ListTag>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import List from "@/components/list/List";
import ListTag from "@/components/list/ListTag";

export default {
  name: "home",
  components: {
    List,
    ListTag
  },
  methods: {
    writeClick() {
      if (this.$store.state.auth.isAuthenticated) {
        this.$router.push({ name: "post" });
      } else {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style scoped>
.banner-image {
  height: 300px;
  width: 100%;
  background-image: linear-gradient(rgba(78, 78, 78, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/images/study.jpg");
  background-size: cover;
}
</style>
