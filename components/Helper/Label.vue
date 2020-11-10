<template>
  <component
    :is="link ? 'a' : 'g'"
    :href="link ? link : false"
    class="label"
    :class="{ 'label--link': link }"
    target="_blank">
    <text :y="y + 10 - (text.length - 1) * 22" :text-anchor="anchor" :class="`text text--alt text--alt--small`">
      <tspan v-for="(t, i) in text" :x="x" :dy="i === 0 ? 0 : 22">{{ t }}</tspan>
    </text>
    <text v-if="link" class="text text--icon" :x="x + 40" :y="y - 10" text-anchor="end">↗</text>
  </component>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    link: {
      type: [String, Boolean],
      default: false
    },
    text: {
      type: Array,
      default: () => []
    },
    anchor: {
      type: String,
      default: 'start'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

</style>
