<template>
  <div class="release-detail">
    <span class="release-detail__triangle"></span>
    <div class="release-detail__wrapper">
      <nuxt-link :to="{ path: popular }" class="release-detail__popular" @click.native="changeView">Popular</nuxt-link>
      <nuxt-link :to="{ path: topRated }" class="release-detail__top" @click.native="changeView">Top Rated</nuxt-link>
      <nuxt-link :to="{ path: upcoming }" class="release-detail__upcoming" @click.native="changeView">Upcoming</nuxt-link>
      <div class="separator"></div>
      <nuxt-link :to="{ path: nowPlaying }" class="release-detail__theater" @click.native="changeView">In Theaters</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    popular() {
      return "/";
    },
    topRated() {
      return "/movie/top-rated";
    },
    upcoming() {
      return "/movie/upcoming";
    },
    nowPlaying() {
      return "/movie/now-playing";
    }
  },
  methods: {
    changeView() {
      this.$store.commit("fullView");
      this.$store.commit("pageFull");
      this.$store.commit("clearAll");
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables";

.separator {
  height: 1px;
  width: 100%;
  background-color: $color-gray;
  opacity: 0.2;
}

.release-detail {
  width: 145px;
  height: auto;
  background-color: $color-white;
  position: absolute;
  top: 85%;
  left: 0.5%;
  border-radius: 5px;
  z-index: 100;

  &__popular,
  &__top,
  &__upcoming,
  &__theater {
    font-size: 18px;
    font-weight: 700;
    color: $color-blue;
    text-align: center;
    margin: 10px 0;
    opacity: 0.5;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $color-secondary;
      opacity: 1;
      transition: all 0.2s;
    }
  }

  &__theater {
    color: $color-gold;
    opacity: 1;

    &:hover {
      color: $color-gold;
      opacity: 1;
    }
  }

  &__triangle {
    position: absolute;
    top: -6%;
    right: 14.5%;
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
