<template>
  <div id="app">
    <Nav />
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

<style lang='scss'>
html {
  font-size: 67.5%;
}
body {
  margin: 0 25px;
  padding: 0;
  background: linear-gradient($mid, $dark) fixed;
  font-family: $body-font;
  color: $accent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  @include flex(column, flex-start, center);
}
div.Route {
  min-height: 70vh;
  width: 100%;
}
</style>
