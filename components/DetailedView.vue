<template>
  <div class="main"> 
    <div class="view" :style="[checkIfLastComponent ? {'margin': '25px 0 10px 0'} : {'margin': '25px 0 40px 0'}]">
      <nuxt-link :to="{path: movieLink, params: {id: this.movie.id}, query: { img: this.movie.poster_path, link: this.$route.path}}">
        <img :src="image" alt="movie-image" class="view__image">
      </nuxt-link>
      <div class="wrapper">
        <div class="detail-title">
          <h1 class="view__title">{{ movie.title }}</h1>
        </div>
        <p class="view__genre">
          {{ this.movie.genre_ids[0] | genre }} {{ checkIfTwoGenres }} {{ this.movie.genre_ids[1] | genre }} 
          &nbsp; &#8901; &nbsp; {{ checkReleaseDate }} &nbsp; &#8901; &nbsp;
          {{ checkRuntime | runtime }}
        </p>
        <div class="view__stars">
          <circle-bar style="margin-left: 27px" :rating="voteAverage"></circle-bar>
          <star-rating  
            class="stars" 
            :increment="0.5" 
            :star-size="25" 
            :show-rating="false" 
            active-color="#FF6500"
            :rounded-corners="true"
          ></star-rating>
          <p class="view__stars--count">{{ this.movie.vote_count }} &nbsp; Vote count</p>
        </div>
        <p class="view__plot">{{ movie.overview }}</p>
        <button-trailer style="margin: 23px 0 0 25px" @click="showTrailer">Watch Trailer</button-trailer>
      </div>
      <div class="view__btn">
        <button-ticket>Buy Ticket</button-ticket>
        <p 
          class="view__btn--list" 
          @click="onAgree"
          :style="[checkWatchlist(this.movie.title) ? {'margin': '30px 0 0 10px'} : {'margin': '30px 0 0 40px'}]"
        >
          {{ checkWatchlist(this.movie.title) ? "Remove from Watchlist" : "Add to Watchlist" }}
        </p>
      </div>
    </div>
    <span class="view__split" :style="[checkIfLastComponent ? {'height': '0px'} : {'height': '1px'}]"></span>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import ButtonTrailer from "@/components/UI/Buttons/ButtonTrailer";
import ButtonTicket from "@/components/UI/Buttons/ButtonTicket";
import CircleBar from "@/components/UI/Buttons/CircleBar";
import StarRating from "vue-star-rating";

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  components: {
    ButtonTrailer,
    ButtonTicket,
    StarRating,
    CircleBar
  },
  computed: {
    image() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
    watchlist() {
      return this.$store.getters.getWatchlist;
    },
    movieLink() {
      return "/movie/" + this.movie.id;
    },
    checkReleaseDate() {
      if (this.movie.release_date) {
        return this.movie.release_date;
      } else {
        return this.movie.first_air_date;
      }
    },
    checkIfTwoGenres() {
      if (this.movie.genre_ids[1]) {
        return "/ ";
      }
    },
    checkRuntime() {
      const id = this.movie.id;
      const result = this.$store.state.infoMovie.filter(movie => {
        return movie.id === id;
      });
      if (result.length > 0) {
        return result[0].runtime;
      } else {
        return "";
      }
    },
    checkIfLastComponent() {
      if (
        this.movie.id ===
        this.$store.state.movies[this.$store.state.movies.length - 1].id
      ) {
        return true;
      } else {
        return false;
      }
    },
    voteAverage() {
      return this.movie.vote_average * 10;
    }
  },
  methods: {
    showTrailer() {
      const id = this.movie.id;
      const result = this.$store.state.infoMovie.filter(movie => {
        return movie.id === id;
      });
      this.$modal.show("youtube-trailer-detail", {
        youtubeId: result[0].trailerId
      });
    },
    checkWatchlist(movieTitle) {
      return this.watchlist.some(el => {
        return el.title === movieTitle;
      });
    },
    onAgree() {
      if (this.checkWatchlist(this.movie.title)) {
        let movieIndex = this.watchlist.findIndex(
          movie => movie.title === this.movie.title
        );
        //console.log(value);
        this.$store.dispatch("removeFromWatchlist", movieIndex);
      } else {
        this.$store.dispatch("addToWatchlist", this.movie.id);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.stars {
  margin: 7px 0 15px -2px;
}

.detail-title {
  display: flex;
  height: 50px;
}

.view {
  position: relative;
  display: flex;
  margin: 25px 0 40px 0;

  &__stars {
    display: flex;

    &--count {
      margin: 18px 0 0 15px;
      font-size: 16;
      color: $color-white;
      opacity: 0.8;
    }
  }

  &__btn {
    position: absolute;
    right: 5%;
    top: 34%;

    &--list {
      color: $color-white;
      font-size: 20px;
      margin: 30px 0 0 40px;
      cursor: pointer;

      &:hover {
        color: $color-secondary;
        transition: color 0.2s;
      }
    }
  }

  &__image {
    width: 225px;
    height: 338px;
  }

  &__split {
    height: 1px;
    width: 100%;
    background-color: $color-white;
    opacity: 0.15;
    margin-bottom: 15px;
  }

  &__title {
    font-size: 36px;
    color: $color-white;
    margin: 0 0 0 25px;
  }

  &__genre {
    color: $color-white;
    opacity: 0.8;
    margin: 3px 0 0 25px;
    font-size: 15px;
  }

  &__plot {
    color: $color-white;
    opacity: 0.8;
    font-size: 18px;
    margin-left: 25px;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 1100px;
}

.main {
  display: flex;
  flex-direction: column;
}
</style>



