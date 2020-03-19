<template>
  <div>
    <div v-for="project in projects" :key="project.name" :class="`Project ${project.title}`">
      <h2>{{project.name}}</h2>
      <p @click="openWindow(project.link)">
        {{project.text}}
        <a
          :href="project.repo"
          target="_blank"
          @click="$event.stopPropagation()"
        >GitHub Repository</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Black Hole",
          link: "https://blackhole.willujr.com",
          title: "BlackHole",
          repo: "https://github.com/black-hole-lambda-build-week/front-end",
          text: `A web app using React for the front-end and Node for the back-end. This project allows the user to vent into a “black hole” - without the worry of anybody hearing what was said.\n\nI was responsible for the front end of this project.\n\n`
        },
        {
          name: "Howl For Change",
          link: "https://howl-for-change-staging.netlify.com",
          title: "Howl",
          repo: "https://bitbucket.org/hfc-wolfpack/howlforchange/",
          text: `A marketplace using React for the front-end, Firebase for the backend, and Node to interact with Dwolla for payments. Allows nonprofit organizations to post projects for creative users to apply for - using portfolios made within the app. Only one 'winner' is chosen per project.\n\nI was the lead technical developer for this project.\n\n`
        },
        {
          name: "Chao Fever",
          link: "https://chaofever.willujr.com",
          title: "Chao",
          repo: "https://github.com/brellin/chaofever",
          text: `My first maserpiece, made at 15 years of age - 2008. Originally composed using HTML, CSS, and PHP. This iteration was refactored to use HTML and LESS.\n\nThe website is focused on a side-story of the Sonic Adventure series...Chao!\n\n`
        }
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
div.Project {
  width: 100%;
  background-size: cover;
  text-align: center;
  min-height: 150px;
  cursor: pointer;
  padding: 2.5px 0;
  background-attachment: fixed;
  background-position: center;
  margin-bottom: 50px;
  border-radius: 50px;
  transition: 0.5s ease-out;

  @media (max-width: 500px) {
    border-radius: 25%;
  }

  p {
    color: whitesmoke;
    font-size: 2rem;
    padding: 0 20%;
    white-space: pre-line;
    user-select: none;
    text-shadow: 5px 5px 25px black, 5px 5px 25px black;

    a {
      color: $accent;
      text-decoration: none;
      position: relative;
      width: 100%;

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 0px;
        transform: translate(-50vw, 20px);
        transition: 0.5s ease-out;
      }

      &:hover {
        &::before {
          width: 100%;
          background: $accent;
          transform: translateY(20px);
        }
      }
    }
  }

  &.BlackHole {
    background-image: linear-gradient(#000000aa, #000000aa),
      url(../images/blackhole.png);

    &:hover {
      background-image: linear-gradient(#00000080, #00000080),
        url(../images/blackhole.png);
    }
  }

  &.Howl {
    background-image: linear-gradient(#000000aa, #000000aa),
      url(../images/howl.png);

    &:hover {
      background-image: linear-gradient(#00000080, #00000080),
        url(../images/howl.png);
    }
  }

  &.Chao {
    background-image: linear-gradient(#000000aa, #000000aa),
      url(../images/chao.png);

    &:hover {
      background-image: linear-gradient(#00000080, #00000080),
        url(../images/chao.png);
    }
  }
}
</style>
