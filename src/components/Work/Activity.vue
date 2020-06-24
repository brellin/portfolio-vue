<template>
  <div class="Activity">
    <h2 class="NoShadow">GitHub</h2>
    <p>Below is a graph depicting the number of contributions I have made to projects that have been featured on the master branch of its respective repository.</p>
    <GitHub
      v-if="this.$store.state.contributions"
      :values="this.$store.state.contributions"
      :range-color="colorRange"
      :end-date="Date.now()"
    />
    <p v-else>Loading...</p>

    <h2 class="NoShadow">WakaTime</h2>
    <p>WakaTime is a plugin for IDEs and text editors that tracks changes to the files being edited, accurate to 1 microsecond.</p>
    <p>The figure below is an accurate depiction of how much time I spend actually coding in my IDEs.</p>
    <figure>
      <embed src="https://wakatime.com/share/@brellin/16b5b71c-f081-42d4-8031-170cd3ea1823.svg" />
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorRange: ["#001a1a55", "#001a1a99", "#066", "#099", "#03D4FE"]
    };
  },
  mounted() {
    if (this.$store.state.contributions === undefined)
      this.$store.dispatch("populate");
  }
};
</script>

<style lang="scss">
div.Activity {
  width: 100%;
  @include flex(column, flex-start, center);
  h2.NoShadow {
    text-shadow: none;
    color: $dark;
  }
  p {
    font-size: 1.5rem;
    margin: 5px;
  }
  figure {
    width: 75%;

    @media (max-width: 500px) {
      width: 100%;
    }
  }
  svg {
    width: 75%;
    margin-top: 25px;

    g text {
      fill: #099 !important;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
}
</style>
