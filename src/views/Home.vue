<template>
  <div class="home">
    <til-banner></til-banner>
    <til-about></til-about>
    <!-- <til-feed></til-feed> -->
    <til-category></til-category>
  </div>
</template>

<script>
export default {
  components: {
    TilBanner: () => import('@/components/home/Banner'),
    TilAbout: () => import('@/components/home/About'),
    // TilFeed: ()=> import('@/components/home/Feed'),
    TilCategory: () => import('@/components/home/Category')
  }
};
</script>

<style>
</style>