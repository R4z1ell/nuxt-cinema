import Vuex from "vuex";
import axios from "~/plugins/axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      view: false,
      isActive: true,
      firstLoadTopRated: true,
      firstLoadUpcoming: true,
      movies: null,
      watchlist: [],
      backdrops: [],
      fullMovie: [],
      infoMovie: [],
      topRated: null,
      upcoming: null,
      nowPlaying: null,
      action: null,
      adventure: null,
      animation: null,
      comedy: null,
      crime: null,
      documentary: null,
      drama: null,
      family: null,
      fantasy: null,
      history: null,
      horror: null,
      music: null,
      mystery: null,
      romance: null,
      scienceFiction: null,
      tvMovie: null,
      thriller: null,
      war: null,
      western: null,
      tvPopular: null,
      tvTopRated: null,
      tvOnAir: null
    },
    getters: {
      viewState(state) {
        return state.view;
      },
      activeClass(state) {
        return state.isActive;
      },
      getMovies(state) {
        return state.movies;
      },
      getWatchlist(state) {
        return state.watchlist;
      },
      getBackdrops(state) {
        return state.backdrops;
      }
    },
    mutations: {
      setMovies(state, movies) {
        state.movies = movies;
      },
      pushMovies(state, movies) {
        state.movies = state.movies.concat(movies);
      },
      pushTopRated(state, movies) {
        state.topRated = state.topRated.concat(movies);
      },
      pushUpcoming(state, movies) {
        state.upcoming = state.upcoming.concat(movies);
      },
      setWatchlist(state, movie) {
        state.watchlist = state.watchlist.concat(movie);
      },
      setInfoMovie(state, movie) {
        state.infoMovie = state.infoMovie.concat(movie);
      },
      removeFromWatchlist(state, movieIndex) {
        state.watchlist.splice(movieIndex, 1);
      },
      getMovieInfo(state, movieInfo) {
        state.backdrops.push(movieInfo);
      },
      getFullMovieInfo(state, movieInfo) {
        state.fullMovie.push(movieInfo);
      },
      getTopRated(state, movies) {
        state.topRated = movies;
      },
      getUpcoming(state, movies) {
        state.upcoming = movies;
      },
      getNowPlaying(state, movies) {
        state.nowPlaying = movies;
      },
      getAction(state, movies) {
        state.action = movies;
      },
      getAdventure(state, movies) {
        state.adventure = movies;
      },
      getAnimation(state, movies) {
        state.animation = movies;
      },
      getComedy(state, movies) {
        state.comedy = movies;
      },
      getCrime(state, movies) {
        state.crime = movies;
      },
      getDocumentary(state, movies) {
        state.documentary = movies;
      },
      getDrama(state, movies) {
        state.drama = movies;
      },
      getFamily(state, movies) {
        state.family = movies;
      },
      getFantasy(state, movies) {
        state.fantasy = movies;
      },
      getHistory(state, movies) {
        state.history = movies;
      },
      getHorror(state, movies) {
        state.horror = movies;
      },
      getMusic(state, movies) {
        state.music = movies;
      },
      getMystery(state, movies) {
        state.mystery = movies;
      },
      getRomance(state, movies) {
        state.romance = movies;
      },
      getScienceFiction(state, movies) {
        state.scienceFiction = movies;
      },
      getTvMovie(state, movies) {
        state.tvMovie = movies;
      },
      getThriller(state, movies) {
        state.thriller = movies;
      },
      getWar(state, movies) {
        state.war = movies;
      },
      getWestern(state, movies) {
        state.western = movies;
      },
      getTvPopular(state, movies) {
        state.tvPopular = movies;
      },
      getTvTopRated(state, movies) {
        state.tvTopRated = movies;
      },
      getTvOnAir(state, movies) {
        state.tvOnAir = movies;
      },
      clearAll(state) {
        state.backdrops = [];
        state.fullMovie = [];
      },
      detailedView: state => {
        state.view = true;
      },
      fullView: state => {
        state.view = false;
      },
      pageFull: state => {
        state.isActive = true;
      },
      pageDetail: state => {
        state.isActive = false;
      },
      setFirstLoadTopRated: state => {
        state.firstLoadTopRated = false;
      },
      setFirstLoadUpcoming: state => {
        state.firstLoadUpcoming = false;
      }
    },
    actions: {
      nuxtServerInit({ commit }) {
        return axios
          .get(
            "movie/popular?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          )
          .then(res => {
            const moviesArray = [];
            moviesArray.push(...res.data.results);
            commit("setMovies", moviesArray);
            //console.log(moviesArray);
          })
          .catch(error => {
            console.log(error);
          });
      },
      addToWatchlist({ commit }, id) {
        axios
          .get(
            "movie/" +
              id +
              "?api_key=" +
              process.env.apiKey +
              "&append_to_response=videos"
          )
          .then(res => {
            const watchlistArray = [];
            watchlistArray.push({
              img: "https://image.tmdb.org/t/p/w500" + res.data.poster_path,
              title: res.data.title,
              added: true,
              trailerLink:
                "https://www.youtube.com/embed/" +
                res.data.videos.results[0].key
            });
            commit("setWatchlist", watchlistArray);
          })
          .catch(error => {
            console.log(error);
          });
      },
      removeFromWatchlist({ commit }, movieIndex) {
        commit("removeFromWatchlist", movieIndex);
      },
      getMovieInfo({ commit }, movieInfo) {
        commit("getMovieInfo", movieInfo);
      },
      getFullMovieInfo({ commit }, movieInfo) {
        commit("getFullMovieInfo", movieInfo);
      },
      getTopRated({ commit }, movies) {
        commit("getTopRated", movies);
      },
      getUpcoming({ commit }, movies) {
        commit("getUpcoming", movies);
      },
      getNowPlaying({ commit }, movies) {
        commit("getNowPlaying", movies);
      },
      clearAll({ commit }) {
        commit("clearAll");
      }
    }
  });
};

export default createStore;
