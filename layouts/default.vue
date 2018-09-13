<template>
  <div>
    <Header class="fixed" @sidenavToggle="displaySidenav = true" />
    <sub-header style="margin-top: 130px" class="fixed" />
    <transition name="slide-side">
      <Sidenav v-if="displaySidenav" @close="displaySidenav = false"/>
    </transition>
    <modal name="youtube-trailer-detail" @before-open="beforeOpenOne" :width="1050" :height="600">
      <iframe :src="trailerOne" style="border: none" height="600" width="1050"></iframe>
    </modal>
    <modal name="youtube-notification" @before-open="beforeOpenTwo" :width="1050" :height="600">
      <iframe :src="trailerTwo" style="border: none" height="600" width="1050"></iframe>
    </modal>
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Sidenav from "@/components/Navigation/Sidenav";

export default {
  data() {
    return {
      displaySidenav: false,
      displayReleaseDate: false,
      trailerOne: "",
      trailerTwo: ""
    };
  },
  components: {
    Header,
    SubHeader,
    Sidenav
  },
  methods: {
    beforeOpenOne(event) {
      this.trailerOne =
        "https://www.youtube.com/embed/" + event.params.youtubeId;
    },
    beforeOpenTwo(event) {
      this.trailerTwo = event.params.trailer;
    }
  }
};
</script>


<style lang="scss">
.v--modal-overlay[data-modal="youtube-trailer-detail"] {
  background: rgba(black, 0.9);
}

.v--modal-overlay[data-modal="youtube-notification"] {
  background: rgba(black, 0.9);
}

.fixed {
  position: fixed;
  width: 100%;
}

// Transition Animation

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.slide-side-enter-to,
.slide-side-leave {
  transform: translateX(0);
}
</style>
