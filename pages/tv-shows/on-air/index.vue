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
  methods: {
    nextPage() {
      axios
        .get(
          "tv/on_the_air?api_key=" +
            process.env.apiKey +
            "&language=en-US&page=" +
            this.$store.state.currentPageTvOnAir
        )
        .then(res => {
          this.$store.commit("pushTvOnAir", res.data.results);
          for (const key in res.data.results) {
            axios
              .get(
                "tv/" +
                  res.data.results[key].id +
                  "?api_key=" +
                  process.env.apiKey +
                  "&append_to_response=videos"
              )
              .then(res => {
                const infoArray = [];
                infoArray.push({
                  id: res.data.id,
                  runtime: res.data.episode_run_time[0],
                  trailerId: res.data.videos.results[0].key
                });
                this.$store.commit("setInfoMovie", infoArray);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
      this.$store.commit("setCurrentPageTvOnAir");
    }
  },
  computed: {
    movies() {
      return this.$store.state.tvOnAir;
    },
    view() {
      return this.$store.getters.viewState;
    },
    isActive() {
      return this.$store.state.isActive;
    }
  },
  mounted() {
    if (this.$store.state.firstLoadTvOnAir) {
      for (const key in this.movies) {
        axios
          .get(
            "tv/" +
              this.movies[key].id +
              "?api_key=" +
              process.env.apiKey +
              "&language=en-US&append_to_response=videos"
          )
          .then(res => {
            const infoArray = [];
            infoArray.push({
              id: res.data.id,
              runtime: res.data.episode_run_time[0],
              trailerId: res.data.videos.results[0].key
            });
            this.$store.commit("setInfoMovie", infoArray);
            this.$store.commit("setFirstLoadTvOnAir");
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>



