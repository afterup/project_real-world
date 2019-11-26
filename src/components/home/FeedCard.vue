<template>
  <v-row xs12>
    <v-col cols="12" mb="4">
      <v-card class="mx-3 text-center" max-width="300" height="250">
        <v-card-text>
          <p class="display-1 text--primary">{{ value.title }}</p>
          <div class="text--primary">{{ value.description }}</div>
          <!-- <v-card-actions>
            <v-btn text color="deep-purple accent-4">Learn More</v-btn>
          </v-card-actions>-->
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    classes() {
      return {
        mb6: this.size === 2,
        mb4: this.size === 3
      };
    }
  }
};
</script>

<style scoped>
.v-image__image {
  transition: 0.3s linear;
}
</style>