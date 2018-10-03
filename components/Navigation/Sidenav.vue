<template>
  <div class="sidenav-container">
    <div class="sidenav">
      <ul class="nav-list">
        <li class="nav-list--settings">User Settings<span class="cross" @click="$emit('close')"></span></li>
        <li class="nav-list__item nav-list--fav">Favorites</li>
        <li class="nav-list__item">Recently Watched</li>
        <li class="nav-list__item">Purchased</li>
        <li class="nav-list__item">Suggested</li>
        <li class="nav-list__item nav-list--rating">My Ratings</li>
        <li class="nav-list--genre">Genre</li>
        <li class="nav-list__item nav-list--action">Action</li>
        <li class="nav-list__item">Adventure</li>
        <li class="nav-list__item">Comedy</li>
        <li class="nav-list__item">Drama</li>
        <li class="nav-list__item">Fantasy</li>
        <li class="nav-list__item">Horror</li>
        <li class="nav-list__item">Sci-Fi</li>
        <li class="nav-list__item">Thriller</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/variables";
@import "../../assets/scss/buttons";

.sidenav-container {
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}

.nav-list {
  height: 100%;
  width: 430px;
  background-color: $color-sidenav;

  @media (height: 640px) and (width: 360px) {
    width: 360px;
  }

  &__item {
    color: $color-gray;
    padding: 25px 0px;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: $color-white;
      transition: color 0.2s;
    }
  }

  &--action {
    margin-top: 10px;
  }

  &--fav {
    margin-top: 10px;
  }

  &--genre {
    font-size: 20px;
    font-weight: 700;
    color: $color-white;
    background-color: $color-primary-light;
    text-align: center;
    padding: 25px 0;
  }

  &--rating {
    margin-bottom: 25px;
  }

  &--settings {
    font-size: 20px;
    font-weight: 700;
    color: $color-white;
    background-color: $color-primary-light;
    text-align: center;
    padding: 25px 0;
  }
}

// X Button

.cross {
  @include btn-cross($color-white, 21px);
}
</style>
