<template>
  <div class="home">
    <div class="image-container">
      <img class="landing-page-logo" alt="Vue logo" src="../assets/logo.svg" />
      <LandingPage msg="Wilkommen bei Kabelsalat" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "Home",
  components: {
    LandingPage,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing-page-logo {
  width: 50%;
}
</style>