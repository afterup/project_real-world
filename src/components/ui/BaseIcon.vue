<template>
  <v-avatar :size="size">
    <img :src="user.image" :alt="user.username" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    size: Number
  }
};
</script>

<style></style>
