<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <Logo />
      </v-toolbar-title>
      <v-toolbar-items>
        <v-text-field
          v-model="searchItem"
          label="Search tag"
          solo
          @keyup.enter="search"
        ></v-text-field>
      </v-toolbar-items>
      <v-spacer />
      <NavigationItems />
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLES } from "@/store/action.types";
import NavigationItems from "@/components/common/NavigationItems";
import Logo from "@/components/common/Logo";

export default {
  name: "the-header",
  data() {
    return {
      searchItem: ""
    };
  },
  components: {
    NavigationItems,
    Logo
  },
  methods: {
    search() {
      this.$router.push({ name: "search-page", params: { tag: this.searchItem } });
    }
  }
};
</script>

<style></style>
