<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4" md="4" v-for="category in categories" :key="category.name">
        <v-card class="mx-3 text-center" max-width="250" height="230">
          <v-card-text>
            <p class="display-1 text--primary">{{ category.emoticon }}</p>
            <div class="text--primary">{{ category.name }}</div>
            <!-- <v-card-actions>
            <v-btn text color="deep-purple accent-4">Learn More</v-btn>
            </v-card-actions>-->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          emoticon: '📝',
          name: '공부'
        },
        {
          emoticon: '🖥',
          name: '개발'
        },
        {
          emoticon: '🔤',
          name: '영어'
        },
        {
          emoticon: '🎹',
          name: '음악'
        },
        {
          emoticon: '🍽',
          name: '요리'
        },
        {
          emoticon: '🙆‍♀️',
          name: '기타'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>