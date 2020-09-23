<template>
  <figure class="graphic" :style="styling" :class="{ isLoaded }">
    <img
      width="5248px"
      height="5084px"
    	src="img/graphic step by step.png"
    	ref="vis"
      @load="onLoad" />
  </figure>
</template>

<script>
export default {
	data () {
    return {
      height: 0,
      isLoaded: false
    }
  },
  computed: {
    styling () {
      return { top: `calc(50% - ${this.height / 2}px)`, height: `${this.height}px` }
    }
  },
  mounted () {
    this.calcHeight()
    window.addEventListener('resize', this.calcHeight, false)
  },
	methods: {
    calcHeight () {
      const { vis: el } = this.$refs
      if (el !== 'undefined') {
        this.height = el.clientHeight
      }
    },
    onLoad () {
      this.calcHeight()
      this.isLoaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic {
  	width: 100%;
  	height: auto;
  	position: sticky;
    display: block;
    text-align: center;
    opacity: 0;
    transition: opacity 1s;

    &.isLoaded {
      opacity: 1;
    }

    img {
      max-width: 100%;
      width: auto;
      height: auto;
      max-height: 90vh;
    }
  }
</style>
