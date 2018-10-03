<template>
  <div class="notification" @click="$emit('alert')">
    <span class="notification__span" v-if="this.movies.length > 0">{{ this.movies.length }}</span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="notification__icon" version="1.1" x="0px" y="0px" width="29px" height="29px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
	  <g>
		<path d="M255,510c28.05,0,51-22.95,51-51H204C204,487.05,226.95,510,255,510z M420.75,357V216.75    c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25,17.85,275.4,0,255,0c-20.4,0-38.25,17.85-38.25,38.25V56.1    c-73.95,17.85-127.5,81.6-127.5,160.65V357l-51,51v25.5h433.5V408L420.75,357z" fill="#FFFFFF"/>
	  </g>
    </svg>    
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters.getWatchlist;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.notification {
  cursor: pointer;
  margin-right: 24px;

  &__span {
    position: absolute;
    right: 2.1%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 9px;
    font-weight: 700;
    color: $color-white;
    background-color: $color-secondary;

    @media (max-width: 1820px) {
      right: 2.2%;
    }

    @media (max-width: 1760px) {
      right: 2.3%;
    }

    @media (max-width: 1680px) {
      right: 2.4%;
    }

    @media (max-width: 1620px) {
      right: 2.5%;
    }

    @media (max-width: 1540px) {
      right: 2.6%;
    }

    @media (max-width: 1480px) {
      right: 2.7%;
    }

    @media (max-width: 1440px) {
      right: 2.8%;
    }

    @media (max-width: 1380px) {
      right: 3%;
    }

    @media (max-width: 1260px) {
      right: 3.2%;
    }

    @media (max-width: 1180px) {
      right: 3.4%;
    }

    @media (max-width: 1140px) {
      right: 3.5%;
    }

    @media (max-width: 1100px) {
      right: 3.7%;
    }

    @media (max-width: 1060px) {
      right: 3.9%;
    }

    @media (max-width: 1024px) {
      right: 3.9%;
    }

    @media (max-width: 940px) {
      right: 4.2%;
    }

    @media (max-width: 880px) {
      right: 4.5%;
    }

    @media (max-width: 840px) {
      right: 4.7%;
    }

    @media (max-width: 800px) {
      right: 5%;
    }

    @media (max-width: 740px) {
      right: 5.5%;
    }

    @media (max-width: 690px) {
      right: 5.8%;
    }

    @media (max-width: 670px) {
      right: 6%;
    }

    @media (max-width: 630px) {
      right: 6.5%;
    }

    @media (max-width: 580px) {
      right: 7%;
    }

    @media (max-width: 540px) {
      right: 7.4%;
    }

    @media (max-width: 500px) {
      right: 8%;
    }

    @media (max-width: 470px) {
      right: 4.7%;
    }

    @media (max-width: 430px) {
      right: 5%;
    }
  }
}
</style>
