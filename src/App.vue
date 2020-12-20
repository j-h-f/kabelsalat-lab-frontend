<template>
  <div id="app">
    <NavigationBar />
    <router-view class="main-view" />
    <!-- this is a test comment -->
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
  display: flex;
  flex-flow: column;

}

.main-view {
  // height: 100vh;
  margin-top: $header-size;
  padding: 0 auto;
}
</style>
