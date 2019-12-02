<template>
  <v-btn class="ml-0 hidden-sm-and-down" text exact :to="link">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "navigation-item",
  props: ["link"]
};
</script>

<style>
</style>