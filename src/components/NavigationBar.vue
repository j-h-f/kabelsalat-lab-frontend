<template>
  <b-navbar toggleable="lg" type="light" variant="primary" sticky>
    <b-navbar-brand to="/">KabelSalat</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "kabelsalat-navigation",
  props: []
};
</script>

<style lang="scss" scoped>
@import "@/global/global.scss";

.nav-link {
  font-size: $medium-size;
  color: $secondary;
}

.navbar-brand {
  font-size: $large-size;
  color: $secondary !important;
}
</style>
