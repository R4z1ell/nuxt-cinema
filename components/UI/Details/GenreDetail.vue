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

  @media (max-width: 1800px) {
    left: 14.5%;
  }

  @media (max-width: 1720px) {
    left: 15.5%;
  }

  @media (max-width: 1660px) {
    left: 16%;
  }

  @media (max-width: 1600px) {
    left: 16.5%;
  }

  @media (max-width: 1540px) {
    left: 17%;
  }

  @media (max-width: 1500px) {
    left: 17.5%;
  }

  @media (max-width: 1460px) {
    left: 18%;
  }

  @media (max-width: 1420px) {
    left: 18.5%;
  }

  @media (max-width: 1380px) {
    left: 19%;
  }

  @media (height: 768px) and (width: 1366px) {
    left: 19.2%;
  }

  @media (max-width: 1360px) {
    left: 19.5%;
  }

  @media (max-width: 1320px) {
    left: 20%;
  }

  @media (max-width: 1300px) {
    left: 20.5%;
  }

  @media (max-width: 1280px) {
    left: 21%;
  }

  @media (max-width: 1260px) {
    left: 21.5%;
  }

  @media (max-width: 1200px) {
    left: 22%;
  }

  @media (max-width: 1180px) {
    left: 22.5%;
  }

  @media (max-width: 1160px) {
    left: 23%;
  }

  @media (max-width: 1120px) {
    left: 23.5%;
  }

  @media (max-width: 1100px) {
    left: 24%;
  }

  @media (max-width: 1080px) {
    left: 24.5%;
  }

  @media (max-width: 1060px) {
    left: 25%;
  }

  @media (max-width: 1050px) {
    left: 23.5%;
  }

  @media (max-width: 1030px) {
    left: 23.9%;
  }

  @media (max-width: 1020px) {
    left: 24.1%;
  }

  @media (max-width: 1010px) {
    left: 24.4%;
  }

  @media (max-width: 1000px) {
    left: 24.5%;
  }

  @media (max-width: 980px) {
    left: 25%;
  }

  @media (max-width: 960px) {
    left: 25.5%;
  }

  @media (max-width: 940px) {
    left: 26.2%;
  }

  @media (max-width: 920px) {
    left: 27%;
  }

  @media (max-width: 900px) {
    left: 24%;
  }

  @media (max-width: 880px) {
    left: 24.5%;
  }

  @media (max-width: 868px) {
    left: 22.5%;
  }

  @media (max-width: 840px) {
    left: 23.3%;
  }

  @media (max-width: 820px) {
    left: 23.8%;
  }

  @media (max-width: 800px) {
    left: 24.5%;
  }

  @media (max-width: 785px) {
    left: 25%;
  }

  @media (max-width: 781px) {
    left: 25.1%;
  }

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

    @media (max-width: 1880px) {
      right: 16.5%;
    }

    @media (max-width: 1860px) {
      right: 15%;
    }

    @media (max-width: 1840px) {
      right: 13%;
    }

    @media (max-width: 1820px) {
      right: 11%;
    }

    @media (max-width: 1800px) {
      right: 15%;
    }

    @media (max-width: 1780px) {
      right: 14%;
    }

    @media (max-width: 1760px) {
      right: 12%;
    }

    @media (max-width: 1720px) {
      right: 18%;
    }

    @media (max-width: 1700px) {
      right: 16%;
    }

    @media (max-width: 1680px) {
      right: 15%;
    }

    @media (max-width: 1660px) {
      right: 17.5%;
    }

    @media (max-width: 1640px) {
      right: 15.5%;
    }

    @media (max-width: 1620px) {
      right: 14%;
    }

    @media (max-width: 1600px) {
      right: 17%;
    }

    @media (max-width: 1580px) {
      right: 14.5%;
    }

    @media (max-width: 1560px) {
      right: 13%;
    }

    @media (max-width: 1540px) {
      right: 15%;
    }

    @media (max-width: 1520px) {
      right: 13%;
    }

    @media (max-width: 1500px) {
      right: 16%;
    }

    @media (max-width: 1480px) {
      right: 14%;
    }

    @media (max-width: 1460px) {
      right: 15.5%;
    }

    @media (max-width: 1440px) {
      right: 14%;
    }

    @media (max-width: 1420px) {
      right: 15.5%;
    }

    @media (max-width: 1400px) {
      right: 13%;
    }

    @media (max-width: 1380px) {
      right: 15%;
    }

    @media (max-width: 1360px) {
      right: 17%;
    }

    @media (max-width: 1340px) {
      right: 14.5%;
    }

    @media (max-width: 1320px) {
      right: 16%;
    }

    @media (max-width: 1300px) {
      right: 17.5%;
    }

    @media (max-width: 1280px) {
      right: 19%;
    }

    @media (max-width: 1260px) {
      right: 20.5%;
    }

    @media (max-width: 1240px) {
      right: 18%;
    }

    @media (max-width: 1220px) {
      right: 15.5%;
    }

    @media (max-width: 1200px) {
      right: 16%;
    }

    @media (max-width: 1180px) {
      right: 17%;
    }

    @media (max-width: 1140px) {
      right: 15%;
    }

    @media (max-width: 1060px) {
      right: 16.5%;
    }

    @media (max-width: 1050px) {
      right: 18%;
    }

    @media (max-width: 1040px) {
      right: 17.5%;
    }

    @media (max-width: 920px) {
      right: 18.5%;
    }

    @media (max-width: 900px) {
      right: 17.5%;
    }

    @media (max-width: 868px) {
      right: 18.5%;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
}
</style>


