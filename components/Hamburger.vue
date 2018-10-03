<template>
  <div class="hamburger" @click="$emit('toggle')">
    <div class="hamburger__bar"></div>
    <div class="hamburger__bar"></div>
    <div class="hamburger__bar"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hamburger {
  display: flex;
  flex-direction: column;
  height: 27px;
  width: 39px;
  margin-left: 40px;
  cursor: pointer;

  @media (max-width: 470px) {
    margin-left: 20px;
  }

  &__bar {
    width: 90%;
    height: 4px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 5px;
  }
}
</style>
