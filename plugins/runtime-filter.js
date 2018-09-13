import Vue from "vue";

const timeFilter = n => {
  if (n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (hours < 1) {
      return rminutes + "m";
    } else if (hours == 1 && minutes == 0) {
      return rhours + "h";
    } else {
      return rhours + "h " + rminutes + "m";
    }
  } else {
    return "n/a";
  }
};

Vue.filter("runtime", timeFilter);
