<template>
  <div :class="{ 'page-full': isActive, 'page-detail': !isActive }">
    <h1 v-if="toggleNothing" class="nothing">Nothing Found</h1>
    <Movies v-if="!view" v-for="(movie, index) in movies" :key="index" :movie="movie" />
    <detailed-view  v-if="view" v-for="(movie, index) in movies" :key="index" :movie="movie" />
    <div class="next-page" v-if="toggleButton" :style="checkPath"> 
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
  data() {
    return {
      toggleButton: true,
      toggleNothing: false
    };
  },
  components: {
    Movies,
    DetailedView
  },
  computed: {
    movies() {
      return this.$store.state.searchedMovies;
    },
    view() {
      return this.$store.getters.viewState;
    },
    isActive() {
      return this.$store.state.isActive;
    },
    checkPath() {
      let myString = this.$route.path;
      if (myString.includes("search") && this.$store.state.view === false) {
        return "margin-top: -31px";
      }
      if (myString.includes("search") && this.$store.state.view === true) {
        return "margin-top: 6px";
      }
    }
  },
  methods: {
    async nextPage() {
      let resMovie = await axios.get(
        "search/movie?api_key=" +
          process.env.apiKey +
          "&language=en-US&query=" +
          this.$route.params.query +
          "&page=" +
          this.$store.state.currentPageSearchMovies
      );
      const filteredArray = resMovie.data.results.filter(
        movie => typeof movie.poster_path === "string"
      );
      const deepFilteredArray = filteredArray.filter(
        movie => movie.genre_ids.length !== 0
      );
      this.$store.commit("pushSearchMovies", deepFilteredArray);
      this.$store.commit("setCurrentPageSearchMovies");
      if (resMovie.data.results.length === 0) {
        this.toggleButton = false;
      }
    },
    searchMovie() {
      axios
        .get(
          "search/movie?api_key=" +
            process.env.apiKey +
            "&language=en-US&query=" +
            this.$route.params.query +
            "&page=1"
        )
        .then(res => {
          if (Object.keys(res.data.results).length === 0) {
            this.toggleButton = false;
            this.toggleNothing = true;
          }
          if (Object.keys(res.data.results).length < 20) {
            this.toggleButton = false;
          }
          if (this.$store.state.searchedMovies === null) {
            const resArray = res.data.results;
            const filteredArray = resArray.filter(
              movie => typeof movie.poster_path === "string"
            );
            const deepFilteredArray = filteredArray.filter(
              movie => movie.genre_ids.length !== 0
            );
            this.$store.commit("getSearchedMovies", deepFilteredArray);
            this.$store.commit("setFirstLoadSearchMovie");
          }
        });
    }
  },
  created() {
    this.searchMovie();
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables";

.nothing {
  color: $color-white;
  margin-top: 80%;
  margin-left: 242%;
  white-space: nowrap;
}
</style>




