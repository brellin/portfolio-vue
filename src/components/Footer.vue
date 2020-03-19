<template>
  <footer>
    <h2>Get in touch</h2>
    <div v-for="(link, index) in links" :key="index">
      <FontAwesomeIcon
        :icon="index===2?link.icon:[link.icon[0], link.icon[1]]"
        class="Link"
        @click="openWindow(link.link)"
      />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: ["fab", "github"], link: "https://github.com/brellin" },
        { icon: ["fab", "linkedin"], link: "https://linkedin.com/in/brellin" },
        { icon: "at", link: "mailto: will@willujr.com" }
      ]
    };
  },
  methods: {
    openWindow(link) {
      window.open(link);
    }
  }
};
</script>

<style lang="scss">
footer {
  @include flex($justify: space-around);
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto 20px;
  transition: 1s ease-out;

  @media (max-width: 500px) {
    width: 100%;
  }

  h2 {
    font-family: $header-font;
    width: 100%;
    text-align: center;
  }

  div {
    @include flex($direction: column, $align: center);
    transition: 0.3s ease-out;

    &:hover {
      @include transform(scale(1.2));
    }

    svg.Link {
      font-size: 5rem;
      cursor: pointer;
    }
  }
}
</style>
