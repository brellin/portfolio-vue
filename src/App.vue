<template>
  <div id="app">
    <div class="nav">
      <Nav />
    </div>
    <router-view :class="`Route ${$route.name}`" />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
html {
  font-size: 67.5%;
}
body {
  margin: 0 25px;
  padding: 0;
  background: $light;
  font-family: $body-font;
  color: $dark;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
#app {
  @include flex(column, flex-start, center);
  max-width: 100%;

  div.Route {
    margin-top: 75px;
    min-height: 65vh;
    width: 100%;
  }

  div.nav {
    @include flex(row, center, center);
    width: 100%;
    min-height: 50px;
    height: 10%;
    position: fixed;
    background: linear-gradient($mid 90%, 95%, transparent 100%);
    z-index: 5;
  }
}
</style>
