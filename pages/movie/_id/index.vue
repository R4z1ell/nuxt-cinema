<template>
  <div> 
    <!-- <modal name="youtube-trailer" :width="1050" :height="600"> -->
    <modal name="youtube-trailer" width="90%" height="80%">
      <iframe :src="`https://www.youtube.com/embed/` + checkIfTrailer" style="border:none;" height="100%" width="100%"></iframe>
      <!-- <iframe :src="`https://www.youtube.com/embed/` + checkIfTrailer" style="border:none;" height="600" width="1050"></iframe> -->
    </modal>
    <modal name="backdrop-image-1" :width="780" :height="439">
      <img :src="imgOne" alt="backdrop-image" style="{width: 780px, height: 439px}">
    </modal>
    <modal name="backdrop-image-2" :width="780" :height="439">
      <img :src="imgTwo" alt="backdrop-image" style="{width: 780px, height: 439px}">
    </modal>
    <modal name="backdrop-image-3" :width="780" :height="439">
      <img :src="imgThree" alt="backdrop-image" style="{width: 780px, height: 439px}">
    </modal>
    <div class="movie">
      <div class="movie__wrapper-1" v-if="windowWidth <= 1007 ? false : true">
        <h1 class="movie__title" :style="checkTitleLength">
          {{ checkTitle }}
        </h1>
        <h3 class="movie__genre"> 
          {{ this.movie[0].genres[0].name }} {{ checkIfTwoGenres }} {{ checkIfGenreTwo }} 
          &nbsp; &#8901; &nbsp; {{ checkRelease }} &nbsp; &#8901; &nbsp; {{ checkRuntime | runtime }}
        </h3>
        <img :src="image" alt="poster" class="movie__poster-1">
      </div>
      <span class="movie__divider"></span>
      <div class="movie__content">
        <div class="movie__wrapper-2" v-if="windowWidth <= 1007 ? true : false">
          <h1 class="movie__title">
            {{ checkTitle }}
          </h1>
          <h3 class="movie__genre"> 
            {{ this.movie[0].genres[0].name }} {{ checkIfTwoGenres }} {{ checkIfGenreTwo }} 
            &nbsp; &#8901; &nbsp; {{ checkRelease }} &nbsp; &#8901; &nbsp; {{ checkRuntime | runtime }}
          </h3>
        </div>
          <img :src="imgOne" alt="backdrop-image" class="movie__image movie__image-1" @click="showImageOne">
          <img :src="imgTwo" alt="backdrop-image" class="movie__image movie__image-2" @click="showImageTwo">
          <img :src="imgThree" alt="backdrop-image" class="movie__image movie__image-3" @click="showImageThree">
        <div class="movie__cast-container">
          <div class="movie__btn-container">
            <button-trailer class="movie__btn-trailer" @click="showTrailer" :style="checkIfComment">Watch Trailer</button-trailer>
          </div>
          <p class="movie__cast" :style="castStyle" v-if="Object.keys(this.movie[0].credits.cast).length !== 0 ? true : false">
            Cast:
            <span class="movie__cast--char" 
              @click="pushToSearchActorOne"
              v-if="Object.keys(this.movie[0].credits.cast).length >= 1 ? true : false">
                &nbsp;&nbsp;{{ this.movie[0].credits.cast[0].name }} {{ checkIfOneCast }}
            </span>
            <span class="movie__cast--char" 
              @click="pushToSearchActorTwo"
              v-if="Object.keys(this.movie[0].credits.cast).length >= 2 ? true : false">
                {{ this.movie[0].credits.cast[1].name }} {{ checkIfTwoCast }}
            </span>
            <span class="movie__cast--char" 
              @click="pushToSearchActorThree"
              v-if="Object.keys(this.movie[0].credits.cast).length >= 3 ? true : false">
                {{ this.movie[0].credits.cast[2].name }}
            </span>
          </p>
        </div>
        <div class="movie__overview-container">
          <p class="movie__overview--title">Overview</p>
          <p class="movie__overview">{{ this.movie[0].overview }}</p>
        </div>
        <div class="movie__textarea-container">
          <span class="movie__textarea--comment">Leave a Comment</span>
          <div class="movie__textarea--wrapper">
            <textarea class="movie__textarea" spellcheck="false" ref="review"></textarea>
            <button class="movie__btn-submit" :style="checkIfReview" @click.prevent="submitReview">Submit</button>
          </div>
        </div>
        <Comment v-for="(comment, index) in this.movie[0].reviews.results" :key="index" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import ButtonTrailer from "@/components/UI/Buttons/ButtonTrailer";
import Comment from "@/components/Comment";

export default {
  data() {
    return {
      windowWidth: 0
    };
  },
  components: {
    ButtonTrailer,
    Comment
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    submitReview() {
      if (this.$refs.review.value !== "") {
        this.$store.commit("addNewReview", {
          author: "guest",
          content: this.$refs.review.value
        });
        this.$refs.review.value = "";
      }
    },
    showTrailer() {
      this.$modal.show("youtube-trailer");
    },
    showImageOne() {
      this.$modal.show("backdrop-image-1");
    },
    showImageTwo() {
      this.$modal.show("backdrop-image-2");
    },
    showImageThree() {
      this.$modal.show("backdrop-image-3");
    },
    pushToSearchActorOne() {
      this.$router.push({
        path: "/search/actor/" + this.movie[0].credits.cast[0].name,
        query: { id: this.movie[0].credits.cast[0].id }
      });
      this.$store.commit("clearAll");
      this.$store.commit("resetActorMovies");
      this.$store.commit("fullView");
      this.$store.commit("pageFull");
    },
    pushToSearchActorTwo() {
      this.$router.push({
        path: "/search/actor/" + this.movie[0].credits.cast[1].name,
        query: { id: this.movie[0].credits.cast[1].id }
      });
      this.$store.commit("clearAll");
      this.$store.commit("resetActorMovies");
      this.$store.commit("fullView");
      this.$store.commit("pageFull");
    },
    pushToSearchActorThree() {
      this.$router.push({
        path: "/search/actor/" + this.movie[0].credits.cast[2].name,
        query: { id: this.movie[0].credits.cast[2].id }
      });
      this.$store.commit("clearAll");
      this.$store.commit("resetActorMovies");
      this.$store.commit("fullView");
      this.$store.commit("pageFull");
    }
  },
  computed: {
    checkIfOneCast() {
      if (Object.keys(this.movie[0].credits.cast).length > 1) {
        return ",";
      }
    },
    checkIfTwoCast() {
      if (Object.keys(this.movie[0].credits.cast).length > 2) {
        return ",";
      }
    },
    checkIfTwoGenres() {
      if (this.movie[0].genres.length >= 2) {
        return "/ ";
      }
    },
    checkIfGenreTwo() {
      if (this.movie[0].genres.length >= 2) {
        return this.movie[0].genres[1].name;
      } else {
        return "";
      }
    },
    checkIfReview() {
      if (
        this.movie[0].reviews.results.length === 0 &&
        this.movie[0].overview.length < 350
      ) {
        return "bottom: 36%";
      } else if (
        this.movie[0].reviews.results.length === 0 &&
        this.movie[0].overview.length > 750
      ) {
        return "bottom: 28%";
      }
    },
    checkIfComment() {
      if (
        this.movie[0].reviews.results.length === 0 &&
        this.movie[0].overview.length < 350
      ) {
        return "margin-top: 0px";
      } else if (
        this.movie[0].reviews.results.length === 0 &&
        this.movie[0].overview.length > 750
      ) {
        return "margin-top: 20px";
      }
    },
    castStyle() {
      if (this.windowWidth <= 1007) {
        return "margin: 0px 15px 0 15px";
      }
      if (this.windowWidth <= 770) {
        return "margin: 28px 15px 0 15px";
      } else {
        return "margin-right: 35px";
      }
    },
    checkIfTrailer() {
      if (this.movie[0].videos.results.length !== 0) {
        return this.movie[0].videos.results[0].key;
      } else {
        return "OCWj5xgu5Ng";
      }
    },
    checkTitle() {
      if (this.movie[0].title) {
        return this.movie[0].title;
      } else {
        return this.movie[0].original_name;
      }
    },
    checkRelease() {
      if (this.movie[0].release_date) {
        return this.movie[0].release_date;
      } else {
        return this.movie[0].first_air_date;
      }
    },
    checkRuntime() {
      if (
        this.$route.query.link !== "/tv-shows/popular" &&
        this.$route.query.link !== "/tv-shows/top-rated" &&
        this.$route.query.link !== "/tv-shows/on-air"
      ) {
        return this.movie[0].runtime;
      } else {
        return this.movie[0].episode_run_time[0];
      }
    },
    checkTitleLength() {
      if (
        this.movie[0].title &&
        this.movie[0].title.length > 32 &&
        this.movie[0].title.length <= 40
      ) {
        return "font-size: 25px";
      }
      if (this.movie[0].title && this.movie[0].title.length > 40) {
        return "font-size: 23px";
      }
      if (
        this.movie[0].original_name &&
        Object.keys(this.movie[0].original_name).length > 32 &&
        Object.keys(this.movie[0].original_name).length !== 0
      ) {
        return "font-size: 25px";
      }
    },
    movie() {
      return this.$store.state.fullMovie;
    },
    image() {
      if (this.$route.query.img) {
        return "https://image.tmdb.org/t/p/w500" + this.$route.query.img;
      } else {
        return "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
      }
    }
  },
  asyncData({ store, params, query }) {
    if (
      query.link !== "/tv-shows/popular" &&
      query.link !== "/tv-shows/top-rated" &&
      query.link !== "/tv-shows/on-air"
    ) {
      return axios
        .get("movie/" + params.id + "/images?api_key=" + process.env.apiKey)
        .then(res => {
          const backdropsArray = [];
          if (res.data.backdrops.length === 1) {
            backdropsArray.push({
              imgOne:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[0].file_path
            });
            store.commit("getMovieInfo", backdropsArray);
            return {
              imgOne: backdropsArray[0].imgOne,
              imgTwo: "http://via.placeholder.com/380x214?text=Coming+Soon",
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            };
          }
          if (res.data.backdrops.length === 2) {
            backdropsArray.push({
              imgOne:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[0].file_path,
              imgTwo:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[1].file_path,
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            });
            store.commit("getMovieInfo", backdropsArray);
            return {
              imgOne: backdropsArray[0].imgOne,
              imgTwo: backdropsArray[0].imgTwo,
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            };
          }
          if (
            res.data.backdrops.length !== 0 &&
            res.data.backdrops.length >= 3
          ) {
            backdropsArray.push({
              imgOne:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[0].file_path,
              imgTwo:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[1].file_path,
              imgThree:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[2].file_path
            });
            store.dispatch("getMovieInfo", backdropsArray);
            return {
              imgOne: backdropsArray[0].imgOne,
              imgTwo: backdropsArray[0].imgTwo,
              imgThree: backdropsArray[0].imgThree
            };
          }
          if (res.data.backdrops.length === 0) {
            return {
              imgOne: "http://via.placeholder.com/380x214?text=Coming+Soon",
              imgTwo: "http://via.placeholder.com/380x214?text=Coming+Soon",
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            };
          }
        });
    } else {
      return axios
        .get("tv/" + params.id + "/images?api_key=" + process.env.apiKey)
        .then(res => {
          const backdropsArray = [];
          if (res.data.backdrops.length === 1) {
            backdropsArray.push({
              imgOne:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[0].file_path
            });
            store.commit("getMovieInfo", backdropsArray);
            return {
              imgOne: backdropsArray[0].imgOne,
              imgTwo: "http://via.placeholder.com/380x214?text=Coming+Soon",
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            };
          }
          if (res.data.backdrops.length === 2) {
            backdropsArray.push({
              imgOne:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[0].file_path,
              imgTwo:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[1].file_path,
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            });
            store.commit("getMovieInfo", backdropsArray);
            return {
              imgOne: backdropsArray[0].imgOne,
              imgTwo: backdropsArray[0].imgTwo,
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            };
          }
          if (
            res.data.backdrops.length !== 0 &&
            res.data.backdrops.length >= 3
          ) {
            backdropsArray.push({
              imgOne:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[0].file_path,
              imgTwo:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[1].file_path,
              imgThree:
                "https://image.tmdb.org/t/p/w780" +
                res.data.backdrops[2].file_path
            });
            store.dispatch("getMovieInfo", backdropsArray);
            return {
              imgOne: backdropsArray[0].imgOne,
              imgTwo: backdropsArray[0].imgTwo,
              imgThree: backdropsArray[0].imgThree
            };
          }
          if (res.data.backdrops.length === 0) {
            return {
              imgOne: "http://via.placeholder.com/380x214?text=Coming+Soon",
              imgTwo: "http://via.placeholder.com/380x214?text=Coming+Soon",
              imgThree: "http://via.placeholder.com/380x214?text=Coming+Soon"
            };
          }
        });
    }
  },
  fetch({ store, params, query }) {
    if (
      query.link !== "/tv-shows/popular" &&
      query.link !== "/tv-shows/top-rated" &&
      query.link !== "/tv-shows/on-air"
    ) {
      return axios
        .get(
          "movie/" +
            params.id +
            "?api_key=" +
            process.env.apiKey +
            "&append_to_response=credits,reviews,videos"
        )
        .then(res => {
          store.dispatch("getFullMovieInfo", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      return axios
        .get(
          "tv/" +
            params.id +
            "?api_key=" +
            process.env.apiKey +
            "&language=en-US&append_to_response=credits,reviews,videos"
        )
        .then(res => {
          store.dispatch("getFullMovieInfo", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

// ! Fix the 'undefined' videos property when clicking on an actor's name
<style lang="scss">
@import "../../../assets/scss/variables";

.v--modal-overlay {
  background: rgba(black, 0.9);
}

.movie {
  position: absolute;
  top: 19.7%;

  @media (max-width: 1024px) {
    top: 16.7%;
  }

  &__btn-container {
    @media (max-width: 780px) {
      justify-self: center;
      margin-bottom: 25px;
    }
  }

  &__btn-trailer {
    width: 185px !important;
    height: 51px !important;
    font-size: 17px !important;

    @media (max-width: 1024px) {
      width: 154px !important;
      height: 46px !important;
      font-size: 15px !important;
      margin-left: 15px;
    }
  }

  &__btn-trailer {
    margin-right: 10px;
    svg {
      width: 27px !important;
      padding-bottom: 7px;

      @media (max-width: 1024px) {
        padding-bottom: 11px;
      }
    }
  }

  &__btn-submit {
    border-radius: 10px;
    background-color: $color-blue;
    padding-bottom: 2px;
    width: 118px;
    height: 37px;
    color: $color-white;
    font-size: 18px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    border: none;
    margin-bottom: 35px;
  }

  &__cast-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / span 3;
    margin-top: 35px;

    @media (height: 768px) and (width: 1366px) {
      margin-top: 25px;
    }

    @media (height: 800px) and (width: 1280px) {
      margin-top: 25px;
    }

    @media (max-width: 1024px) {
      align-items: center;
      margin-top: 22px;
    }

    @media (max-width: 780px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  &__cast {
    font-size: 25px;
    font-weight: 700;
    color: $color-white;

    @media (height: 768px) and (width: 1366px) {
      font-size: 21px;
    }

    @media (height: 800px) and (width: 1280px) {
      font-size: 21px;
    }

    @media (max-width: 1024px) {
      font-size: 19px;
    }

    &--char {
      font-size: 20px;
      color: $color-blue;
      margin-right: 5px;
      transition: color 0.2s;

      @media (height: 768px) and (width: 1366px) {
        font-size: 19px;
      }

      @media (height: 800px) and (width: 1280px) {
        font-size: 19px;
      }

      @media (max-width: 1024px) {
        font-size: 19px;
      }

      @media (max-width: 800px) {
        font-size: 17px;
      }

      @media (max-width: 700px) {
        font-size: 16px;
      }

      &:hover {
        color: lighten($color-blue, 15%);
        cursor: pointer;
      }
    }
  }

  &__content {
    background-color: $color-primary;
    max-width: 70.3%;
    //min-width: 1338px;
    //min-height: 870px;
    //transform: translateX(42.2%);
    transform: translateX(42.2%);
    padding-left: 35px;
    padding-top: 35px;
    display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: 32.5% 32.5% 32.6%;
    grid-column-gap: 15px;
    //grid-template-rows: auto auto auto 1fr;

    @media (max-width: 1780px) {
      transform: translateX(42.1%);
    }

    @media (max-width: 1709px) {
      transform: translateX(42%);
    }

    @media (max-width: 1644px) {
      transform: translateX(41.9%);
    }

    @media (max-width: 1587px) {
      transform: translateX(41.8%);
    }

    @media (max-width: 1531px) {
      transform: translateX(41.7%);
    }

    @media (max-width: 1480px) {
      transform: translateX(41.6%);
    }

    @media (height: 960px) and (width: 1440px) {
      padding-top: 50px;
      padding-left: 0px;
      max-width: 67.9%;
      transform: translateX(46.6%);
    }

    @media (max-width: 1431px) {
      transform: translateX(41.5%);
    }

    @media (max-width: 1387px) {
      transform: translateX(41.4%);
    }

    @media (height: 912px) and (width: 1368px) {
      padding-top: 56px;
      padding-left: 0px;
      max-width: 68.3%;
      transform: translateX(45.6%);
    }

    @media (height: 768px) and (width: 1366px) {
      padding-top: 83px;
      padding-left: 0px;
    }

    @media (max-width: 1345px) {
      transform: translateX(41.3%);
    }

    @media (max-width: 1305px) {
      transform: translateX(41.2%);
    }

    @media (height: 800px) and (width: 1280px) {
      padding-top: 72px;
      padding-left: 0px;
      transform: translateX(47.6%);
      max-width: 67.2%;
    }

    @media (max-width: 1268px) {
      transform: translateX(41.1%);
    }

    @media (max-width: 1232px) {
      transform: translateX(41%);
    }

    @media (max-width: 1200px) {
      transform: translateX(40.9%);
    }

    @media (max-width: 1168px) {
      transform: translateX(40.8%);
    }

    @media (max-width: 1137px) {
      transform: translateX(40.7%);
    }

    @media (max-width: 1024px) {
      max-width: 100%;
      transform: translateX(-2%);
      padding-top: 0px;
    }

    @media (max-width: 910px) {
      transform: translateX(-2.5%);
    }

    @media (max-width: 840px) {
      transform: translateX(-2.8%);
    }

    @media (max-width: 760px) {
      transform: translateX(-3.1%);
    }

    @media (max-width: 700px) {
      transform: translateX(-3.3%);
    }

    @media (max-width: 660px) {
      transform: translateX(-3.5%);
    }

    @media (max-width: 640px) {
      transform: translateX(-3.8%);
    }

    @media (max-width: 600px) {
      padding-left: 25px;
    }

    @media (max-width: 500px) {
      padding-left: 25px;
    }

    @media (height: 640px) and (width: 360px) {
      max-width: 340px;
      padding-left: 0px;
      transform: translateX(-0.8%);
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__overview-container {
    grid-column: 1 / span 3;

    @media (max-width: 1024px) {
      margin-left: 15px;
    }
  }

  &__overview {
    font-size: 20px;
    line-height: 25px;
    color: $color-white;
    opacity: 0.8;
    grid-column: 1 / span 3;
    margin-top: 10px;
    margin-right: 35px;

    @media (height: 768px) and (width: 1366px) {
      font-size: 18px;
    }

    @media (height: 800px) and (width: 1280px) {
      font-size: 18px;
    }

    @media (max-width: 1024px) {
      font-size: 17px;
    }

    @media (height: 640px) and (width: 360px) {
      margin-right: 0px;
      max-width: 95%;
    }

    &--title {
      margin-top: 35px;
      font-size: 25px;
      font-weight: 700;
      color: $color-white;

      @media (height: 768px) and (width: 1366px) {
        font-size: 21px;
      }

      @media (height: 800px) and (width: 1280px) {
        font-size: 21px;
      }

      @media (max-width: 1024px) {
        font-size: 22px;
      }

      @media (max-width: 780px) {
        margin-top: 25px;
      }
    }
  }

  &__image {
    //width: 381px;
    //height: 214px;
    width: 90%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s;

    @media (max-width: 1024px) {
      justify-self: center;
    }

    @media (max-width: 700px) {
      grid-column: 1 / -1;
      width: 75%;
    }

    &-1 {
      @media (max-width: 700px) {
        margin-bottom: 30px;
      }
    }

    &-2 {
      @media (max-width: 700px) {
        margin-bottom: 30px;
      }
    }

    &-3 {
      @media (max-width: 700px) {
        margin-bottom: 10px;
      }
    }

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  &__poster-1 {
    //width: 487px;
    width: 89%;
    height: auto;
    //height: 730px;
    margin: 26px 0 0 40px;

    @media (height: 912px) and (width: 1368px) {
      width: 85%;
    }

    @media (height: 768px) and (width: 1366px) {
      width: 76%;
    }

    @media (height: 800px) and (width: 1280px) {
      margin: 17px 0 0 40px;
    }

    @media (max-width: 1024px) {
      width: 77%;
    }
  }

  &__poster-2 {
    @media (max-width: 1024px) {
      width: 200px;
      height: auto;
      grid-column: 1 / -1;
    }
  }

  &__divider {
    position: absolute;
    //top: 19.7%;
    //left: 27.5%;
    left: 29.3%;
    //margin-left: 40px;
    //transform: translateY(0%);
    //height: 858px;
    height: 100%;
    min-height: 858px;
    width: 1px;
    background-color: $color-white;
    opacity: 0.15;
    //position: fixed;

    @media (height: 912px) and (width: 1368px) {
      left: 29.1%;
    }

    @media (height: 768px) and (width: 1366px) {
      left: 26.5%;
    }

    @media (height: 800px) and (width: 1280px) {
      left: 29.7%;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__genre {
    font-size: 16px;
    font-weight: 400;
    color: $color-white;
    opacity: 0.8;
    margin-left: 40px;

    @media (height: 912px) and (width: 1368px) {
      max-width: 85%;
    }

    @media (height: 768px) and (width: 1366px) {
      max-width: 80%;
    }

    @media (height: 640px) and (width: 360px) {
      font-size: 14px;
      margin-bottom: 25px;
    }

    @media (max-width: 1024px) {
      grid-column: 1 / span 3;
      text-align: center;
      margin-bottom: 35px;
      margin-left: 0px;
    }
  }

  &__textarea-container {
    margin-top: 35px;
    grid-column: 1 / span 3;
  }

  &__textarea {
    background-color: $color-primary-light;
    border: none;
    border-radius: 10px;
    height: 136px;
    color: $color-white;
    font-size: 17px;
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &--comment {
      font-size: 18px;
      font-weight: 700;
      color: $color-white;

      @media (max-width: 1024px) {
        margin-left: 15px;
      }
    }

    &--wrapper {
      position: relative;
      margin: 10px 35px 0 0;

      @media (max-width: 1024px) {
        margin: 12px 15px 0 15px;
      }
    }
  }

  &__title {
    font-weight: 700;
    color: $color-white;
    padding-top: 20px;
    margin: 0px 0 5px 40px;
    width: 500px;

    @media (height: 960px) and (width: 1440px) {
      max-width: 80%;
    }

    @media (height: 912px) and (width: 1368px) {
      max-width: 90%;
      padding-top: 11px;
    }

    @media (height: 768px) and (width: 1366px) {
      font-size: 23px;
      max-width: 85%;
    }

    @media (height: 800px) and (width: 1280px) {
      font-size: 23px;
      max-width: 85%;
    }

    @media (max-width: 1024px) {
      grid-column: 2;
      padding-top: 35px;
      margin: 0 0 8px 0;
      text-align: center;
      width: 100%;
    }

    @media (height: 640px) and (width: 360px) {
      font-size: 23px;
      padding-top: 45px;
    }
  }

  &__wrapper-1 {
    width: 29.7%;
    position: fixed;
    background-color: $color-primary;
    padding-bottom: 19px;
    padding-right: 25px;
    min-height: 870px;

    @media (height: 960px) and (width: 1440px) {
      width: 27.7%;
      margin-top: 19px;
      padding-right: 0px;
    }

    @media (height: 912px) and (width: 1368px) {
      width: 28.7%;
      margin-top: 38px;
      padding-right: 0px;
    }

    @media (height: 768px) and (width: 1366px) {
      width: 27.7%;
      margin-top: 54px;
      padding-right: 0px;
    }

    @media (height: 800px) and (width: 1280px) {
      width: 27.7%;
      margin-top: 44px;
      padding-right: 0px;
    }
  }

  &__wrapper-2 {
    @media (max-width: 1024px) {
      grid-column: 1 / -1;
    }
  }
}
</style>
