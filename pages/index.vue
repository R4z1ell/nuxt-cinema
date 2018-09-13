<template>
  <div :class="{ 'page-full': isActive, 'page-detail': !isActive }">
    <Movies v-if="!view" v-for="(movie, index) in movies" :key="index" :movie="movie" />
    <detailed-view  v-if="view" v-for="(movie, index) in movies" :key="index" :movie="movie" />
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
  mounted() {
    if (!this.$store.state.movies[0].runtime) {
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
            this.movies[key].runtime = res.data.runtime;
            if (res.data.videos.results.length !== 0) {
              this.movies[key].trailerId = res.data.videos.results[0].key;
            } else {
              this.movies[key].trailerId = "no-trailer";
            }
            //console.log(res.data);
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

.page-full {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 40px;
  padding: 40px;
  height: 100%;
  background-color: $color-primary;
  transform: translateY(15.2%);

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
  height: 100%;
  background-color: $color-primary;
  transform: translateY(2.46%);
}
</style>

