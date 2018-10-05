 <template>
    <button
      class="btn-watchlist"
      :class="btnStyle"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div>
        <slot/>
      </div>    
     
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

.btn-watchlist {
  @extend .btn;
  background-color: transparent;
  border: 1px solid $color-blue;
  font-weight: 400;
  transition: all 0.25s ease;

  @media (max-width: 500px) {
    margin-left: 0px;
  }
}
</style>

 
 
 