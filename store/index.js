import Vuex from "vuex";
import axios from "~/plugins/axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      view: false,
      isActive: true,
      firstLoadTopRated: true,
      firstLoadUpcoming: true,
      firstLoadNowPlaying: true,
      firstLoadTvPopular: true,
      firstLoadTvTopRated: true,
      firstLoadTvOnAir: true,
      firstLoadAction: true,
      firstLoadAdventure: true,
      firstLoadAnimation: true,
      firstLoadComedy: true,
      firstLoadCrime: true,
      firstLoadDrama: true,
      firstLoadFamily: true,
      firstLoadFantasy: true,
      firstLoadHistory: true,
      firstLoadHorror: true,
      firstLoadMusic: true,
      firstLoadMystery: true,
      firstLoadRomance: true,
      firstLoadScienceFiction: true,
      firstLoadTvMovie: true,
      firstLoadThriller: true,
      firstLoadWar: true,
      firstLoadWestern: true,
      firstLoadSearchMovie: true,
      movies: null,
      searchedMovies: null,
      actorMovies: null,
      watchlist: [],
      backdrops: [],
      fullMovie: [],
      infoMovie: [],
      topRated: null,
      upcoming: null,
      nowPlaying: null,
      tvPopular: null,
      tvTopRated: null,
      tvOnAir: null,
      action: null,
      adventure: null,
      animation: null,
      comedy: null,
      crime: null,
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
      currentPagePopular: 2,
      currentPageTopRated: 2,
      currentPageUpcoming: 2,
      currentPageNowPlaying: 2,
      currentPageTvPopular: 2,
      currentPageTvTopRated: 2,
      currentPageTvOnAir: 2,
      currentPageAction: 2,
      currentPageAdventure: 2,
      currentPageAnimation: 2,
      currentPageComedy: 2,
      currentPageCrime: 2,
      currentPageDrama: 2,
      currentPageFamily: 2,
      currentPageFantasy: 2,
      currentPageHistory: 2,
      currentPageHorror: 2,
      currentPageMusic: 2,
      currentPageMystery: 2,
      currentPageRomance: 2,
      currentPageScienceFiction: 2,
      currentPageTvMovie: 2,
      currentPageThriller: 2,
      currentPageWar: 2,
      currentPageWestern: 2,
      currentPageSearchMovies: 2
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
      pushSearchMovies(state, movies) {
        state.searchedMovies = state.searchedMovies.concat(movies);
      },
      pushTopRated(state, movies) {
        state.topRated = state.topRated.concat(movies);
      },
      pushUpcoming(state, movies) {
        state.upcoming = state.upcoming.concat(movies);
      },
      pushNowPlaying(state, movies) {
        state.nowPlaying = state.nowPlaying.concat(movies);
      },
      pushTvPopular(state, movies) {
        state.tvPopular = state.tvPopular.concat(movies);
      },
      pushTvTopRated(state, movies) {
        state.tvTopRated = state.tvTopRated.concat(movies);
      },
      pushTvOnAir(state, movies) {
        state.tvOnAir = state.tvOnAir.concat(movies);
      },
      pushAction(state, movies) {
        state.action = state.action.concat(movies);
      },
      pushAdventure(state, movies) {
        state.adventure = state.adventure.concat(movies);
      },
      pushAnimation(state, movies) {
        state.animation = state.animation.concat(movies);
      },
      pushComedy(state, movies) {
        state.comedy = state.comedy.concat(movies);
      },
      pushCrime(state, movies) {
        state.crime = state.crime.concat(movies);
      },
      pushDrama(state, movies) {
        state.drama = state.drama.concat(movies);
      },
      pushFamily(state, movies) {
        state.family = state.family.concat(movies);
      },
      pushFantasy(state, movies) {
        state.fantasy = state.fantasy.concat(movies);
      },
      pushHistory(state, movies) {
        state.history = state.history.concat(movies);
      },
      pushHorror(state, movies) {
        state.horror = state.horror.concat(movies);
      },
      pushMusic(state, movies) {
        state.music = state.music.concat(movies);
      },
      pushMystery(state, movies) {
        state.mystery = state.mystery.concat(movies);
      },
      pushRomance(state, movies) {
        state.romance = state.romance.concat(movies);
      },
      pushScienceFiction(state, movies) {
        state.scienceFiction = state.scienceFiction.concat(movies);
      },
      pushTvMovie(state, movies) {
        state.tvMovie = state.tvMovie.concat(movies);
      },
      pushThriller(state, movies) {
        state.thriller = state.thriller.concat(movies);
      },
      pushWar(state, movies) {
        state.war = state.war.concat(movies);
      },
      pushWestern(state, movies) {
        state.western = state.western.concat(movies);
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
      getSearchedMovies(state, movies) {
        state.searchedMovies = movies;
      },
      getActorMovies(state, movies) {
        state.actorMovies = movies;
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
      },
      setFirstLoadNowPlaying: state => {
        state.firstLoadNowPlaying = false;
      },
      setFirstLoadTvPopular: state => {
        state.firstLoadTvPopular = false;
      },
      setFirstLoadTvTopRated: state => {
        state.firstLoadTvTopRated = false;
      },
      setFirstLoadTvOnAir: state => {
        state.firstLoadTvOnAir = false;
      },
      setFirstLoadAction: state => {
        state.firstLoadAction = false;
      },
      setFirstLoadAdventure: state => {
        state.firstLoadAdventure = false;
      },
      setFirstLoadAnimation: state => {
        state.firstLoadAnimation = false;
      },
      setFirstLoadComedy: state => {
        state.firstLoadComedy = false;
      },
      setFirstLoadCrime: state => {
        state.firstLoadCrime = false;
      },
      setFirstLoadDrama: state => {
        state.firstLoadDrama = false;
      },
      setFirstLoadFamily: state => {
        state.firstLoadFamily = false;
      },
      setFirstLoadFantasy: state => {
        state.firstLoadFantasy = false;
      },
      setFirstLoadHistory: state => {
        state.firstLoadHistory = false;
      },
      setFirstLoadHorror: state => {
        state.firstLoadHorror = false;
      },
      setFirstLoadMusic: state => {
        state.firstLoadMusic = false;
      },
      setFirstLoadMystery: state => {
        state.firstLoadMystery = false;
      },
      setFirstLoadRomance: state => {
        state.firstLoadRomance = false;
      },
      setFirstLoadScienceFiction: state => {
        state.firstLoadScienceFiction = false;
      },
      setFirstLoadTvMovie: state => {
        state.firstLoadTvMovie = false;
      },
      setFirstLoadThriller: state => {
        state.firstLoadThriller = false;
      },
      setFirstLoadWar: state => {
        state.firstLoadWar = false;
      },
      setFirstLoadWestern: state => {
        state.firstLoadWestern = false;
      },
      setFirstLoadSearchMovie: state => {
        state.firstLoadSearchMovie = false;
      },
      resetFirstLoadSearchMovie: state => {
        state.firstLoadSearchMovie = true;
      },
      resetCurrentPageSearchMovies: state => {
        state.currentPageSearchMovies = 2;
      },
      resetSearchedMovies: state => {
        state.searchedMovies = null;
      },
      resetActorMovies: state => {
        state.actorMovies = null;
      },
      setCurrentPageSearchMovies: state => {
        state.currentPageSearchMovies++;
      },
      setCurrentPagePopular: state => {
        state.currentPagePopular++;
      },
      setCurrentPageTopRated: state => {
        state.currentPageTopRated++;
      },
      setCurrentPageUpcoming: state => {
        state.currentPageUpcoming++;
      },
      setCurrentPageNowPlaying: state => {
        state.currentPageNowPlaying++;
      },
      setCurrentPageTvPopular: state => {
        state.currentPageTvPopular++;
      },
      setCurrentPageTvTopRated: state => {
        state.currentPageTvTopRated++;
      },
      setCurrentPageTvOnAir: state => {
        state.currentPageTvOnAir++;
      },
      setCurrentPageAction: state => {
        state.currentPageAction++;
      },
      setCurrentPageAdventure: state => {
        state.currentPageAdventure++;
      },
      setCurrentPageAnimation: state => {
        state.currentPageAnimation++;
      },
      setCurrentPageComedy: state => {
        state.currentPageComedy++;
      },
      setCurrentPageCrime: state => {
        state.currentPageCrime++;
      },
      setCurrentPageDrama: state => {
        state.currentPageDrama++;
      },
      setCurrentPageFamily: state => {
        state.currentPageFamily++;
      },
      setCurrentPageFantasy: state => {
        state.currentPageFantasy++;
      },
      setCurrentPageHistory: state => {
        state.currentPageHistory++;
      },
      setCurrentPageHorror: state => {
        state.currentPageHorror++;
      },
      setCurrentPageMusic: state => {
        state.currentPageMusic++;
      },
      setCurrentPageMystery: state => {
        state.currentPageMystery++;
      },
      setCurrentPageRomance: state => {
        state.currentPageRomance++;
      },
      setCurrentPageScienceFiction: state => {
        state.currentPageScienceFiction++;
      },
      setCurrentPageTvMovie: state => {
        state.currentPageTvMovie++;
      },
      setCurrentPageThriller: state => {
        state.currentPageThriller++;
      },
      setCurrentPageWar: state => {
        state.currentPageWar++;
      },
      setCurrentPageWestern: state => {
        state.currentPageWestern++;
      }
    },
    actions: {
      async nuxtServerInit({ commit }) {
        let [
          res,
          resTopRated,
          resUpcoming,
          resNowPlaying,
          resTvPopular,
          resTvTopRated,
          resTvOnAir,
          resAction,
          resAdventure,
          resAnimation,
          resComedy,
          resCrime,
          resDrama,
          resFamily,
          resFantasy,
          resHistory,
          resHorror,
          resMusic,
          resMystery,
          resRomance,
          resScienceFiction,
          resTvMovie,
          resThriller,
          resWar,
          resWestern
        ] = await Promise.all([
          axios.get(
            "movie/popular?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "movie/top_rated?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "movie/upcoming?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "movie/now_playing?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "tv/popular?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "tv/top_rated?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "tv/on_the_air?api_key=" +
              process.env.apiKey +
              "&language=en-US&page=1"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752"
          ),
          axios.get(
            "discover/movie?api_key=" +
              process.env.apiKey +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37"
          )
        ]);

        commit("setMovies", [...res.data.results]);
        commit("getTopRated", [...resTopRated.data.results]);
        commit("getUpcoming", [...resUpcoming.data.results]);
        commit("getNowPlaying", [...resNowPlaying.data.results]);
        commit("getTvPopular", [...resTvPopular.data.results]);
        commit("getTvTopRated", [...resTvTopRated.data.results]);
        commit("getTvOnAir", [...resTvOnAir.data.results]);
        commit("getAction", [...resAction.data.results]);
        commit("getAdventure", [...resAdventure.data.results]);
        commit("getAnimation", [...resAnimation.data.results]);
        commit("getComedy", [...resComedy.data.results]);
        commit("getCrime", [...resCrime.data.results]);
        commit("getDrama", [...resDrama.data.results]);
        commit("getFamily", [...resFamily.data.results]);
        commit("getFantasy", [...resFantasy.data.results]);
        commit("getHistory", [...resHistory.data.results]);
        commit("getHorror", [...resHorror.data.results]);
        commit("getMusic", [...resMusic.data.results]);
        commit("getMystery", [...resMystery.data.results]);
        commit("getRomance", [...resRomance.data.results]);
        commit("getScienceFiction", [...resScienceFiction.data.results]);
        commit("getTvMovie", [...resTvMovie.data.results]);
        commit("getThriller", [...resThriller.data.results]);
        commit("getWar", [...resWar.data.results]);
        commit("getWestern", [...resWestern.data.results]);
      },
      addMovieToWatchlist({ commit }, id) {
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
            if (Object.keys(res.data.videos.results).length !== 0) {
              watchlistArray.push({
                img: "https://image.tmdb.org/t/p/w500" + res.data.poster_path,
                title: res.data.title,
                added: true,
                trailerLink:
                  "https://www.youtube.com/embed/" +
                  res.data.videos.results[0].key
              });
            }
            if (Object.keys(res.data.videos.results).length === 0) {
              watchlistArray.push({
                img: "https://image.tmdb.org/t/p/w500" + res.data.poster_path,
                title: res.data.title,
                added: true,
                trailerLink: "https://www.youtube.com/embed/OCWj5xgu5Ng"
              });
            }
            commit("setWatchlist", watchlistArray);
          })
          .catch(error => {
            console.log(error);
          });
      },
      addTvShowToWatchlist({ commit }, id) {
        axios
          .get(
            "tv/" +
              id +
              "?api_key=" +
              process.env.apiKey +
              "&append_to_response=videos"
          )
          .then(res => {
            const watchlistArray = [];
            if (Object.keys(res.data.videos.results).length !== 0) {
              watchlistArray.push({
                img: "https://image.tmdb.org/t/p/w500" + res.data.poster_path,
                title: res.data.original_name,
                added: true,
                trailerLink:
                  "https://www.youtube.com/embed/" +
                  res.data.videos.results[0].key
              });
            }
            if (Object.keys(res.data.videos.results).length === 0) {
              watchlistArray.push({
                img: "https://image.tmdb.org/t/p/w500" + res.data.poster_path,
                title: res.data.original_name,
                added: true,
                trailerLink: "https://www.youtube.com/embed/OCWj5xgu5Ng"
              });
            }
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
