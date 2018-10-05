import Vue from "vue";

const ratingFilter = rating => {
  let newRating = rating * 10;
  return newRating;
};

Vue.filter("ratingFormat", ratingFilter);
