<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" class="md-12">
          <v-card tile flat v-bind="$attrs" v-on="$listeners">
            <div class="banner-image">
              <h1 class="display-3 white--text pt-6">Real World</h1>
              <div class="subheadingpl-2 mb-4 mt-2 ml-2 white--text">새로운 세상을 위한 도약</div>
              <v-btn color="primary" depressed rounded>WRITE</v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" class="sm-3 md-6 lg-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At explicabo saepe distinctio
          sint maxime ipsam laboriosam aliquid culpa? Assumenda laboriosam tempore fuga ipsum dolore
          fugit quo praesentium molestiae quaerat quidem?
        </v-col>
        <v-col cols="6" class="sm-3 md-6 lg-8">
          <p class="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec
            maximus curs us pulvinar. Proin vehicula eros mauris, sit amet rutrum libero vestibulum
            ac. Morbi ullamcorper eu lacus vulputate consect. Etur vivamus sagittis accumsan quam eu
            malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu rsus eget
            hendrerit at, congue nec enim.
          </p>
        </v-col>
        <v-col cols="4" md="4" v-for="category in categories" :key="category.name">
          <v-card class="mx-3 text-center" max-width="250" height="230">
            <v-card-text>
              <p class="display-1 text--primary">{{ category.emoticon }}</p>
              <div class="text--primary">{{ category.name }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      categories: [
        {
          emoticon: '📝',
          name: '공부',
        },
        {
          emoticon: '🖥',
          name: '개발',
        },
        {
          emoticon: '🔤',
          name: '영어',
        },
        {
          emoticon: '🎹',
          name: '음악',
        },
        {
          emoticon: '🍽',
          name: '요리',
        },
        {
          emoticon: '🙆‍♀️',
          name: '기타',
        },
      ],
    };
  },
};
</script>

<style scoped>
.banner-image {
  height: 400px;
  width: 100%;
  background-image: linear-gradient(rgba(78, 78, 78, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/images/study.jpg");
  background-size: cover;
}
</style>
