<template>
  <div class="Activity">
    <h2>WakaTime</h2>
    <figure>
      <embed src="https://wakatime.com/share/@brellin/f844d8ee-85dc-4ba1-b3e1-4277288ef657.svg" />
    </figure>

    <h2>GitHub</h2>
    <Github
      v-if="this.contributions"
      :values="contributions"
      :range-color="colorRange"
      :end-date="Date.now()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorRange: [
        "#001a1a55",
        "#001a1a99",
        "#001a1a",
        "#099",
        "#055",
        "#03D4FE"
      ],
      contributions: undefined
    };
  },
  async beforeMount() {
    const { data } = await this.$http.get(
      "https://github-calendar.now.sh/v1/brellin"
    );
    this.contributions = data.contributions;
    console.log(this.contributions);
    this.loading = false;
  }
};
</script>

<style lang="scss">
div.Activity {
  width: 100%;
  @include flex(column, flex-start, center);
  figure {
    width: 50%;

    @media (max-width: 500px) {
      width: 90%;
    }
  }
  svg {
    width: 75%;

    g text {
      fill: #03d4fe !important;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
}
</style>
