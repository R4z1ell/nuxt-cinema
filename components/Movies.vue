<template>
  <div class="movies">
    <!-- <img :src="`images/${movie.img}`" alt="movie-image" class="movie__image"> -->
    <nuxt-link :to="{ path: movieLink, params: { id: this.movie.id }, query: { img: this.movie.poster_path, link: this.$route.path }}">
      <img :src="image" alt="movie-image" class="movies__image">
    </nuxt-link>
    <p class="movies__title">{{ checkTitle }}</p>
    <p class="movies__genre">{{ this.movie.genre_ids[0] | genre }} {{ checkIfTwoGenres }} {{ this.movie.genre_ids[1] | genre }}</p>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      if (this.movie.poster_path) {
        return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
      } else {
        return "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
      }
    },
    movieLink() {
      return "/movie/" + this.movie.id;
    },
    checkIfTwoGenres() {
      if (this.movie.genre_ids[1]) {
        return "/ ";
      }
    },
    checkTitle() {
      if (this.movie.title) {
        return this.movie.title;
      } else {
        return this.movie.original_name;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.movies {
  display: flex;
  flex-direction: column;

  @media (height: 768px) and (width: 1366px) {
    transform: translateY(12.1%);
  }

  @media (max-width: 320px) {
    transform: translateY(15.1%);
  }

  &__image {
    height: 100%;
    width: 100%;
    transition: transform 0.3s;
    border: solid 1px $color-blue;

    @media (height: 768px) and (width: 1366px) {
      height: 344px;
    }

    @media (height: 800px) and (width: 1280px) {
      height: 318px;
    }

    @media (height: 1366px) and (width: 1024px) {
      height: 317px;
    }

    @media (height: 1112px) and (width: 834px) {
      height: 343px;
    }

    @media (height: 1024px) and (width: 768px) {
      height: 310px;
    }

    @media (height: 736px) and (width: 414px) {
      height: 231px;
    }

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }

  &__genre {
    color: $color-gray-light-2;
    font-size: 13px;

    &:hover {
      cursor: default;
    }
  }

  &__title {
    font-size: 17px;
    margin: 10px 0 3px 0;
    font-weight: 700;
    font-family: "Lato";
    color: $color-white;

    &:hover {
      cursor: default;
    }
  }
}
</style>
