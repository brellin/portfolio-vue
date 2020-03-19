<template>
  <nav>
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      :class="route.name"
      :exact="route.name==='Home'"
    >{{ route.name }}</router-link>
    <a
      href="https://docs.google.com/document/d/1jRMkE040orW6gBoYssTHJ7g8s8VN3OPtYTF-fz_EYII/edit?usp=sharing"
      target="_blank"
    >Resume</a>
    <hr />
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      routes: this.$router.options.routes
    };
  }
};
</script>

<style lang="scss">
nav {
  margin: 20px auto 0;
  @include flex($justify: space-around);
  position: relative;
  max-width: 100%;

  a {
    font-size: 2rem;
    color: whitesmoke;
    text-decoration: none;
    padding: 5px 15px;
    margin: 0 5px;
    outline: none;

    &.Home {
      &:hover ~ hr {
        @include transform(translate(-145px, 21px) !important);
        width: 5rem !important;
      }

      &.router-link-active ~ hr {
        @include transform(translate(-145px, 21px));
        width: 5rem;
      }
    }

    &.About {
      &:hover ~ hr {
        @include transform(translate(-55px, 21px) !important);
        width: 5rem !important;
      }

      &.router-link-active ~ hr {
        @include transform(translate(-55px, 21px));
        width: 5rem;
      }
    }

    &.Work {
      &:hover ~ hr,
      &.router-link-active ~ hr {
        @include transform(translate(36px, 21px));
        width: 4.75rem;
      }
    }

    &:nth-child(4).active ~ hr,
    &:nth-child(4):hover ~ hr {
      @include transform(translate(135px, 21px));
      width: 7rem;
    }
  }

  hr {
    width: 50px;
    position: absolute;
    border: 1px solid white;
    @include transform(translate(-139px, 21px));
    user-select: none;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }
}
</style>
