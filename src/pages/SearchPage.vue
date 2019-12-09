<template>
  <v-container>
    <v-row>
      Result
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <List :tag="this.tag" />
    </v-row>
  </v-container>
</template>

<script>
import List from "@/components/list/List";

export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  components: {
    List
  }
};
</script>

<style></style>
