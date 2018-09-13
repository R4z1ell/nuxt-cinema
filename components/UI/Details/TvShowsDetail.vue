<template>
  <div class="tv-detail">
    <span class="tv-detail__triangle"></span>
    <div class="tv-detail__wrapper">
      <nuxt-link :to="{ path: popular }" class="tv-detail__popular" @click.native="changeView">Popular</nuxt-link>
      <nuxt-link :to="{ path: topRated }" class="tv-detail__top" @click.native="changeView">Top Rated</nuxt-link>
      <nuxt-link :to="{ path: onAir }" class="tv-detail__air" @click.native="changeView">On Air</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    popular() {
      return "/tv-shows/popular";
    },
    topRated() {
      return "/tv-shows/top-rated";
    },
    onAir() {
      return "/tv-shows/on-air";
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

.tv-detail {
  width: 135px;
  height: auto;
  background-color: $color-white;
  position: absolute;
  top: 85%;
  left: 8.2%;
  border-radius: 5px;
  z-index: 100;

  &__popular,
  &__top,
  &__latest,
  &__air {
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

  &__triangle {
    position: absolute;
    top: -6%;
    right: 6.5%;
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
