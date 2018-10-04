<template>
  <div class="sidenav-container">
    <div class="sidenav">
      <ul class="nav-list">
        <li class="nav-list--movies">Movies<span class="cross" @click="$emit('close')"></span></li>
        <li class="nav-list__item nav-list--fav" @click="$emit('close')">
          <nuxt-link :to="{ path: popular }" @click.native="changeView">Popular</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: topRated }" @click.native="changeView">Top Rated</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: upcoming }" @click.native="changeView">Upcoming</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: nowPlaying }" @click.native="changeView">Now Playing</nuxt-link>
        </li>
        <li class="nav-list--tv-shows">TV Shows</li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: tvPopular }" @click.native="changeView">Popular</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: tvTopRated }" @click.native="changeView">Top Rated</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: tvOnAir }" @click.native="changeView">On Air</nuxt-link>
        </li>
        <li class="nav-list--genre">Genre</li>
        <li class="nav-list__item nav-list--action" @click="$emit('close')">
          <nuxt-link :to="{ path: action }" @click.native="changeView">Action</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: adventure }" @click.native="changeView">Adventure</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: animation }" @click.native="changeView">Animation</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: comedy }" @click.native="changeView">Comedy</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: crime }" @click.native="changeView">Crime</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: drama }" @click.native="changeView">Drama</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: family }" @click.native="changeView">Family</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: fantasy }" @click.native="changeView">Fantasy</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: history }" @click.native="changeView">History</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: horror }" @click.native="changeView">Horror</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: music }" @click.native="changeView">Music</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: mystery }" @click.native="changeView">Mystery</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: romance }" @click.native="changeView">Romance</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: scienceFiction }" @click.native="changeView">Science-Fiction</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: tvMovie }" @click.native="changeView">TV Movie</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: thriller }" @click.native="changeView">Thriller</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: war }" @click.native="changeView">War</nuxt-link>
        </li>
        <li class="nav-list__item" @click="$emit('close')">
          <nuxt-link :to="{ path: western }" @click.native="changeView">Western</nuxt-link>
        </li>
      </ul>
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
    },
    tvPopular() {
      return "/tv-shows/popular";
    },
    tvTopRated() {
      return "/tv-shows/top-rated";
    },
    tvOnAir() {
      return "/tv-shows/on-air";
    },
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
@import "../../assets/scss/variables";
@import "../../assets/scss/buttons";

.sidenav-container {
  overflow-y: scroll;
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}

.sidenav-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: $color-primary-light;
}

.sidenav-container::-webkit-scrollbar {
  width: 5px;
  background-color: $color-primary-light;
}

.sidenav-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $color-gray;
}

.nav-list li a {
  text-decoration: none;
  color: $color-gray;

  &:hover {
    color: $color-white;
    transition: color 0.2s;
  }
}

.nav-list {
  height: 100%;
  width: 430px;
  background-color: $color-sidenav;

  @media (max-width: 429px) {
    width: 429px;
  }

  @media (max-width: 400px) {
    width: 400px;
  }

  @media (max-width: 375px) {
    width: 375px;
  }

  @media (height: 812px) and (width: 375px) {
    width: 375px;
  }

  @media (height: 640px) and (width: 360px) {
    width: 360px;
  }

  @media (max-width: 359px) {
    width: 359px;
  }

  @media (max-width: 335px) {
    width: 335px;
  }

  @media (max-width: 320px) {
    width: 320px;
  }

  &__item {
    color: $color-gray;
    padding: 25px 0px;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: $color-white;
      transition: color 0.2s;
    }
  }

  &--action {
    margin-top: 10px;
  }

  &--fav {
    margin-top: 10px;
  }

  &--movies,
  &--genre,
  &--tv-shows {
    font-size: 20px;
    font-weight: 700;
    color: $color-white;
    background-color: $color-primary-light;
    text-align: center;
    padding: 25px 0;
  }
}

// X Button

.cross {
  @include btn-cross($color-white, 21px);
}
</style>
