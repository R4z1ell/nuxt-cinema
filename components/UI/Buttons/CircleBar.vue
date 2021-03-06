<template>
  <div class="pie-wrapper style-2" :class="[checkVote]">
    <span class="label" :style="[this.rating === 0 ? {'left': '0.82em'} : {'left': '0.55em'}]">
      {{ rating | ratingFormat }}
    </span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  props: ["rating"],
  computed: {
    checkVote() {
      if (this.rating <= 1.0) return "progress-10";
      if (this.rating > 1.0 && this.rating <= 1.5) return "progress-15";
      if (this.rating > 1.5 && this.rating <= 2.0) return "progress-20";
      if (this.rating > 2.0 && this.rating <= 2.5) return "progress-25";
      if (this.rating > 2.5 && this.rating <= 3.0) return "progress-30";
      if (this.rating > 3.0 && this.rating <= 3.5) return "progress-35";
      if (this.rating > 3.5 && this.rating <= 4.0) return "progress-40";
      if (this.rating > 4.0 && this.rating <= 4.5) return "progress-45";
      if (this.rating > 4.5 && this.rating <= 5.0) return "progress-50";
      if (this.rating > 5.0 && this.rating <= 5.5) return "progress-55";
      if (this.rating > 5.5 && this.rating <= 6.0) return "progress-60";
      if (this.rating > 6.0 && this.rating <= 6.5) return "progress-65";
      if (this.rating > 6.5 && this.rating <= 7.0) return "progress-70";
      if (this.rating > 7.0 && this.rating <= 7.5) return "progress-75";
      if (this.rating > 7.5 && this.rating <= 8.0) return "progress-80";
      if (this.rating > 8.0 && this.rating <= 8.5) return "progress-85";
      if (this.rating > 8.5 && this.rating <= 9.0) return "progress-90";
      if (this.rating > 9.0 && this.rating <= 9.5) return "progress-95";
      if ((this.rating = 9.6)) return "progress-96";
      if ((this.rating = 9.7)) return "progress-97";
      if ((this.rating = 9.8)) return "progress-98";
      if ((this.rating = 9.9)) return "progress-99";
      if ((this.rating = 10)) return "progress-100";
    }
  }
};
</script>

<style lang="scss">
// -- vars
$bg-color: #34495e;
$default-size: 2.2em;
$label-font-size: $default-size / 4;
$label-font-size-redo: $default-size * 4;

// -- mixins
@mixin size($width, $height) {
  height: $height;
  width: $width;
}

@mixin draw-progress($progress, $color) {
  .pie {
    .half-circle {
      border-color: $color;
    }

    .left-side {
      transform: rotate($progress * 3.6deg);
    }

    @if $progress <= 50 {
      .right-side {
        display: none;
      }
    } @else {
      clip: rect(auto, auto, auto, auto);

      .right-side {
        transform: rotate(180deg);
      }
    }
  }
}

// -- selectors
.set-size {
  font-size: 10em;
}

.charts-container {
  &:after {
    clear: both;
    content: "";
    display: table;
  }
}

.pie-wrapper {
  @include size($default-size, $default-size);
  float: left;
  margin: 10px;
  position: relative;

  &:nth-child(3n + 1) {
    clear: both;
  }

  .pie {
    @include size(100%, 100%);
    clip: rect(0, $default-size, $default-size, $default-size / 2);
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      @include size(100%, 100%);
      border: ($default-size / 10) solid #3498db;
      border-radius: 50%;
      clip: rect(0, $default-size / 2, $default-size, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    background: $bg-color;
    border-radius: 50%;
    bottom: $label-font-size-redo / 10;
    color: #ecf0f1;
    cursor: default;
    display: block;
    font-size: 16px;
    font-weight: 700;
    left: 0.5em;
    line-height: $label-font-size-redo * 0.7;
    position: absolute;
    right: $label-font-size-redo / 10;
    text-align: center;
    top: -2em;
  }

  .shadow {
    @include size(100%, 100%);
    border: $default-size / 10 solid #bdc3c7;
    border-radius: 50%;
  }

  &.style-2 {
    .label {
      background: none;
      color: #fff;
    }
  }

  &.progress-10 {
    @include draw-progress(10, #e74c3c);
  }

  &.progress-15 {
    @include draw-progress(15, #e74c3c);
  }

  &.progress-20 {
    @include draw-progress(20, #e74c3c);
  }

  &.progress-25 {
    @include draw-progress(25, #e74c3c);
  }

  &.progress-30 {
    @include draw-progress(30, #e74c3c);
  }

  &.progress-35 {
    @include draw-progress(35, #e74c3c);
  }

  &.progress-40 {
    @include draw-progress(40, #e74c3c);
  }

  &.progress-45 {
    @include draw-progress(45, #e74c3c);
  }

  &.progress-50 {
    @include draw-progress(50, #bf9b30);
  }

  &.progress-55 {
    @include draw-progress(55, #bf9b30);
  }

  &.progress-60 {
    @include draw-progress(60, #bf9b30);
  }

  &.progress-65 {
    @include draw-progress(65, #bf9b30);
  }

  &.progress-70 {
    @include draw-progress(70, #00d474);
  }

  &.progress-75 {
    @include draw-progress(75, #00d474);
  }

  &.progress-80 {
    @include draw-progress(80, #00d474);
  }

  &.progress-85 {
    @include draw-progress(85, #00d474);
  }

  &.progress-90 {
    @include draw-progress(90, #00d474);
  }

  &.progress-95 {
    @include draw-progress(95, #00d474);
  }

  &.progress-96 {
    @include draw-progress(96, #00d474);
  }

  &.progress-97 {
    @include draw-progress(97, #00d474);
  }

  &.progress-98 {
    @include draw-progress(98, #00d474);
  }

  &.progress-99 {
    @include draw-progress(99, #00d474);
  }

  &.progress-100 {
    @include draw-progress(100, #00d474);
  }
}
</style>
