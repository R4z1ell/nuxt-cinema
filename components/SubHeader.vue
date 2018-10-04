<template>
  <div class="sub-header">
    <release-detail v-if="toggleReleaseDate" />
    <genre-detail v-if="toggleGenre" />
    <tv-shows-detail v-if="toggleTv" />
    <div class="divider">
      <p 
        class="sub-header__release" 
        @click="toggleReleaseDate = !toggleReleaseDate" 
        v-on-clickaway="awayReleaseDate">Movies
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="sub-header__icon" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve">
            <g>
              <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" fill="#FFFFFF"/>
            </g>
          </svg>
        </span>
      </p>
      <p class="sub-header__tv" @click="toggleTv = !toggleTv" v-on-clickaway="awayTv">TV Shows
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="sub-header__icon" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve">
            <g>
              <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" fill="#FFFFFF"/>
            </g>
          </svg>
        </span>
      </p>
      <p class="sub-header__filter" @click="toggleGenre = !toggleGenre" v-on-clickaway="awayGenre">Genre
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="sub-header__icon" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve">
            <g>
              <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" fill="#FFFFFF"/>
            </g>
          </svg>
        </span>
      </p>
    </div>

    <!-- <img :style="logoStyle" class="sub-header__logo" src="https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt="logo"> -->
    <img class="sub-header__logo-1" src="https://www.themoviedb.org/assets/1/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt="logo">
    <img class="sub-header__logo-2" src="https://www.themoviedb.org/assets/1/v4/logos/stacked-green-cae7a95e2590dbdde28284ac26245cb2792788838f5c498b892e8d01c183e6f3.svg" alt="logo">
    
    <div class="divider" v-if="hideButtons">
      <div class="sub-header__view" @click="detailed">
        <span class="sub-header__view--icon" :class="{ 'color-detail': !isActive }"></span>
        <span class="sub-header__view--icon" :class="{ 'color-detail': !isActive }"></span>
      </div>
      <div class="sub-header__full" @click="full">
        <div class="sub-header__quad">
          <span class="sub-header__quad--icon" :class="{ 'color-full': !isActive }"></span>
          <span class="sub-header__quad--icon" :class="{ 'color-full': !isActive }"></span>
        </div>
        <div class="sub-header__quad">
          <span class="sub-header__quad--icon" :class="{ 'color-full': !isActive }"></span>
          <span class="sub-header__quad--icon" :class="{ 'color-full': !isActive }"></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import ReleaseDetail from "@/components/UI/Details/ReleaseDetail";
import GenreDetail from "@/components/UI/Details/GenreDetail";
import TvShowsDetail from "@/components/UI/Details/TvShowsDetail";

export default {
  mixins: [clickaway],
  data() {
    return {
      toggleReleaseDate: false,
      toggleGenre: false,
      toggleTv: false
    };
  },
  components: {
    ReleaseDetail,
    GenreDetail,
    TvShowsDetail
  },
  computed: {
    // logoStyle() {
    //   if (this.$route.path === "/movie/" + this.$route.params.id) {
    //     return "margin-right: 45.9%";
    //   } else {
    //     return "margin-right: 16.4%";
    //   }
    // },
    hideButtons() {
      if (this.$route.path !== "/movie/" + this.$route.params.id) {
        return true;
      } else {
        return false;
      }
    },
    view() {
      return this.$store.state.view;
    },
    isActive() {
      return this.$store.state.isActive;
    }
  },
  methods: {
    awayGenre() {
      this.toggleGenre = false;
    },
    awayReleaseDate() {
      this.toggleReleaseDate = false;
    },
    awayTv() {
      this.toggleTv = false;
    },
    detailed() {
      this.$store.commit("detailedView");
      this.$store.commit("pageDetail");
    },
    full() {
      this.$store.commit("fullView");
      this.$store.commit("pageFull");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.color-detail {
  background-color: $color-white !important;
}

.color-full {
  background-color: $color-gray !important;
}

.divider {
  display: flex;
  margin-right: 43px;

  @media (max-width: 470px) {
    margin-right: 24px;
  }

  @media (height: 667px) and (width: 375px) {
    margin-right: 17px;
  }

  @media (height: 640px) and (width: 360px) {
    margin-right: 16px;
  }

  @media (height: 568px) and (width: 320px) {
    margin-right: 13px;
  }
}

.sub-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: $color-primary-light;
  z-index: 15;

  @media (max-width: 400px) {
    height: 60px;
  }

  @media (height: 812px) and (width: 375px) {
    height: 60px;
    max-width: 375px;
  }

  @media (height: 667px) and (width: 375px) {
    height: 60px;
    max-width: 375px;
  }

  @media (height: 640px) and (width: 360px) {
    height: 60px;
    max-width: 360px;
  }

  @media (height: 568px) and (width: 320px) {
    height: 60px;
    max-width: 320px;
  }

  &__logo-1 {
    width: 150px;
    height: 50px;
    //margin-right: 14.5%;
    position: absolute;
    left: 46%;

    @media (max-width: 1780px) {
      left: 45.7%;
    }

    @media (max-width: 1628px) {
      left: 45.6%;
    }

    @media (max-width: 1568px) {
      left: 45.3%;
    }

    @media (max-width: 1462px) {
      left: 44.8%;
    }

    @media (max-width: 1350px) {
      left: 44.4%;
    }

    @media (max-width: 1234px) {
      left: 44%;
    }

    @media (max-width: 1166px) {
      left: 42.7%;
    }

    @media (max-width: 1071px) {
      left: 42.5%;
    }

    @media (max-width: 1020px) {
      display: none;
    }

    @media (height: 640px) and (width: 360px) {
      height: 56px;
      max-width: 360px;
    }
  }

  &__logo-2 {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 47.6%;

    @media (min-width: 1021px) {
      display: none;
    }

    @media (max-width: 750px) {
      left: 47%;
    }

    @media (max-width: 679px) {
      left: 46.5%;
    }

    @media (max-width: 580px) {
      left: 45.7%;
    }

    @media (max-width: 495px) {
      left: 8%;
      width: 35px;
      height: 35px;
    }

    @media (max-width: 470px) {
      left: 4%;
    }

    @media (max-width: 400px) {
      left: 45.4%;
    }

    @media (height: 812px) and (width: 375px) {
      left: 45%;
    }

    @media (height: 640px) and (width: 360px) {
      left: 46%;
    }
  }

  &__release,
  &__filter,
  &__tv {
    font-size: 20px;
    color: $color-white;
    cursor: pointer;

    @media (max-width: 1050px) {
      font-size: 18px;
    }

    @media (max-width: 869px) {
      font-size: 16px;
    }

    @media (max-width: 780px) {
      display: none;
    }
  }

  &__release {
    margin-left: 40px;
    margin-right: 40px;

    @media (max-width: 900px) {
      margin-right: 25px;
    }
  }

  &__tv {
    margin-right: 40px;

    @media (max-width: 900px) {
      margin-right: 25px;
    }
  }

  &__icon {
    transform: rotate(90deg);
    margin-left: 5px;
  }

  &__view {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &--icon {
      height: 12px;
      width: 26px;
      margin-bottom: 2px;
      border-radius: 2px;
      background-color: $color-gray;
    }
  }

  &__full {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    cursor: pointer;

    @media (max-width: 400px) {
      margin-left: 15px;
    }

    @media (height: 812px) and (width: 375px) {
      margin-left: 15px;
    }

    @media (height: 640px) and (width: 360px) {
      margin-left: 15px;
    }
  }

  &__quad {
    display: flex;
    &--icon {
      height: 12px;
      width: 12px;
      margin-bottom: 2px;
      margin-right: 2px;
      border-radius: 2px;
      background-color: $color-white;
    }
  }
}
</style>
