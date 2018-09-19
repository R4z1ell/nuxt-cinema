<template>
  <div :class="{ 'page-full': isActive, 'page-detail': !isActive }">
    <Movies v-if="!view" v-for="(movie, index) in movies" :key="index" :movie="movie" />
    <detailed-view  v-if="view" v-for="(movie, index) in movies" :key="index" :movie="movie" />
    <div class="next-page"> 
      <svg version="1.1" @click="nextPage" class="next-page__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">
        <path class="next-page__path" d="M213.333,0C95.514,0,0,95.514,0,213.333s95.514,213.333,213.333,213.333 s213.333-95.514,213.333-213.333S331.153,0,213.333,0z M341.333,251.733h-89.6v89.6h-76.8v-89.6h-89.6v-76.8h89.6v-89.6h76.8v89.6 h89.6V251.733z"/>
      </svg>
    </div>
  </div> 
</template>

<script>
import Movies from "@/components/Movies";
import DetailedView from "@/components/DetailedView";
import axios from "~/plugins/axios";

export default {
  components: {
    Movies,
    DetailedView
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
    view() {
      return this.$store.getters.viewState;
    },
    isActive() {
      return this.$store.state.isActive;
    }
  },
  methods: {
    nextPage() {
      axios
        .get(
          "movie/popular?api_key=" +
            process.env.apiKey +
            "&language=en-US&page=" +
            this.$store.state.currentPagePopular
        )
        .then(res => {
          this.$store.commit("pushMovies", res.data.results);
          // ! Try to implement an async call for all these API requests to prevent 429 errors hopefully
          for (const key in res.data.results) {
            axios
              .get(
                "movie/" +
                  res.data.results[key].id +
                  "?api_key=" +
                  process.env.apiKey +
                  "&append_to_response=videos"
              )
              .then(res => {
                const infoArray = [];
                infoArray.push({
                  id: res.data.id,
                  runtime: res.data.runtime,
                  trailerId: res.data.videos.results[0].key
                });
                this.$store.commit("setInfoMovie", infoArray);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
      this.$store.commit("setCurrentPagePopular");
    }
  },
  mounted() {
    if (this.$store.state.infoMovie.length === 0) {
      for (const key in this.movies) {
        axios
          .get(
            "movie/" +
              this.movies[key].id +
              "?api_key=" +
              process.env.apiKey +
              "&append_to_response=videos"
          )
          .then(res => {
            const infoArray = [];
            infoArray.push({
              id: res.data.id,
              runtime: res.data.runtime,
              trailerId: res.data.videos.results[0].key
            });
            this.$store.commit("setInfoMovie", infoArray);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base";
@import "../assets/scss/variables";

.next-page {
  text-align: center;
  width: 95vw;
  margin-top: -20px;
  margin-bottom: 15px;

  &__icon {
    cursor: pointer;
    width: 45px;
    height: 45px;
    transition: all 0.1s;

    &:hover {
      transform: translateY(-1.5px);
    }
  }

  &__icon:active {
    transform: translateY(0);
  }

  &__path {
    fill: darken(#00d474, 15%);
    transition: all 0.2s;
  }
}

.next-page__icon:hover .next-page__path {
  fill: #00d474;
}

.page-full {
  display: grid;
  grid-template-columns: repeat(5, 332.5px);
  grid-gap: 40px;
  padding: 40px;
  height: 100vh;
  transform: translateY(19.6%);

  @media (max-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 35px;
  }

  @media (max-width: 1387px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }

  @media (max-width: 1135px) {
    grid-gap: 25px;
  }

  @media (max-width: 1066px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
}

.page-detail {
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px;
  height: 100vh;
  transform: translateY(19.6%);
}
</style>

