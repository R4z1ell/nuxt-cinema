<template>
  <div class="profile" @click="$emit('show')">
    <div class="profile__wrapper">
      <img src="~/static/images/sam-profile.jpg" alt="profile" class="profile__image">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.profile {
  &__wrapper {
    position: relative;
    cursor: pointer;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    display: block;
    top: -20px;
    width: 65px;
  }
}
</style>
