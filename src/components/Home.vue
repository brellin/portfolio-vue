<template>
  <div>
    <div class="Intro">
      <h3>Hi, my name is</h3>

      <h1>William Charles Umstead Junior</h1>

      <h4>I'm a Full Stack Web Developer</h4>
    </div>

    <div class="Skills">
      <h2>Specializing in:</h2>
      <img
        v-for="(image, index) in images"
        :key="image + String(index)"
        :src="require(`${path}${image}`)"
        :alt="image"
        :title="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "./images/",
      images: [
        "js.png",
        "python.png",
        "php.png",
        "sql.png",
        "sass.svg",
        "hooks.png",
        "redux.png",
        "node.png",
        "mdb.png",
        "gql.png"
      ]
    };
  }
};
</script>

<style lang="scss">
div.Home {
  @include flex($align: flex-start, $justify: space-between);
  width: 100%;
  user-select: none;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  div.Intro {
    @include flex($direction: column);
    width: max-content;

    @media (max-width: 500px) {
      margin-top: 50px;
    }

    h1 {
      color: $dark;
      font-family: $header-font;
      font-size: 4rem;
      margin: 0;

      @media (max-width: 500px) {
        font-size: 20px;
      }
    }

    h3,
    h4 {
      color: $accent;
      font-size: 25px;
      padding: 0 5px;
      transition: 1s ease-out;

      @media (max-width: 500px) {
        font-size: 15px;
      }
    }

    h3 {
      border-bottom: 1px solid #001a1a;
    }

    h4 {
      border-top: 1px solid #001a1a;
      align-self: flex-end;
    }
  }

  div.Skills {
    @include flex($justify: flex-end);
    flex-wrap: wrap;
    max-width: 42%;
    transition: 1.5s ease-out;

    @media (max-width: 500px) {
      max-width: 100%;
      margin: 25px auto 0;
    }

    h2 {
      width: 100%;
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      margin: 2.5px;
      flex-basis: 17%;

      @media (max-width: 500px) {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin: 2.5px auto;
      }
    }
  }
}
</style>
