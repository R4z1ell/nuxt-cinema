<template>
  <div class="search">
    <input class="search__input" v-model.trim="searchQuery" @keyup.enter="search" placeholder="Search Movies...">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="search__icon" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="18px" height="18px">
      <path class="search__path" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" fill="#FFFFFF"/>        
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      if (!this.searchQuery.length) return;
      this.$router.push({
        path: "/search/" + this.searchQuery
      });
      this.searchQuery = "";
      this.$store.commit("resetFirstLoadSearchMovie");
      this.$store.commit("resetCurrentPageSearchMovies");
      this.$store.commit("resetSearchedMovies");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.search {
  position: relative;
  margin-right: 24px;

  @media (max-width: 430px) {
    margin-right: 15px;
  }

  @media (max-width: 420px) {
    margin-right: 10px;
  }

  @media (max-width: 416px) {
    margin-right: 20px;
  }

  @media (max-width: 414px) {
    margin-right: 12px;
  }

  @media (height: 736px) and (width: 414px) {
    margin-right: 11px;
  }

  @media (max-width: 400px) {
    margin-right: 14px;
  }

  @media (max-width: 390px) {
    margin-right: 16px;
  }

  @media (height: 812px) and (width: 375px) {
    margin-right: 20px;
  }

  @media (height: 667px) and (width: 375px) {
    margin-right: 20px;
  }

  @media (max-width: 370px) {
    margin-right: 11px;
  }

  @media (height: 640px) and (width: 360px) {
    margin-right: 20px;
  }

  @media (height: 568px) and (width: 320px) {
    margin-right: 8px;
  }

  &__icon {
    position: absolute;
    left: 25px;
    bottom: 15px;
  }

  &__input {
    border: none;
    background: $color-primary-dark;
    width: 258px;
    height: 49px;
    border-radius: 50px;
    padding-left: 55px;
    color: $color-white;

    @media (max-width: 416px) {
      width: 240px;
    }

    @media (max-width: 400px) {
      width: 225px;
    }

    @media (max-width: 390px) {
      width: 220px;
    }

    @media (height: 812px) and (width: 375px) {
      width: 192px;
    }

    @media (height: 667px) and (width: 375px) {
      width: 192px;
    }

    @media (height: 640px) and (width: 360px) {
      width: 192px;
    }

    @media (max-width: 320px) {
      width: 187px;
    }

    @media (height: 568px) and (width: 320px) {
      width: 175px;
    }

    &:focus,
    &:active {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: #bebebe;
    }
  }

  &__input:focus + &__icon &__path {
    fill: $color-white;
  }

  &__path {
    fill: #bebebe;
    transition: fill 0.5s ease;
  }
}
</style>
