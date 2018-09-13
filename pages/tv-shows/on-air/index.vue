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
    if (store.state.tvOnAir === null) {
      return axios
        .get(
          "tv/on_the_air?api_key=" +
            process.env.apiKey +
            "&language=en-US&page=1"
        )
        .then(res => {
          const onAirTvArray = [];
          onAirTvArray.push(...res.data.results);
          store.commit("getTvOnAir", onAirTvArray);
          return { movies: res.data.results };
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (!this.$store.state.tvOnAir[0].runtime) {
      for (const key in this.$store.state.tvOnAir) {
        axios
          .get(
            "tv/" +
              this.movies[key].id +
              "?api_key=" +
              process.env.apiKey +
              "&language=en-US&append_to_response=videos"
          )
          .then(res => {
            this.movies[key].runtime = res.data.episode_run_time[0];
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



