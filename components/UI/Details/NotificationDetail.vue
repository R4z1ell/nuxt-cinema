<template>
  <div class="notification-detail" :style="[this.movies.length == 0 ? {'padding': '20px'} : {'padding': '0'}]">
    <span v-if="!hasMovies()" class="notification-detail__span">No movies added</span>
    <div v-for="(movie, index) in movies" :key="index" class="notification-detail__wrapper">
      <img :src="movie.img" alt="poster">
      <div class="notification-detail__container">
        <div class="notification-detail__container--divider">
          <p class="notification-detail__container--title">{{ movie.title }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="remove(index)" class="notification-detail__container--cross" version="1.1" x="0px" y="0px" viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve" width="15px" height="15px">
            <g>
              <path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" fill="#788893"/>
            </g>
          </svg>
        </div>
        <p class="notification-detail__container--added">3 days ago</p>
        <button-trailer 
          class="notification-detail__trailer" 
          @click="$modal.show('youtube-notification', {trailer: movie.trailerLink})">
          Watch Trailer
        </button-trailer>  
      </div>
    </div>
  </div>  
</template>

<script>
import ButtonTrailer from "@/components/UI/Buttons/ButtonTrailer";

export default {
  computed: {
    movies() {
      return this.$store.getters.getWatchlist;
    }
  },
  methods: {
    hasMovies() {
      return this.movies.length > 0;
    },
    remove(index) {
      this.$store.dispatch("removeFromWatchlist", index);
    }
  },
  components: {
    ButtonTrailer
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables";
@import "../../../assets/scss/buttons";

.notification-detail {
  overflow-y: auto;
  overflow-x: hidden;
  width: 470px;
  max-height: 732px;
  background-color: $color-white;
  position: absolute;
  top: 80%;
  right: 0.8%;
  border-radius: 5px;
  z-index: 500;

  @media (height: 768px) and (width: 1366px) {
    max-height: 648px;
  }

  @media (height: 800px) and (width: 1280px) {
    max-height: 650px;
  }

  @media (height: 1024px) and (width: 768px) {
    top: 91%;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px gray;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: $color-blue;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: darken($color-blue, 10%);
  }

  &__trailer,
  &__tickets {
    width: 150px;
    height: 38px;
    font-size: 14px;
    font-weight: 400;
    margin-left: 63px;
  }

  &__trailer {
    margin-top: 55px;
    margin-bottom: 8px;
  }

  &__tickets {
    padding-right: 21px;
  }

  &__trailer svg {
    margin-left: 8px;
    width: 23px;
    height: 23px;
  }

  &__tickets svg {
    width: 30px;
    height: 30px;
    margin-left: -1px;
  }

  &__container {
    display: flex;
    flex-direction: column;

    &--cross {
      cursor: pointer;
      position: absolute;
      right: 2%;
      top: 45%;
      margin-top: 4px;
    }

    &--divider {
      display: grid;
      grid-template-columns: 270px 1fr;
      grid-column-gap: 15px;
      position: relative;
    }

    &--title {
      font-size: 18px;
      color: $color-blue;
      font-weight: 700;
      margin-top: 16px;
      word-wrap: break-word;
      max-width: 255px;
    }

    &--added {
      font-size: 13px;
      color: $color-blue;
    }
  }

  &__wrapper {
    display: flex;
  }

  &__wrapper img {
    width: 141px;
    height: 212px;
    margin: 16px;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.205);
  }

  &__span {
    font-size: 20px;
    color: $color-secondary;
    font-weight: 700;
  }
}
</style>
