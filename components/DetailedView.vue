<template>
  <div class="main"> 
    <div class="view" :style="[checkIfLastComponent ? {'margin': '25px 0 10px 0'} : {'margin': '25px 0 40px 0'}]">
      <nuxt-link :to="{path: movieLink, params: {id: this.movie.id}, query: { img: this.movie.poster_path, link: this.$route.path}}">
        <img :src="image" alt="movie-image" class="view__image-1">
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
            :star-size="this.checkWidth" 
            :show-rating="false" 
            active-color="#FF6500"
            :rounded-corners="true"
          ></star-rating>
          <p class="view__stars--count">{{ this.movie.vote_count }} &nbsp; Vote</p>
        </div>
        <nuxt-link :to="{path: movieLink, params: {id: this.movie.id}, query: { img: this.movie.poster_path, link: this.$route.path}}">
          <img :src="image" alt="movie-image" class="view__image-2">
        </nuxt-link>
        <div class="view__btn">
          <button-trailer @click="showTrailer">Watch Trailer</button-trailer>
          <button-watchlist @click="onAgree" class="view__btn--list">
            {{ checkWatchlist(this.movie.title) ? "Remove from Watchlist" : "Add to Watchlist" }}
          </button-watchlist>
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
      </div>
    </div>
    <span class="view__split" :style="[checkIfLastComponent ? {'height': '0px'} : {'height': '1px'}]"></span>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import ButtonTrailer from "@/components/UI/Buttons/ButtonTrailer";
import ButtonWatchlist from "@/components/UI/Buttons/ButtonWatchlist";
import CircleBar from "@/components/UI/Buttons/CircleBar";
import StarRating from "vue-star-rating";

export default {
  data() {
    return {
      readMore: true,
      windowWidth: 0
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
    ButtonWatchlist,
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
    checkWidth() {
      if (this.windowWidth <= 320) {
        return 18;
      } else {
        return 25;
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
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
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
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
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

  @media (max-width: 1370px) {
    height: 50px;
  }

  @media (max-width: 800px) {
    height: 44px;
  }

  @media (max-width: 500px) {
    height: 35px;
  }
}

.view {
  position: relative;
  display: flex;
  margin: 25px 0 40px 0;

  &__stars {
    display: flex;
    margin-left: 0;

    @media (max-width: 1370px) {
      margin: 0px 0 15px 0;
    }

    &--count {
      margin: 18px 0 0 15px;
      font-size: 16;
      color: $color-white;
      opacity: 0.8;

      @media (height: 812px) and (width: 375px) {
        font-size: 12px;
      }

      @media (height: 667px) and (width: 375px) {
        font-size: 12px;
      }

      @media (height: 640px) and (width: 360px) {
        font-size: 12px;
      }

      @media (height: 568px) and (width: 320px) {
        font-size: 12px;
      }
    }
  }

  &__btn {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 5%;
    top: 30%;

    @media (max-width: 1370px) {
      position: static;
      display: block;
      top: 41%;
      right: 23%;
    }

    @media (max-width: 1350px) {
      right: 22%;
    }

    @media (max-width: 1330px) {
      right: 21.5%;
    }

    @media (max-width: 1300px) {
      right: 21%;
    }

    @media (max-width: 1250px) {
      right: 19.5%;
    }

    @media (max-width: 1230px) {
      right: 19%;
    }

    @media (max-width: 1200px) {
      right: 18.5%;
    }

    @media (max-width: 1172px) {
      right: 16.5%;
    }

    @media (max-width: 1150px) {
      right: 16%;
    }

    @media (max-width: 1100px) {
      right: 15%;
    }

    @media (max-width: 1070px) {
      right: 14%;
    }

    @media (max-width: 1030px) {
      right: 12.5%;
    }

    @media (max-width: 1000px) {
      right: 13.5%;
    }

    @media (max-width: 950px) {
      right: 11.5%;
    }

    @media (max-width: 920px) {
      right: 9.5%;
    }

    @media (max-width: 850px) {
      right: 7.5%;
    }

    @media (max-width: 815px) {
      right: 5.5%;
    }

    @media (max-width: 800px) {
      margin-top: 29px;
    }

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &--list {
      color: $color-white;
      font-size: 20px;
      margin-top: 15px;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;

      @media (max-width: 1370px) {
        margin-top: 0;
        margin-left: 15px;
      }

      &:hover {
        color: $color-secondary;
        transition: color 0.2s;
      }
    }
  }

  &__image-1 {
    width: 225px;
    height: 338px;

    @media (max-width: 1094px) {
      width: 203px;
      height: 304.5px;
    }

    @media (max-width: 799px) {
      display: none;
    }
  }

  &__image-2 {
    width: 155px;
    height: 232.5px;

    @media (min-width: 800px) {
      display: none;
    }
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

    @media (max-width: 1050px) {
      font-size: 30px;
    }

    @media (max-width: 900px) {
      font-size: 25px;
    }

    @media (max-width: 799px) {
      font-size: 30px;
      margin: 0 0 0 0;
    }

    @media (max-width: 720px) {
      font-size: 28px;
    }

    @media (max-width: 680px) {
      font-size: 25px;
    }

    @media (max-width: 600px) {
      font-size: 21px;
    }

    @media (max-width: 500px) {
      font-size: 19px;
    }

    @media (height: 812px) and (width: 375px) {
      font-size: 17px;
      text-align: center;
      transform: translateY(-30%);
    }

    @media (height: 667px) and (width: 375px) {
      font-size: 17px;
      text-align: center;
      transform: translateY(-30%);
    }

    @media (height: 640px) and (width: 360px) {
      font-size: 17px;
      text-align: center;
      transform: translateY(-30%);
    }

    @media (height: 568px) and (width: 320px) {
      font-size: 16px;
      text-align: center;
      transform: translateY(-30%);
    }
  }

  &__genre {
    color: $color-white;
    opacity: 0.8;
    margin: 3px 0 0 25px;
    font-size: 15px;

    @media (max-width: 1370px) {
      margin: 0px 0 0 25px;
    }

    @media (max-width: 799px) {
      margin: 0 0 0 0;
    }

    @media (height: 568px) and (width: 320px) {
      font-size: 13px;
    }
  }

  &__plot {
    color: $color-white;
    opacity: 0.8;
    font-size: 18px;
    margin-left: 25px;
    margin-top: 0;

    @media (max-width: 1370px) {
      margin-left: 66px;
      margin-top: 30px;
    }

    @media (max-width: 1070px) {
      font-size: 17px;
    }

    @media (max-width: 800px) {
      margin-top: 26px;
      margin-left: 20px;
    }

    @media (height: 812px) and (width: 375px) {
      margin-left: 0px;
    }

    @media (height: 667px) and (width: 375px) {
      margin-left: 0px;
    }

    @media (height: 640px) and (width: 360px) {
      margin-left: 0px;
    }

    @media (height: 568px) and (width: 320px) {
      margin-left: 0px;
    }
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 55%;

  @media (max-width: 1370px) {
    width: 80%;
    align-items: center;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
}

.main {
  display: flex;
  flex-direction: column;
}
</style>



