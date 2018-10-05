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

  @media (max-width: 1024px) {
    top: 95%;
  }

  @media (height: 1024px) and (width: 768px) {
    top: 91%;
  }

  @media (max-width: 560px) {
    right: 1.8%;
  }

  @media (max-width: 490px) {
    width: 93%;
  }

  @media (height: 736px) and (width: 414px) {
    max-height: 430px;
  }

  @media (height: 812px) and (width: 375px) {
    width: 91%;
    max-height: 420px;
    top: 90%;
    right: 3.8%;
  }

  @media (height: 667px) and (width: 375px) {
    width: 93%;
    max-height: 420px;
    top: 90%;
    right: 2.5%;
  }

  @media (height: 640px) and (width: 360px) {
    width: 91%;
    max-height: 420px;
    top: 90%;
    right: 3.8%;
  }

  @media (height: 568px) and (width: 320px) {
    width: 91%;
    max-height: 390px;
    top: 90%;
    right: 3.8%;
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

  &__trailer {
    width: 150px;
    height: 38px;
    font-size: 14px;
    font-weight: 400;
    margin-top: 25%;

    @media (max-width: 490px) {
      margin-left: -6%;
    }

    @media (max-width: 477px) {
      margin-left: -9.5%;
    }

    @media (max-width: 457px) {
      margin-left: -15.5%;
    }

    @media (max-width: 446px) {
      margin-left: -21.5%;
    }

    @media (max-width: 430px) {
      margin-left: -25.5%;
    }

    @media (height: 736px) and (width: 414px) {
      margin-left: -22.5%;
    }

    @media (max-width: 410px) {
      margin-left: -32.5%;
    }

    @media (height: 812px) and (width: 375px) {
      margin-left: -34%;
      margin-top: 20%;
    }

    @media (height: 640px) and (width: 360px) {
      margin-left: -40%;
      margin-top: 21%;
    }

    @media (height: 568px) and (width: 320px) {
      margin-left: -45.5%;
      margin-top: 18%;
    }
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
    align-items: center;

    &--cross {
      cursor: pointer;
      position: absolute;
      right: 2%;
      top: 45%;
      margin-top: 4px;

      @media (max-width: 490px) {
        right: 8%;
      }

      @media (max-width: 480px) {
        right: 9%;
      }

      @media (max-width: 475px) {
        right: 8%;
      }

      @media (max-width: 465px) {
        right: 10%;
      }

      @media (max-width: 457px) {
        right: 11%;
      }

      @media (max-width: 447px) {
        right: 14%;
      }

      @media (max-width: 435px) {
        right: 16%;
      }

      @media (max-width: 424px) {
        right: 19%;
      }

      @media (height: 736px) and (width: 414px) {
        right: 25.4%;
      }

      @media (max-width: 410px) {
        right: 22.5%;
      }

      @media (max-width: 390px) {
        right: 28%;
      }

      @media (max-width: 390px) {
        right: 30%;
      }

      @media (height: 812px) and (width: 375px) {
        right: 34%;
        top: 39%;
      }

      @media (height: 667px) and (width: 375px) {
        right: 32%;
      }

      @media (max-width: 370px) {
        right: 32.2%;
      }

      @media (height: 640px) and (width: 360px) {
        right: 40%;
      }

      @media (height: 568px) and (width: 320px) {
        right: 47%;
      }
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

      @media (max-width: 500px) {
        font-size: 17px;
        max-width: 80%;
      }

      @media (max-width: 486px) {
        max-width: 80%;
      }

      @media (max-width: 450px) {
        font-size: 14px;
        max-width: 60%;
      }

      @media (height: 812px) and (width: 375px) {
        font-size: 14px;
        max-width: 60%;
      }

      @media (height: 640px) and (width: 360px) {
        font-size: 14px;
        max-width: 60%;
      }

      @media (height: 568px) and (width: 320px) {
        font-size: 13px;
        max-width: 41%;
      }
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

    @media (max-width: 500px) {
      width: 28%;
      height: 180px;
    }

    @media (height: 736px) and (width: 414px) {
      width: 31%;
    }

    @media (height: 812px) and (width: 375px) {
      width: 111px;
      height: 177px;
      margin-left: 12px;
    }

    @media (height: 667px) and (width: 375px) {
      width: 111px;
      height: 177px;
      margin-left: 12px;
    }

    @media (height: 640px) and (width: 360px) {
      width: 34%;
      height: 177px;
      margin-left: 12px;
    }

    @media (height: 568px) and (width: 320px) {
      width: 34%;
      height: 160px;
      margin-left: 10px;
    }
  }

  &__span {
    font-size: 20px;
    color: $color-secondary;
    font-weight: 700;
  }
}
</style>
