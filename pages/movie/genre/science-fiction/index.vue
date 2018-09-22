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
      return this.$store.state.scienceFiction;
    },
    view() {
      return this.$store.getters.viewState;
    },
    isActive() {
      return this.$store.state.isActive;
    }
  },
  methods: {
    async nextPage() {
      let resMovie = await axios.get(
        "discover/movie?api_key=" +
          process.env.apiKey +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
          this.$store.state.currentPageScienceFiction +
          "&with_genres=878"
      );
      this.$store.commit("pushScienceFiction", resMovie.data.results);
      this.$store.commit("setCurrentPageScienceFiction");
    }
  }
};
</script>



