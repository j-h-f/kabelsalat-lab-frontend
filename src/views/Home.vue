<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" width="400px" />
    <LandingPage msg="Wilkommen bei Kabelsalat" />
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
