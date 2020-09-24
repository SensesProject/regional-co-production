<template>
  <figure class="graphic" :style="styling" :class="{ isLoaded }">
    <svg viewBox="0 0 1260 1260" ref="vis" xmlns="http://www.w3.org/2000/svg">
      <g :class="{ isHighlight: highlights.length === 0 }">
        <Box :x="630" :y="63" w="wide" h="tall" color="blue" :text="['Socioeconomics /', 'climate scenarios']" font="big" />
        <Box :x="630" :y="570" w="wide" h="tall" color="blue" :text="['Climate impact', 'scenarios']" font="big" />
      </g>

      <g :class="{ isHighlight: highlights.includes('left') || highlights.length === 0 }">
        <BoxGroup :x="200" :y="434" color="green" :head="['Brainstorming']" :text="['Nested scenarios']" />
        <BoxGroup :x="200" :y="582" color="blue" :head="['Morphological analysis/', 'intuitive logic']" :text="['Narratives and cartoons']" />
        <BoxGroup :x="200" :y="731" color="blue" :head="['SWOT analysis']" :text="['Risk Assessment']" />
      </g>

      <g :class="{ isHighlight: highlights.includes('right') || highlights.length === 0 }">
        <BoxGroup :x="1060" :y="434" color="green" :head="['Visioning']" :text="['Vision']" />
        <BoxGroup :x="1060" :y="582" color="green" :head="['Backcasting']" :text="['Pathways']" />
        <BoxGroup :x="1060" :y="731" color="green" :head="['Participatory systems', 'dynamics']" :text="['Transformative pathways ']" />
      </g>

      <g :class="{ isHighlight: highlights.length === 0 }">
        <Box :x="630" :y="949" w="whide" h="tall" color="green" :text="['Adaptation', 'scenarios']" font="big" />
        <Box :x="630" :y="873" w="default" h="default" color="white" :text="['Robust Decision Making', '(trade-offs and robustness)']" />

        <text x="360" y="274" class="text text--alt" text-anchor="middle">Yes</text>
        <text x="890" y="274" class="text text--alt" text-anchor="middle">No</text>
        <text :y="274 - 15" class="text text--alt" text-anchor="middle">
          <tspan x="630">Does other knowledge</tspan>
          <tspan x="630" dy="30">already exist?</tspan>
        </text>
      </g>

      <!-- <Box :x="200" :y="500" w="default" h="default" color="white" :text="['Brainstorming']" font="small" />
      <Box :x="200" :y="559" w="narrow" h="default" color="green" :text="['Nested scenarios']" /> -->
      <g class="isHighlight">
        <Dot :x="50" :y="100" label="Hello" v-if="points.includes('brainstorming')" key="brainstorming" />
        <Dot :x="100" :y="150" label="Hello" v-if="points.includes('backcasting')" key="backcasting" />
        <Dot :x="150" :y="200" label="Hello" v-if="points.includes('what-should')" key="what-should" />
        <Dot :x="30" :y="300" label="Hello" v-if="points.includes('what-could')" key="what-could" />
      </g>
    </svg>
  </figure>
</template>

<script>
import { mapState } from 'vuex'
import Dot from '~/components/Helper/Dot'
import Box from '~/components/Helper/Box'
import BoxGroup from '~/components/Helper/BoxGroup'
import { isUndefined } from 'lodash'

export default {
  components: {
    Dot,
    Box,
    BoxGroup
  },
	data () {
    return {
      height: 0,
      isLoaded: true
    }
  },
  computed: {
    ...mapState('step', [
      'points',
      'highlights'
    ]),
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
      if (!isUndefined(el)) {
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

    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;

      & > g {
        opacity: 0.3;
        transition: opacity 0.5s;

        &.isHighlight {
          opacity: 1;
        }
      }
    }
  }
</style>
