<template>
  <div class="movie__comment">
    <p class="movie__comment--author">{{ comment.author }}</p>
    <p class="movie__comment--content">{{ comment.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.movie__comment {
  background-color: $color-primary-light;
  color: $color-white;
  border-radius: 5px;
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  margin-right: 35px;

  &--author {
    color: $color-secondary;
    font-size: 20px;
    font-weight: 700;
    margin: 7px 0 5px 17px;
  }

  &--content {
    font-size: 17px;
    margin: 0 0 10px 10px;
    padding: 7px;
  }
}
</style>
