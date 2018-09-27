<template>
  <div class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <Hamburger @toggle="$emit('sidenavToggle')" v-if="toggleHamburger" />
        <nuxt-link :to="{ path: this.$route.query.link }" v-if="this.slicePath" @click.native="clearAll" class="header__back">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="header__arrow" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve" width="20px" height="20px">
            <g>
              <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" fill="#FFFFFF"/>
            </g>
          </svg>
          Back 
        </nuxt-link>
        <svg class="header__icon" :style="[ $route.path === '/movie/' + $route.params.id ? {'right': '50%'} : {'right': '50%'}]" viewBox="0 -40 512.00124 512" xmlns="http://www.w3.org/2000/svg"><path d="m216.226562 402.449219h295.773438v30h-295.773438zm0 0" fill="#afb4c8"/><path d="m369.113281 63.332031c-84.4375-84.441406-221.34375-84.441406-305.785156 0-84.4375 84.4375-84.4375 221.34375 0 305.78125 84.441406 84.441407 221.347656 84.441407 305.785156 0 84.441407-84.4375 84.441407-221.34375 0-305.78125zm0 0" fill="#707789"/><path d="m369.117188 63.332031c-42.21875-42.222656-97.554688-63.332031-152.890626-63.332031v432.449219c55.335938 0 110.671876-21.113281 152.890626-63.332031 84.441406-84.441407 84.441406-221.347657 0-305.785157zm0 0" fill="#636978"/><g fill="#ffe733"><path d="m163.078125 107.765625c-15.273437-15.273437-40.039063-15.273437-55.3125 0-15.273437 15.277344-15.273437 40.039063 0 55.3125s40.039063 15.273437 55.3125 0 15.273437-40.035156 0-55.3125zm0 0"/><path d="m149.261719 250.339844c-9.804688-19.246094-33.359375-26.898438-52.605469-17.089844-19.246094 9.804688-26.898438 33.359375-17.089844 52.605469 9.804688 19.246093 33.359375 26.898437 52.605469 17.089843 19.246094-9.804687 26.898437-33.359374 17.089844-52.605468zm0 0"/><path d="m272.722656 322.980469c-3.378906-21.335938-23.414062-35.890625-44.75-32.511719-21.335937 3.375-35.890625 23.410156-32.511718 44.746094 3.375 21.335937 23.410156 35.890625 44.746093 32.515625 21.335938-3.378907 35.894531-23.414063 32.515625-44.75zm0 0"/></g><path d="m335.195312 195.457031c-21.335937-3.378906-41.371093 11.175781-44.746093 32.511719-3.378907 21.335938 11.175781 41.371094 32.511719 44.75 21.335937 3.375 41.371093-11.179688 44.75-32.515625 3.378906-21.335937-11.179688-41.371094-32.515626-44.746094zm0 0" fill="#ffda45"/><path d="m285.859375 79.566406c-19.246094-9.808594-42.796875-2.15625-52.605469 17.089844s-2.15625 42.800781 17.09375 52.605469c19.246094 9.808593 42.796875 2.15625 52.605469-17.089844 9.804687-19.25 2.152344-42.800781-17.09375-52.605469zm0 0" fill="#ffda45"/><path d="m239.007812 216.222656c0 12.585938-10.199218 22.785156-22.78125 22.785156-12.585937 0-22.785156-10.199218-22.785156-22.785156 0-12.582031 10.199219-22.78125 22.785156-22.78125 12.582032 0 22.78125 10.199219 22.78125 22.78125zm0 0" fill="#bfe1ff"/><path d="m239.007812 216.222656c0 12.582032-10.199218 22.785156-22.785156 22.785156 0-27.921874 0-22.785156 0-45.566406 12.585938 0 22.785156 10.199219 22.785156 22.78125zm0 0" fill="#a3d4ff"/><path d="m272.730469 322.964844c-3.378907-21.332032-23.414063-35.890625-44.75-32.511719-4.210938.667969-8.15625 1.996094-11.753907 3.84375v69.570313c7.132813 3.675781 15.457032 5.199218 23.992188 3.847656 21.335938-3.378906 35.890625-23.414063 32.511719-44.75zm0 0" fill="#ffda45"/></svg>
        <h1 class="header__title">Movies</h1>
      </div>
      <div class="header__wrapper">
        <search-bar />
        <Notification @alert="alertDetail = !alertDetail"/>
        <Profile @show="toggleDetail = !toggleDetail"/>
        <account-detail v-if="toggleDetail" v-on-clickaway="awayAccount"/>
        <svg v-if="alertDetail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="arrow" version="1.1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 292.362 292.361" style="enable-background:new 0 0 292.362 292.361;" xml:space="preserve">
          <g>
            <path d="M286.935,197.287L159.028,69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.287   C1.807,200.904,0,205.186,0,210.134s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.425,12.85,5.425h255.813   c4.949,0,9.233-1.808,12.848-5.425c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.904,286.935,197.287z" fill="#fff"/>
          </g>
        </svg>
        <notification-detail v-if="alertDetail" />
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import Hamburger from "@/components/Hamburger";
import SearchBar from "@/components/SearchBar";
import Notification from "@/components/Notification";
import Profile from "@/components/Profile";
import AccountDetail from "@/components/UI/Details/AccountDetail";
import NotificationDetail from "@/components/UI/Details/NotificationDetail";

export default {
  mixins: [clickaway],
  data() {
    return {
      toggleDetail: false,
      alertDetail: false
    };
  },
  components: {
    Hamburger,
    SearchBar,
    Notification,
    Profile,
    AccountDetail,
    NotificationDetail
  },
  computed: {
    toggleHamburger() {
      if (this.$route.path !== "/movie/" + this.$route.params.id) return true;
    },
    slicePath() {
      let myString = this.$route.query.link;
      if (myString !== undefined) {
        if (
          myString.includes("search") ||
          myString.includes("movie") ||
          myString.includes("tv-shows") ||
          myString === "/"
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  methods: {
    awayAccount() {
      this.toggleDetail = false;
    },
    clearAll() {
      this.$store.dispatch("clearAll");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.header {
  z-index: 20;

  &__arrow {
    margin-left: 40px;
    margin-right: 10px;
  }

  &__back {
    color: $color-white;
    font-size: 21px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    background-color: $color-primary;
  }

  &__icon {
    position: absolute;
    top: 21.5%;
    right: 50%;
    width: 25px;
    height: 25px;
  }

  &__logo {
    width: 128px;
    height: 50px;
    margin-left: 80px;
  }

  &__title {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 1px;
    position: absolute;
    top: 5%;
    left: 45.9%;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    margin-right: 43px;
  }
}

.arrow {
  position: absolute;
  right: 7.05%;
  top: 86px;
}
</style>

