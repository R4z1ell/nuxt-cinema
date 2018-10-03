<template>
  <div class="movie__comment">
    <p class="movie__comment--author">{{ comment.author }}</p>
    <p class="movie__comment--content">{{ comment.content.substring(0, 2500) }}
      <span v-if="!readMore">{{ comment.content.substring(2500, comment.content.length) }}</span>
      <span v-if="this.checkOverviewLength">{{ checkDot }}</span>
      <span v-if="this.checkOverviewLength" class="read-more" @click="readMore = !readMore">
        {{ this.readMoreOrLess }}
        <label v-if="readMore">&#187;</label>
        <label v-if="!readMore">&#171;</label>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readMore: true
    };
  },
  props: {
    comment: Object
  },
  computed: {
    readMoreOrLess() {
      if (this.readMore === false) {
        return "  read less";
      } else {
        return "  read more";
      }
    },
    checkDot() {
      if (this.readMore === false) {
        return "";
      } else {
        return " ...";
      }
    },
    checkOverviewLength() {
      if (this.comment.content.length > 2500) {
        return true;
      } else {
        return false;
      }
    }
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

  @media (max-width: 1024px) {
    margin-right: 15px;
    margin-left: 15px;
  }

  &--author {
    color: $color-secondary;
    font-size: 20px;
    font-weight: 700;
    margin: 7px 0 5px 17px;
  }

  &--content {
    font-size: 18px;
    opacity: 0.85;
    margin: 0 0 10px 10px;
    padding: 7px;

    @media (height: 640px) and (width: 360px) {
      font-size: 16px;
    }
  }
}
</style>
