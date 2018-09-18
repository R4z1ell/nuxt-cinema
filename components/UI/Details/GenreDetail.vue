<template>
  <div class="genre-detail">
    <span class="genre-detail__triangle"></span>
    <div class="genre-detail__wrapper">
      <nuxt-link :to="{ path: action }" @click.native="changeView" class="genre-detail__action">Action</nuxt-link>
      <nuxt-link :to="{ path: adventure }" @click.native="changeView" class="genre-detail__adventure">Adventure</nuxt-link>
      <nuxt-link :to="{ path: animation }" @click.native="changeView" class="genre-detail__animation">Animation</nuxt-link>
      <nuxt-link :to="{ path: comedy }" @click.native="changeView" class="genre-detail__comedy">Comedy</nuxt-link>
      <nuxt-link :to="{ path: crime }" @click.native="changeView" class="genre-detail__crime">Crime</nuxt-link>
      <nuxt-link :to="{ path: drama }" @click.native="changeView" class="genre-detail__drama">Drama</nuxt-link>
      <nuxt-link :to="{ path: family }" @click.native="changeView" class="genre-detail__family">Family</nuxt-link>
      <nuxt-link :to="{ path: fantasy }" @click.native="changeView" class="genre-detail__fantasy">Fantasy</nuxt-link>
      <nuxt-link :to="{ path: history }" @click.native="changeView" class="genre-detail__history">History</nuxt-link>
      <nuxt-link :to="{ path: horror }" @click.native="changeView" class="genre-detail__horror">Horror</nuxt-link>
      <nuxt-link :to="{ path: music }" @click.native="changeView" class="genre-detail__music">Music</nuxt-link>
      <nuxt-link :to="{ path: mystery }" @click.native="changeView" class="genre-detail__mystery">Mystery</nuxt-link>
      <nuxt-link :to="{ path: romance }" @click.native="changeView" class="genre-detail__romance">Romance</nuxt-link>
      <nuxt-link :to="{ path: scienceFiction }" @click.native="changeView" class="genre-detail__sci-fi">Science Fiction</nuxt-link>
      <nuxt-link :to="{ path: tvMovie }" @click.native="changeView" class="genre-detail__tv">TV Movie</nuxt-link>
      <nuxt-link :to="{ path: thriller }" @click.native="changeView" class="genre-detail__thriller">Thriller</nuxt-link>
      <nuxt-link :to="{ path: war }" @click.native="changeView" class="genre-detail__war">War</nuxt-link>
      <nuxt-link :to="{ path: western }" @click.native="changeView" class="genre-detail__western">Western</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeView() {
      this.$store.commit("fullView");
      this.$store.commit("pageFull");
      this.$store.commit("clearAll");
    }
  },
  computed: {
    action() {
      return "/movie/genre/action";
    },
    adventure() {
      return "/movie/genre/adventure";
    },
    animation() {
      return "/movie/genre/animation";
    },
    comedy() {
      return "/movie/genre/comedy";
    },
    crime() {
      return "/movie/genre/crime";
    },
    drama() {
      return "/movie/genre/drama";
    },
    family() {
      return "/movie/genre/family";
    },
    fantasy() {
      return "/movie/genre/fantasy";
    },
    history() {
      return "/movie/genre/history";
    },
    horror() {
      return "/movie/genre/horror";
    },
    music() {
      return "/movie/genre/music";
    },
    mystery() {
      return "/movie/genre/mystery";
    },
    romance() {
      return "/movie/genre/romance";
    },
    scienceFiction() {
      return "/movie/genre/science-fiction";
    },
    tvMovie() {
      return "/movie/genre/tv-movie";
    },
    thriller() {
      return "/movie/genre/thriller";
    },
    war() {
      return "/movie/genre/war";
    },
    western() {
      return "/movie/genre/western";
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables";

.genre-detail {
  width: 165px;
  height: auto;
  background-color: $color-white;
  position: absolute;
  top: 85%;
  left: 14%;
  border-radius: 5px;
  z-index: 100;

  &__action,
  &__adventure,
  &__animation,
  &__comedy,
  &__crime,
  &__doc,
  &__drama,
  &__family,
  &__fantasy,
  &__history,
  &__horror,
  &__music,
  &__mystery,
  &__romance,
  &__sci-fi,
  &__tv,
  &__thriller,
  &__war,
  &__western {
    font-size: 18px;
    font-weight: 700;
    color: $color-blue;
    text-align: center;
    margin: 9px 0;
    opacity: 0.5;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $color-secondary;
      opacity: 1;
      transition: all 0.2s;
    }
  }

  &__triangle {
    position: absolute;
    top: -1.4%;
    right: 19%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 13px 13px 13px;
    border-color: transparent transparent $color-white transparent;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
}
</style>


