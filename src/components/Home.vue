<template>
  <div>
    <div class="Intro">
      <h3 :style="top">Hi, my name is</h3>

      <h1>William Charles Umstead Junior</h1>

      <h4 :style="bottom">I'm a Full Stack Web Developer</h4>
    </div>

    <div class="Skills" :style="skills">
      <h2>Specializing in:</h2>
      <img
        v-for="(image, index) in images"
        :key="image.src + String(index)"
        :src="require(`${path}${image.src}`)"
        :alt="image.name"
        :title="image.name"
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
        { src: "js.png", name: "JavaScript" },
        { src: "python.png", name: "Python" },
        { src: "sql.png", name: "SQL" },
        { src: "sass.svg", name: "Sass" },
        { src: "hooks.png", name: "React Hooks" },
        { src: "redux.png", name: "Redux" },
        { src: "node.png", name: "Node.js" },
        { src: "mdb.png", name: "MongoDB" },
        { src: "gql.png", name: "GraphQL" },
        { src: "webapi.png", name: "ASP.NET Web API" }
      ],
      top: {
        position: "relative",
        left: "100vw"
      },
      bottom: {
        position: "relative",
        right: "100vw"
      },
      skills: {
        opacity: 0
      }
    };
  },
  beforeCreate() {
    setTimeout(() => {
      this.top = {
        position: "relative",
        left: "0"
      };
      this.bottom = {
        position: "relative",
        right: "0"
      };
      this.skills = { opacity: 1 };
    }, 1000);
  },
  methods: {
    toText(withExt) {
      return withExt.split(".")[0];
    }
  }
};
</script>

<style lang="scss">
div.Home {
  @include flex($align: flex-start, $justify: space-between);
  width: 100%;
  user-select: none;

  @media (max-width: 500px) {
    @include flex(column, space-evenly, center);
  }

  div.Intro {
    @include flex($direction: column);
    width: max-content;
    width: intrinsic;
    position: relative;

    h1 {
      color: $mid;
      font-family: $header-font;
      font-size: 4rem;
      margin: 0;

      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }

    h3,
    h4 {
      color: $dark;
      font-size: 25px;
      padding: 0 5px;
      transition: 1s ease-out;

      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }

    h3 {
      border-bottom: 1px solid $mid;
    }

    h4 {
      border-top: 1px solid $mid;
      align-self: flex-end;
    }
  }

  div.Skills {
    @include flex($justify: flex-end);
    flex-wrap: wrap;
    max-width: 42%;
    width: 100%;
    transition: 1.5s ease-out;

    @media (max-width: 500px) {
      max-width: 100%;
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
