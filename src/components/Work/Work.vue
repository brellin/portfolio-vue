<template>
  <div class="Work">
    <div class="Buttons">
      <router-link exact to="/work">Projects</router-link>
      <router-link to="/work/activity">Activity</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
div.Work {
  @include flex($direction: column, $align: center);
  margin: 0 auto 50px;

  div.Buttons {
    @include flex();
    margin: 50px auto;

    a {
      font-size: 4rem;
      text-decoration: none;
      color: $dark;
      padding: 12.5px 25px;
      background: none;
      outline: none;
      border: none;
      transition: 0.3s ease-in-out;
      border: 2px ridge $dark;
      border-right: none;
      border-radius: 25px 0 0 25px;
      font-family: $header-font;
      cursor: pointer;

      &:nth-child(2) {
        border-radius: 0 25px 25px 0;
        border: 2px ridge $dark;
        border-right: 2px ridge $dark;
        border-left: none;
      }

      &.router-link-active,
      &:hover {
        color: $dark;
        background: $mid;
      }

      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }

  h2 {
    font-family: $header-font;
    font-size: 3rem;
    text-shadow: 5px 5px 25px black, 5px 5px 25px black;
    color: $accent;
  }
}
</style>
