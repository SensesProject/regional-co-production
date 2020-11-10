<template>
  <g>
    <g v-for="(el, i) in text">
      <Box :x="x" :y="y + (64 * (i + 1))" h="default" color="white" :text="el" font="small" :link="link[i]" />
    </g>
    <Box :x="x" :y="y" w="default" h="default" :color="color" :text="head" />
  </g>
</template>

<script>
import Box from '~/components/Helper/Box'

export default {
  components: {
    Box
  },
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'white'
    },
    head: {
      type: Array,
      default: () => []
    },
    text: {
      type: Array,
      default: () => []
    },
    link: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
