<template>
  <div class="account-detail">
    <span class="account-detail__triangle"></span>
    <p class="account-detail__text">Your Account</p>  
    <p class="account-detail__text">Help Center</p>  
    <p class="account-detail__text">Sign Out</p>  
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../assets/scss/variables";

.account-detail {
  width: 186px;
  height: 129px;
  background-color: $color-white;
  position: absolute;
  top: 88%;
  right: 2.3%;
  border-radius: 5px;

  &__text {
    font-size: 18px;
    font-weight: 700;
    color: $color-blue;
    text-align: center;
    margin: 16px;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      color: $color-secondary;
      opacity: 1;
      transition: all 0.2s;
    }
  }

  &__triangle {
    position: absolute;
    top: -10%;
    right: 10%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 13px 13px 13px;
    border-color: transparent transparent $color-white transparent;
  }
}
</style>
