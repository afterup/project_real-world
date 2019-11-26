<template>
  <v-card tile flat v-bind="$attrs" v-on="$listeners">
    <div class="banner-image">
      <v-layout fill-height align-center pa-3>
        <v-flex xs12 md7 offset-md2>
          <h1 class="display-3 white--text">Today I Learned</h1>
          <div class="subheadingpl-2 mb-4 mt-2 ml-2 white--text">오늘 당신이 배운 모든 것</div>
          <v-btn color="primary" depressed rounded>WRITE</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </v-card>
</template>

<style scoped>
.banner-image {
  height: 400px;
  width: 100%;
  background-image: linear-gradient(rgba(78, 78, 78, 0.4), rgba(0, 0, 0, 0.4)),
    url('../../assets/images/study.jpg');
  background-size: cover;
}
</style>
