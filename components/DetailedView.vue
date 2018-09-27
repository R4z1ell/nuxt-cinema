<template>
  <div class="main"> 
    <div class="view" :style="[checkIfLastComponent ? {'margin': '25px 0 10px 0'} : {'margin': '25px 0 40px 0'}]">
      <nuxt-link :to="{path: movieLink, params: {id: this.movie.id}, query: { img: this.movie.poster_path, link: this.$route.path}}">
        <img :src="image" alt="movie-image" class="view__image">
      </nuxt-link>
      <div class="wrapper">
        <div class="detail-title">
          <h1 class="view__title">{{ checkTitle }}</h1>
        </div>
        <p class="view__genre">
          {{ this.movie.genre_ids[0] | genre }} {{ checkIfTwoGenres }} {{ this.movie.genre_ids[1] | genre }} 
          &nbsp; &#8901; &nbsp; {{ checkReleaseDate }} 
        </p>
        <div class="view__stars">
          <circle-bar style="margin-left: 27px" :rating="voteAverage"></circle-bar>
          <star-rating  
            style="margin-bottom: 7px"
            class="stars" 
            :increment="0.5" 
            :star-size="25" 
            :show-rating="false" 
            active-color="#FF6500"
            :rounded-corners="true"
          ></star-rating>
          <p class="view__stars--count">{{ this.movie.vote_count }} &nbsp; Vote count</p>
        </div>
        <p class="view__plot">{{ this.movie.overview.substring(0, 790) }}
          <span v-if="!readMore">{{ this.movie.overview.substring(790,this.movie.overview.length) }}</span>
          <span v-if="this.checkOverviewLength">{{ checkDot }}</span>
          <span v-if="this.checkOverviewLength" class="read-more" @click="readMore = !readMore">
            {{ this.readMoreOrLess }}
            <label v-if="readMore">&#187;</label>
            <label v-if="!readMore">&#171;</label>
          </span>
        </p>
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
  data() {
    return {
      readMore: true
    };
  },
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
      if (this.movie.poster_path) {
        return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
      } else {
        return "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
      }
    },
    watchlist() {
      return this.$store.getters.getWatchlist;
    },
    movieLink() {
      return "/movie/" + this.movie.id;
    },
    readMoreOrLess() {
      if (this.readMore === false) {
        return "  read less";
      } else {
        return "  read more";
      }
    },
    checkDot() {
      if (this.readMore === false) {
        return "";
      } else {
        return " ...";
      }
    },
    checkOverviewLength() {
      if (this.movie.overview.length > 780) {
        return true;
      } else {
        return false;
      }
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
    checkTitle() {
      if (this.movie.title) {
        return this.movie.title;
      } else {
        return this.movie.original_name;
      }
    },
    checkIfLastComponent() {
      if (
        this.movie.id ===
        this.$store.state.movies[this.$store.state.movies.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.topRated[this.$store.state.topRated.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.upcoming[this.$store.state.upcoming.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.nowPlaying[this.$store.state.nowPlaying.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.tvPopular[this.$store.state.tvPopular.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.tvTopRated[this.$store.state.tvTopRated.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.tvOnAir[this.$store.state.tvOnAir.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.action[this.$store.state.action.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.adventure[this.$store.state.adventure.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.animation[this.$store.state.animation.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.comedy[this.$store.state.comedy.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.crime[this.$store.state.crime.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.drama[this.$store.state.drama.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.family[this.$store.state.family.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.fantasy[this.$store.state.fantasy.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.history[this.$store.state.history.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.horror[this.$store.state.horror.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.music[this.$store.state.music.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.mystery[this.$store.state.mystery.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.romance[this.$store.state.romance.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.scienceFiction[
          this.$store.state.scienceFiction.length - 1
        ].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.tvMovie[this.$store.state.tvMovie.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.thriller[this.$store.state.thriller.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.war[this.$store.state.war.length - 1].id
      ) {
        return true;
      }
      if (
        this.movie.id ===
        this.$store.state.western[this.$store.state.western.length - 1].id
      ) {
        return true;
      }
    },
    voteAverage() {
      return this.movie.vote_average * 10;
    }
  },
  methods: {
    showTrailer() {
      const id = this.movie.id;
      if (
        this.$route.path === "/tv-shows/popular" ||
        this.$route.path === "/tv-shows/top-rated" ||
        this.$route.path === "/tv-shows/on-air"
      ) {
        axios
          .get(
            "tv/" +
              id +
              "?api_key=" +
              process.env.apiKey +
              "&language=en-US&append_to_response=videos"
          )
          .then(res => {
            if (Object.keys(res.data.videos.results).length !== 0) {
              this.$modal.show("youtube-trailer-detail", {
                youtubeId: res.data.videos.results[0].key
              });
            }
            if (Object.keys(res.data.videos.results).length === 0) {
              this.$modal.show("youtube-trailer-detail", {
                youtubeId: "OCWj5xgu5Ng"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .get(
            "movie/" +
              id +
              "?api_key=" +
              process.env.apiKey +
              "&append_to_response=videos"
          )
          .then(res => {
            if (Object.keys(res.data.videos.results).length !== 0) {
              this.$modal.show("youtube-trailer-detail", {
                youtubeId: res.data.videos.results[0].key
              });
            }
            if (Object.keys(res.data.videos.results).length === 0) {
              this.$modal.show("youtube-trailer-detail", {
                youtubeId: "OCWj5xgu5Ng"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
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
        this.$store.dispatch("removeFromWatchlist", movieIndex);
      } else {
        if (
          this.$route.path === "/tv-shows/popular" ||
          this.$route.path === "/tv-shows/top-rated" ||
          this.$route.path === "/tv-shows/on-air"
        ) {
          this.$store.dispatch("addTvShowToWatchlist", this.movie.id);
        } else {
          this.$store.dispatch("addMovieToWatchlist", this.movie.id);
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.read-more {
  text-decoration: underline;
  font-style: italic;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: $color-secondary;
  }
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



