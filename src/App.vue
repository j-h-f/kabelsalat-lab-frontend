<template>
  <div id="app">
    <NavigationBar />
    <router-view class="main-view" />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "App",
  components: { NavigationBar }
};
</script>

<style lang="scss">
@import "@/global/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary;
}

.main-view {
  height: 100vh;
}
</style>
