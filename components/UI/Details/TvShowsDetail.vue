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

  @media (max-width: 1860px) {
    left: 8.5%;
  }

  @media (max-width: 1800px) {
    left: 8.7%;
  }

  @media (max-width: 1760px) {
    left: 8.9%;
  }

  @media (max-width: 1720px) {
    left: 9.1%;
  }

  @media (max-width: 1680px) {
    left: 9.3%;
  }

  @media (max-width: 1640px) {
    left: 9.5%;
  }

  @media (max-width: 1600px) {
    left: 9.7%;
  }

  @media (max-width: 1580px) {
    left: 9.9%;
  }

  @media (max-width: 1540px) {
    left: 10.2%;
  }

  @media (max-width: 1500px) {
    left: 10.5%;
  }

  @media (max-width: 1460px) {
    left: 10.7%;
  }

  @media (max-width: 1440px) {
    left: 10.9%;
  }

  @media (max-width: 1420px) {
    left: 11%;
  }

  @media (max-width: 1400px) {
    left: 11.2%;
  }

  @media (max-width: 1380px) {
    left: 11.4%;
  }

  @media (max-width: 1360px) {
    left: 11.5%;
  }

  @media (max-width: 1340px) {
    left: 11.7%;
  }

  @media (max-width: 1320px) {
    left: 11.9%;
  }

  @media (max-width: 1300px) {
    left: 12.1%;
  }

  @media (max-width: 1280px) {
    left: 12.3%;
  }

  @media (max-width: 1260px) {
    left: 12.5%;
  }

  @media (max-width: 1240px) {
    left: 12.7%;
  }

  @media (max-width: 1220px) {
    left: 12.9%;
  }

  @media (max-width: 1200px) {
    left: 13.1%;
  }

  @media (max-width: 1180px) {
    left: 13.3%;
  }

  @media (max-width: 1160px) {
    left: 13.5%;
  }

  @media (max-width: 1140px) {
    left: 13.7%;
  }

  @media (max-width: 1120px) {
    left: 13.9%;
  }

  @media (max-width: 1100px) {
    left: 14.3%;
  }

  @media (max-width: 1080px) {
    left: 14.6%;
  }

  @media (max-width: 1060px) {
    left: 14.9%;
  }

  @media (max-width: 1050px) {
    left: 13.4%;
  }

  @media (max-width: 1040px) {
    left: 13.7%;
  }

  @media (max-width: 1000px) {
    left: 14.1%;
  }

  @media (max-width: 980px) {
    left: 14.4%;
  }

  @media (max-width: 960px) {
    left: 14.7%;
  }

  @media (max-width: 940px) {
    left: 15%;
  }

  @media (max-width: 920px) {
    left: 15.4%;
  }

  @media (max-width: 900px) {
    left: 14.1%;
  }

  @media (max-width: 880px) {
    left: 14.3%;
  }

  @media (max-width: 869px) {
    left: 12.8%;
  }

  @media (max-width: 840px) {
    left: 13.1%;
  }

  @media (max-width: 820px) {
    left: 13.4%;
  }

  @media (max-width: 800px) {
    left: 13.7%;
  }

  @media (max-width: 790px) {
    left: 14.1%;
  }

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
