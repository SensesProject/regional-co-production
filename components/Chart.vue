<template>
  <figure class="graphic" :style="styling" :class="{ isLoaded }">
    <svg viewBox="0 0 1260 1005" ref="vis" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker v-for="orient in ['90', '0', '270']" :id="`arrow-${orient}`" markerWidth="16" markerHeight="16" refX="8" refY="8" markerUnits="userSpaceOnUse" :orient="orient">
          <path class="marker" d="M0, 1 L8, 9 L16, 1" />
        </marker>
      </defs>

      <g :class="isHighlight('title')">
        <path class="path" d="M630,122 L630,155" marker-end="url(#arrow-0)" />
        <path class="path" d="M630,348 L630,497" marker-end="url(#arrow-0)" />
        <path class="path" d="M522,639 L522,756 L401,756" marker-end="url(#arrow-90)" />
        <path class="path" d="M738,639 L738,756 L859,756" marker-end="url(#arrow-270)" />
        <Box :x="630" :y="63" w="wide" h="tall" color="blue" :text="['Socioeconomics /', 'climate scenarios']" font="big" link="https://climatescenarios.org/primer/how-are-socioeconomic-development-and-climate-change-connected" />
        <Box :x="630" :y="570" w="wide" h="tall" color="blue" :text="['Climate impact', 'scenarios']" font="big" link="https://climatescenarios.org/primer/climate-impacts" />
      </g>

      <g :class="isHighlight('left')">
        <Label :x="200" :y="270" class="text text--alt" text-anchor="middle" :text="['Limited. Policy cycle', 'in formulation phase.']" anchor="start" />
        <path class="path" d="M480,290 L200,290 L200,950 L460,950" marker-end="url(#arrow-270)" />

        <BoxGroup :x="200" :y="409" color="blue" :head="['Nested scenarios']" :text="[['Brainstorming'], ['Morphological analysis​']]" :link="['https://climatescenarios.org/finder/techniques/?name=brainstorming', 'https://climatescenarios.org/finder/techniques/?name=morphological%20analysis']" />
        <BoxGroup :x="200" :y="615" color="blue" :head="['Narratives and cartoons']" :text="[['Intuitive logic​']]" :link="['https://climatescenarios.org/finder/techniques/?name=intuitive%20logics']" />
        <BoxGroup :x="200" :y="615 + 141" color="blue" :head="['Risk Assessment']" :text="[['Brainstorming​']]" :link="['https://climatescenarios.org/finder/techniques/?name=brainstorming']" />
      </g>

      <g :class="isHighlight('right')">
        <Label :x="1060" :y="270" class="text text--alt" text-anchor="middle" :text="['Well advanced. Policy', 'cycle in implementation.']" anchor="end" />
        <path class="path" d="M780,290 L1060,290 L1060,950 L800,950" marker-end="url(#arrow-90)" />

        <BoxGroup :x="1060" :y="409" color="green" :head="['System analysis​']" :text="[['Participatory', 'systems dynamics']]" :link="['https://climatescenarios.org/finder/techniques/?name=participatory%20systems%20dynamics']" />
        <BoxGroup :x="1060" :y="409 + 141" color="green" :head="['Multiscale Vision​']" :text="[['Visioning']]" :link="['https://climatescenarios.org/finder/techniques/?name=visioning']" />
        <BoxGroup :x="1060" :y="409 + 141 + 141" color="green" :head="['Multiscale Vision']" :text="[['Wildcards'], ['Backcasting']]" :link="['https://climatescenarios.org/finder/techniques/?name=wild%20cards', 'https://climatescenarios.org/finder/techniques/?name=backcasting']" />
      </g>

      <g :class="isHighlight('questions')">
        <Box :x="539.5" :y="200" h="default" w="narrow" color="white" :text="['exploratory']" link="https://climatescenarios.org/finder/techniques/?explorative=Yes" />
        <Box :x="720.5" :y="200" h="default" w="narrow" color="white" :text="['normative']" link="https://climatescenarios.org/finder/techniques/?normative=Yes" />
      </g>

      <g :class="{ isHighlight: highlights.length === 0 }">
        <Box :x="630" :y="949" w="whide" h="tall" color="green" :text="['Adaptation', 'scenarios']" font="big" link="https://climatescenarios.org/primer/adaptation" />
      </g>

      <g :class="isHighlight(['right', 'left'])">
        <text :y="270" class="text text--alt" text-anchor="middle">
          <tspan x="630">How advanced is the</tspan>
          <tspan x="630" dy="30">existing knowledge and</tspan>
          <tspan x="630" dy="30">policy cycle to adapt?</tspan>
        </text>
      </g>

      <!-- <Box :x="200" :y="500" w="default" h="default" color="white" :text="['Brainstorming']" font="small" />
      <Box :x="200" :y="559" w="narrow" h="default" color="green" :text="['Nested scenarios']" /> -->
      <g class="isHighlight">
        <Dot :x="200 - 300 * 0.45" :y="409 + 60 + 20 - 31" v-if="points.includes('brainstorming')" key="brainstorming-1" label="Brainstorming is a creative thinking, participatory and interactive technique used in face-to-face and online group working sessions to generate new ideas around a specific area of interest. Aiming at removing inhibitions and breaking out of narrow and routine discussions, it allows people to think more freely and move into new areas of thought, and to propose new solutions to problems. Brainstorming is usually used in combination with other co-production techniques and futures methods (i.e. scenarios, backcasting, morphological and structural analysis, cognitive mapping, etc.)." />
        <Dot :x="200 - 300 * 0.45" :y="409 + 60 + 20 - 31 + 64" v-if="points.includes('morphological')" key="morphological" label="Morphological analysis (MA) investigates the totality of relationships contained in multi-dimensional, non-quantifiable problem complexes. The approach begins by identifying and defining the parameters (or dimensions) of the problem complex to be investigated, and assigning each parameter a range of relevant “values” or conditions. Identifying the parameters (dimensions/drivers) and assigning values (conditions/states) can both be done through participatory processes together with stakeholders. A morphological box is constructed by setting the parameters against each other in an n-dimensional matrix. It is a fundamental scientific method of alternating between analysis and synthesis." />
        <Dot :x="200 - 300 * 0.45" :y="409 + 60 + 20 - 31 + 64 + 141" v-if="points.includes('intuitive-logics')" key="intuitive-logics" label="Intuitive Logics methos, also known as scenario matrix is based on two dimensions of uncertainty or polarities. The four cells represent alternatively the four combinations of the poles of the two uncertainties, each of which contains a kernel or logic of a plausible future. Each kernel is then elaborated into a complete story or other presentation, and the implications for the focal issue or decision are discussed together with experts and/or stakeholders." />
        <Dot :x="200 - 300 * 0.45" :y="409 + 60 + 20 - 31 + 64 + 141 + 141" v-if="points.includes('brainstorming')" key="brainstorming-2" label="Brainstorming is a creative thinking, participatory and interactive technique used in face-to-face and online group working sessions to generate new ideas around a specific area of interest. Aiming at removing inhibitions and breaking out of narrow and routine discussions, it allows people to think more freely and move into new areas of thought, and to propose new solutions to problems. Brainstorming is usually used in combination with other co-production techniques and futures methods (i.e. scenarios, backcasting, morphological and structural analysis, cognitive mapping, etc.)." />

        <Dot :x="441" :y="177" v-if="points.includes('what-should')" key="what-should" label="<h4>What should happen?</h4><ul><li>In many cases, e.g. in quantitative scenario applications on the national to global scale, scenarios that address what should happen are referred to as ‘goal-oriented scenarios’ or pathways.</li><li>In other, more often regional, scenario applications, the common term is ‘normative scenario’. At regional level there is a clear and strong dichotomy between exploring what can happen and designing what should happen, mostly reinforced by a difference in scale with normative scenarios being developed for smaller regions and shorter time horizons, also building on different methods and tools. The explorative scenarios are built for opening the imagination amongst stakeholders on what can happen, while the normative scenarios are generally built after the explorative ones in order to cope with challenges. For both quantitative (model-based) and qualitative scenario approaches, both normative and explorative scenarios can be developed with the same (modelling) tools or using translating techniques to link qualitative and quantitative scenarios.</li></ul>" />
        <Dot :x="820" :y="177" v-if="points.includes('what-could')" key="what-could" label="<h4>What could happen?</h4><ul><li>For quantitative model-based scenario approaches, often deployed on the national to global scale, the term ‘projection’ is frequently used to refer to scenarios that address what can happen, for example in ‘climate impact projections’ or ‘baseline projections’. We suggest using this term in instances, where the quantitative part dominates the scenario content, even if underpinned by a secondary narrative element.</li><li>For regional scenario approaches, the term ‘explorative scenario’ is commonly used. Here the term ‘projection’ is restricted to model-based, quantitative elements of explorative scenarios which are based on the qualitative narrative elements at their core.</li></ul>" />

        <Dot :x="1060 - 300 * 0.45" :y="409 + 60 + 20 - 31" v-if="points.includes('system-dynamics')" key="system-dynamics" label="System dynamics (SD) is an approach to understanding the nonlinear behaviour of complex systems over time using stocks, flows, internal feedback loops, table functions and time delays. A System Dynamics application begins with the definition of a problem. It then draws in all major patterns of influence that together create the “system”. Different values for variables and different policy structures may then be introduced to simulate how the system would respond to different circumstances or initiatives." />
        <Dot :x="1060 - 300 * 0.45" :y="409 + 60 + 20 - 31 + 141" v-if="points.includes('visioning')" key="visioning" label="Visioning is the process of creating a series of images or visions of the future that are real and compelling enough to motivate and guide people toward focusing their efforts on achieving certain goals. The visioning process is almost always done in a participatory manner. The group of participants needs to include representation from key constituencies both inside and outside the organization or community. The meeting facilitator will need to set up the vision discussion by creating a good mental space for the sharing of values and aspirations." />
        <Dot :x="1060 - 300 * 0.45" :y="409 + 60 + 20 - 31 + 141 * 2" v-if="points.includes('wildcards')" key="wildcards" label="Wild cards are low-probability, high-impact events. This concept may be introduced into anticipatory decision-making activity in order to increase the ability of organizations and governments to adapt to surprises arising in turbulent (business) environments. Such sudden and unique incidents might constitute turning points in the evolution of a certain trend or system. Wild cards may or may not be announced by weak signals, which are incomplete and fragmented data from which foresight information might be inferred." />
        <Dot :x="1060 - 300 * 0.45" :y="409 + 60 + 20 - 31 + 141 * 2 + 64" v-if="points.includes('backcasting')" key="backcasting" label="Backcasting is normative approach which works backwards from a particular desired endpoint (goal/vision) to the present in order to determine the feasibility of that future and what policy measures and actions would be required to reach that point. Backcasting is not concerned with predicting the future; rather, it is a strategic problem-solving approach, in the quest for the answer to how to reach specified outcomes in the future." />
      </g>
    </svg>
  </figure>
</template>

<script>
import { mapState } from 'vuex'
import Dot from '~/components/Helper/Dot'
import Box from '~/components/Helper/Box'
import Label from '~/components/Helper/Label'
import BoxGroup from '~/components/Helper/BoxGroup'
import { isUndefined, isArray, isString, intersection } from 'lodash'

export default {
  components: {
    Dot,
    Box,
    Label,
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
    },
    isHighlight (t) {
      let isHighlight = false
      if (isArray(t)) {
        isHighlight = (intersection(this.highlights, t)).length
      } else if (isString(t)) {
        isHighlight = this.highlights.includes(t)
      }
      return { isHighlight: isHighlight || this.highlights.length === 0 }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .graphic {
  	width: 100%;
  	height: auto;
    display: block;
    text-align: center;
    position: relative;
    opacity: 0;
    transition: opacity 1s;

    @include query($wide) {
      position: sticky;
    }

    &.isLoaded {
      opacity: 1;
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
      }

      .isHighlight {
        opacity: 1;
      }
    }
  }
</style>
