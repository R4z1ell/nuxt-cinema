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
      return this.$store.state.actorMovies;
    },
    view() {
      return this.$store.getters.viewState;
    },
    isActive() {
      return this.$store.state.isActive;
    }
  },
  methods: {
    searchActorMovies() {
      if (this.$store.state.actorMovies === null) {
        axios
          .get(
            "person/" +
              this.$route.query.id +
              "/movie_credits?api_key=" +
              process.env.apiKey +
              "&language=en-US"
          )
          .then(res => {
            const resArray = res.data.cast;
            const filteredArray = resArray.filter(
              movie => typeof movie.poster_path === "string"
            );
            const deepFilteredArray = filteredArray.filter(
              movie => movie.genre_ids.length !== 0
            );
            this.$store.commit("getActorMovies", deepFilteredArray);
          });
      }
    }
  },
  created() {
    this.searchActorMovies();
  }
};
</script>

<style lang="scss">
.page-full .movies:nth-child(5n + 1):nth-last-child(-n + 5),
.page-full .movies:nth-child(5n + 1):nth-last-child(-n + 5) ~ .movies {
  margin-bottom: 30px;
}

.page-detail .main:nth-child(n + 1):nth-last-child(-n + 1),
.page-detail .main:nth-child(n + 1):nth-last-child(-n + 1) ~ .main {
  margin-bottom: 20px;
}
</style>




