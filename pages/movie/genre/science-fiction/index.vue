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
    view() {
      return this.$store.getters.viewState;
    },
    isActive() {
      return this.$store.state.isActive;
    }
  },
  asyncData({ store }) {
    if (store.state.scienceFiction === null) {
      return axios
        .get(
          "discover/movie?api_key=" +
            process.env.apiKey +
            "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=878"
        )
        .then(res => {
          const scienceFictionArray = [];
          scienceFictionArray.push(...res.data.results);
          store.commit("getScienceFiction", scienceFictionArray);
          return { movies: res.data.results };
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (!this.$store.state.scienceFiction[0].runtime) {
      for (const key in this.$store.state.scienceFiction) {
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
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>



