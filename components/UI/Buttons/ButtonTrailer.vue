<template>
    <button
      class="btn-trailer"
      :class="btnStyle"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div style="margin-left: 32px">
        <slot/>
      </div>    
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="btn-trailer__icon" version="1.1" x="0px" y="0px" viewBox="0 0 342.9 342.9" style="enable-background:new 0 0 342.9 342.9;" xml:space="preserve" width="35px" height="35px">
        <g>
          <g>
            <path d="M224.5,142.65h-20.4l-9.6,57.6h20.4c16.4,0,32-12.8,34.8-28.8C252.1,155.45,240.9,142.65,224.5,142.65z" fill="#FFFFFF"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M333.3,148.65l-69.6-69.6l-69.6-69.6c-12.4-12.4-32.8-12.4-45.6,0l-69.6,69.6l-69.6,69.6c-12.4,12.4-12.4,32.8,0,45.6    l69.6,69.6l69.6,69.6c12.4,12.4,32.8,12.4,45.6,0l69.6-69.6l69.6-69.6C346.1,181.45,346.1,161.45,333.3,148.65z M152.5,216.65    c-0.4,2-2.4,3.6-4.4,3.6h-12.4c-2,0-3.2-1.6-3.2-3.6l6-35.6h-40l-6,35.6c-0.4,2-2.4,3.6-4.4,3.6H75.7c-2,0-3.2-1.6-3.2-3.6    l15.2-90c0.4-2,2.4-3.6,4.4-3.6h12.4c2,0,3.2,1.6,3.2,3.6l-6,34.8h40l6-34.8c0.4-2,2.4-3.6,4.4-3.6h12.4c2,0,3.2,1.6,3.2,3.6    L152.5,216.65z M269.3,171.45c-4.4,26.8-30.4,48.8-58,48.8h-36.4c-2,0-3.2-1.6-3.2-3.6l15.2-90c0.4-2,2.4-3.6,4.4-3.6h36.4    C255.3,122.65,273.7,144.65,269.3,171.45z" fill="#FFFFFF"/>
          </g>
        </g>
      </svg>   
    </button>
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables";
@import "../../../assets/scss/buttons";

.btn-trailer {
  @extend .btn;
  background-color: $color-blue;

  &__icon {
    position: absolute;
    left: 8%;
    top: 23%;
  }
}
</style>
