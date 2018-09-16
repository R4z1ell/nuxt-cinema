<template>
  <div> 
    <modal name="youtube-trailer" :width="1050" :height="600">
      <iframe :src="`https://www.youtube.com/embed/` + checkIfTrailer" style="border:none;" height="600" width="1050"></iframe>
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
      <div class="movie__wrapper">
        <h1 class="movie__title" :style="checkTitleLength">
          {{ checkTitle }}
        </h1>
        <h3 class="movie__genre"> 
          {{ this.movie[0].genres[0].name }} {{ checkIfTwoGenres }} {{ checkIfGenreTwo }} 
          &nbsp; &#8901; &nbsp; {{ checkRelease }} &nbsp; &#8901; &nbsp; {{ checkRuntime | runtime }}
        </h3>
        <img :src="image" alt="poster" class="movie__poster">
      </div>
      <span class="movie__divider"></span>
      <div class="movie__content">
        <img :src="imgOne" alt="backdrop-image" class="movie__image" @click="showImageOne">
        <img :src="imgTwo" alt="backdrop-image" class="movie__image" @click="showImageTwo">
        <img :src="imgThree" alt="backdrop-image" class="movie__image" @click="showImageThree">
        <div class="movie__cast-container">
          <div class="movie__btn-container">
            <button-trailer class="movie__btn-trailer" @click="showTrailer" :style="checkIfComment">Watch Trailer</button-trailer>
            <button-ticket class="movie__btn-ticket" :style="checkIfComment">Buy Ticket</button-ticket>
          </div>
          <p class="movie__cast" :style="castStyle">Cast:
            <span class="movie__cast--char">&nbsp;&nbsp;{{ this.movie[0].credits.cast[0].name }},</span>
            <span class="movie__cast--char">{{ this.movie[0].credits.cast[1].name }},</span>
            <span class="movie__cast--char">{{ this.movie[0].credits.cast[2].name }}</span>
          </p>
        </div>
        <div class="movie__overview-container">
          <p class="movie__overview--title">Overview</p>
          <p class="movie__overview">{{ this.movie[0].overview }}</p>
        </div>
        <div class="movie__textarea-container">
          <span class="movie__textarea--comment">Leave a Comment</span>
          <div class="movie__textarea--wrapper">
            <textarea class="movie__textarea" spellcheck="false"></textarea>
            <button class="movie__btn-submit" :style="checkIfReview">Submit</button>
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
import ButtonTicket from "@/components/UI/Buttons/ButtonTicket";
import Comment from "@/components/Comment";

export default {
  methods: {
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
    }
  },
  computed: {
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
      if (
        this.movie[0].credits.cast[0].name.length +
          this.movie[0].credits.cast[1].name.length +
          this.movie[0].credits.cast[2].name.length >
          44 &&
        this.movie[0].reviews.results.length === 0 &&
        this.movie[0].overview.length < 290
      ) {
        return "margin: 0 35px 0 150px";
      } else {
        return "margin: 0 35px 0 150px";
      }
    },
    checkIfTrailer() {
      if (this.movie[0].videos.results.length > 0) {
        return this.movie[0].videos.results[0].key;
      } else {
        return "no-trailer";
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
      if (this.movie[0].title) {
        if (this.movie[0].title.length > 32) {
          return "font-size: 25px";
        } else {
          return "font-size: 33px";
        }
      } else {
        if (this.movie[0].episode_run_time[0].length > 32) {
          return "font-size: 25px";
        } else {
          return "font-size: 33px";
        }
      }
    },
    movie() {
      return this.$store.state.fullMovie;
    },
    image() {
      return "https://image.tmdb.org/t/p/w500" + this.$route.query.img;
    }
  },
  components: {
    ButtonTrailer,
    ButtonTicket,
    Comment
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

<style lang="scss">
@import "../../../assets/scss/variables";

.v--modal-overlay {
  background: rgba(black, 0.9);
}

.movie {
  position: absolute;
  top: 19.7%;

  &__btn-trailer,
  &__btn-ticket {
    width: 185px !important;
    height: 51px !important;
    font-size: 17px !important;
  }

  &__btn-trailer {
    margin-right: 10px;
    svg {
      width: 27px !important;
      padding-bottom: 7px;
    }
  }

  &__btn-ticket {
    svg {
      width: 45px !important;
      padding-bottom: 10px;
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
    grid-column: 1 / span 3;
    margin-top: 35px;
  }

  &__cast {
    font-size: 25px;
    font-weight: 700;
    color: $color-white;
    margin: 40px 35px 0 258px;

    &--char {
      font-size: 20px;
      color: $color-blue;
      margin-right: 5px;
    }
  }

  &__content {
    background-color: $color-primary;
    max-width: 1338px;
    min-width: 1338px;
    min-height: 870px;
    transform: translateX(42.2%);
    padding-left: 35px;
    padding-top: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-template-rows: auto auto auto 1fr;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__overview-container {
    grid-column: 1 / span 3;
  }

  &__overview {
    font-size: 20px;
    line-height: 25px;
    color: $color-white;
    opacity: 0.8;
    grid-column: 1 / span 3;
    margin-top: 10px;
    margin-right: 35px;

    &--title {
      margin-top: 35px;
      font-size: 25px;
      font-weight: 700;
      color: $color-white;
    }
  }

  &__image {
    width: 381px;
    height: 214px;
    border-radius: 10px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  &__poster {
    width: 487px;
    height: 730px;
    margin: 26px 0 0 40px;
  }

  &__divider {
    position: absolute;
    top: 19.7%;
    left: 27.5%;
    margin-left: 40px;
    height: 858px;
    width: 1px;
    background-color: $color-white;
    opacity: 0.15;
    position: fixed;
  }

  &__genre {
    font-size: 16px;
    font-weight: 400;
    color: $color-white;
    opacity: 0.8;
    margin-left: 40px;
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
    }

    &--wrapper {
      position: relative;
      margin: 10px 35px 0 0;
    }
  }

  &__title {
    font-weight: 700;
    color: $color-white;
    padding-top: 20px;
    margin: 0px 0 5px 40px;
    width: 500px;
  }

  &__wrapper {
    position: fixed;
    background-color: $color-primary;
    padding-bottom: 19px;
    padding-right: 25px;
    min-height: 870px;
  }
}
</style>
