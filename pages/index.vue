<template>
  <main class="page">
    <div class="container">
      <IntersectionObserver :step="0" :noStyling="true" classes="introduction">
        <section id="introduction" class="step">
          <header>
            <h1>Developing robust adaptation in co-production with stakeholders</h1>
          </header>
          <p>While global scenarios inform country-scale decarbonisation plans and targets, in line with the Paris Agreement, adaptation to climate change is often implemented locally with potential trade-offs related to uneven impacts on livelihoods, winners and losers from the transition and interests playing at different policy levels. This Learn Module explores how to utilise co-production techniques to engage stakeholders in the development and implementation of robust adaptation plans, compatible with both local agendas and informed by global climate scenarios. Within SENSES, global products importantly including socioeconomic scenarios, could also encompass climate change projections or impact modelling. A key feature of the approach is to integrate knowledge developed bottom-up from existing local scenarios and adaptation plans with information from global scenarios. We illustrate how techniques complement each other in a stepwise manner with concrete examples from two cases in Kenya and the east of the Netherlands.</p>
          <p>This Learn Module is targeted at stakeholders interested in co-developing adaptation plans making use of global scenarios, and the broader community of scenario practitioners.</p>
        </section>
      </IntersectionObserver>
    </div>
    <div class="container">
      <Chart />
      <section class="steps">
        <IntersectionObserver :step="1" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'start' }">
            <header>
              <h2>Where to start?</h2>
            </header>
            <p>Local adaptation planning has different levels of knowledge advancement, depending on data and resource availability, institutional implementation at multiple levels, coordination between actors in the public and private sectors etc. and these considerations need to weigh foremost to design an effective co-production process. Depending on the knowledge already generated, a question that can be asked is whether we need to first explore alternatives in the future (what could happen) or develop goal-oriented pathways (what should happen). Conceptually, an exploration phase should come first.  However, starting by addressing the question “what should happen” is appropriate in some cases, such as in, in contexts where the policy cycle and phases of implementation of are at an advanced stage.</p>
            <p>The Figure guides through two processes that lead to two different adaptation plans, depending on the knowledge already generated. Both processes start with a selection of <a href="https://climatescenarios.org/primer/socioeconomic-development" target="_blank">socioeconomic</a>, <a href="https://climatescenarios.org/primer/climate-change" target="_blank">climate scenarios</a> and climate impact scenarios. The processes differ in the level of visualisation and integration of these scenarios with co-production techniques depending on whether the process start with an exploration phase or whether it builds on existing adaptation plans.</p>
          </section>
        </IntersectionObserver>
        <IntersectionObserver :step="2" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'defined' }">
            <header>
              <h2>How advanced is the existing knowledge and policy cycle to adapt?</h2>
            </header>
            <p>How effective adaptation will be, depends in first instance on how severe future climate change will be. However, it also depends on the local socio-economic context, as the same climate signal will impact a society very differently depending on how that society is organised. Therefore, adaptation plans should consider future socioeconomic change and should thus be designed to engage with relevant decision-makers and, as much as possible, representative stakeholders from the affected sectors. This also implies that global socioeconomic scenarios and climate projections, to be informative, need to be interpreted and tailored to address impacts relevant for the specific adaptation projects.</p>
            <p>When a mathematical impact model at the local scale does not exist to do this, climate change impacts from global computer simulations can be used to inform the co-production process.</p>
            <p>In summary, three main starting points include <strong>(1) identifying and engaging relevant stakeholders (2) assessing what scenario information in available, including also socioeconomic scenarios and (3) ensuring impact modelling analyses, at either global or local scales, are available</strong> to inform adaptation plans.</p>
          </section>
        </IntersectionObserver>
        <IntersectionObserver :step="3" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'well-defined' }">
            <header>
              <span class="caption">Netherlands Case</span>
              <h2>Building adaptation in an information-rich context with existing adaptation plans</h2>
            </header>
            <p>When adaptation planning is in its implementation phase with existing contextual knowledge in place, co-production techniques can help strengthening robustness and feasibility of existing plans by including different perspectives and future visions, as well as knowledge from scenarios developed at different scales.</p>
            <p>We exemplify this process with co-production techniques belonging to the <a href="https://climatescenarios.org/finder/?scenario-development=Yes" target="_blank">scenario development</a> and <a href="https://climatescenarios.org/finder/?decision=Yes" target="_blank">decision techniques</a> categories.</p>
            <p>First, an analysis of the socio-economic context needs to be undertaken, based on literature where possible and integrated with Delphi methods. Semi-quantitative techniques can be utilised to analyse and <a href="https://climatescenarios.org/finder/?name=PARTICIPATORY%20SYSTEMS%20DYNAMICS" target="_blank">communicate dynamics</a> in the socio-economic context, such as <a href="https://climatescenarios.org/finder/?name=FUZZY%20COGNITIVE%20MAPPING" taret="_blank">Fuzzy Cognitive Maps</a>.</p>
            <p>Second, in order to develop pathways, a shared <a href="https://climatescenarios.org/finder/?name=VISION" target="_blank">vision of the future</a> needs to be co-designed with stakeholders. A vision needs to allow ambiguity and be inclusive of different interest groups in society. When several visions have been already developed at multiple levels and are relevant for the system, these can be integrated in the shared vision. The vision, or the visions, act as goals for the adaptation activities.</p>
            <p>Thirdly, a common participatory process involving <a href="https://climatescenarios.org/finder/?name=BACKCASTING%20/%20NORMATIVE%20FORECASTING">backcasting</a> from the vision to the present in the development of short and long-term adaptation planning is designed. Backcasting can work as an evidence-based technique, particularly when formal quantitative knowledge is integrated in the process and as a technique to increase creativity, for example when combined with <a href="https://climatescenarios.org/finder/?name=WILD%20CARDS" target="_blank">wildcards</a> and consider and test the pathways with unexpected events. Quantitative knowledge can consist of (global or regional) impact modelling and wildcards can be scenario-based, for example global <a href="https://climatescenarios.org/primer/socioeconomic-development" target="_blank">SSP</a>-based wildcards.</p>
            <p>An example of this process can be found for the pathways developed for the Overijsselse Vecht in the Netherlands.</p>
            <footer>
              <a href="https://climatescenarios.org/dutch" target="_blank" class="btn">Overrijsselse Vecht in the Netherlands <i>↗</i></a>
            </footer>
          </section>
        </IntersectionObserver>
        <IntersectionObserver :step="4" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'ill-defined' }">
            <header>
              <span class="caption">Kenya Case</span>
              <h2>Building adaptation in an information-scarce formulation/adoption context</h2>
            </header>
            <p>When adaptation planning is limited and in the early phases of the policy cycle, co-production techniques can be used to explore the context of the problem in the form of scenarios. This exploration needs to be jointly framed with stakeholders and researchers using co-production scenarios techniques and methodologies, usually iteratively (such as the <a href="https://climatescenarios.org/finder/?name=STORY%20AND%20SIMULATION" target="_blank">Story and Simulation approach</a>).</p>
            <p>Creative <a href="https://climatescenarios.org/finder/?name=BRAINSTORMING" target="_blank">brainstorming</a> to identify drivers of change (building blocks of scenarios) is often structured with scenario matrix-based methods and techniques such as (semi-)quantitative <a href="https://climatescenarios.org/finder/?name=MORPHOLOGICAL%20ANALYSIS" target="_blank">morphological analysis</a> and <a href="https://climatescenarios.org/finder/?name=INTUITIVE%20LOGICS" target="_blank">Intuitive Logic</a>. This combined process together links global climate and socioeconomic scenarios to bottom-up system drivers in so-called <a href="https://climatescenarios.org/primer/adaptation" target="_blank">nested scenarios</a>.</p>
            <p>Scenario products in different forms, such as narratives, quantifications or cartoons, can be used in brainstorming/clustering techniques to identify and cluster risks and develop robust adaptation strategies across scenarios.</p>
            <p>An example of this process can be found for adaptation options to address transnational climate risks developed for Kenya.</p>
            <footer>
              <a href="https://climatescenarios.org/kenya" target="_blank" class="btn">Transnational climate risks developed for Kenya <i>↗</i></a>
            </footer>
          </section>
        </IntersectionObserver>
      </section>
    </div>
    <div class="container">
      <IntersectionObserver :step="5" :noStyling="true" classes="conclusion">
        <section class="step">
          <header>
            <h2>Conclusions</h2>
          </header>
          <p>Adaptation scenarios [link to Adaptation Page Primer] are developed at the national, regional, or local scale in the form of adaptation strategies, planning, and pathways. This translates to a diversity of contexts, particularly whether the adaptation policy cycle is already in the implementation phase or not. In this Learn Module we have demonstrated two processes.</p>
          <p>he use of scenarios and co-production techniques therefore also depends on the starting point in terms of available data and scenarios and phase of the policy cycle. When the policy cycle is in its starting phase, an elaborated exploration phase needs to take place first. This means that the first results lead to a list of adaptation options which are not (yet) time specific and are broader with no strong links between them. These options constitute building blocks for full adaptation pathways, in line with the developing stage towards implementation of the policy cycle. When the policy cycle is in its implementation phase, existing adaptation plans become the building blocks to develop adaptation pathways.</p>
          <p>In both cases, the current situation needs to be very carefully assessed and discussed with stakeholders.  With a relatively small amount of techniques and a relatively low use of (financial and human) resources, it is possible to co-produce adaptation options and/or pathways. Despite good alternatives, stakeholder workshops remain a very effective technique to integrate stakeholder knowledge and implement co-production techniques even if stakeholder fatigue is increasingly common.</p>
        </section>
      </IntersectionObserver>
    </div>
    <div class="container">
      <SensesMeta id="co-production" />
    </div>
  </main>
</template>

<script>
  import SensesMeta from 'library/src/components/SensesMeta.vue'
  import { mapState, mapActions } from 'vuex'
  import Question from '~/components/Question'
  import Answer from '~/components/Answer'
  import Introduction from '~/components/Introduction'
  import Chart from '~/components/Chart'
  import IntersectionObserver from 'library/src/components/IntersectionObserver'

  export default {
    components: {
      Answer,
      Question,
      Introduction,
      Chart,
      IntersectionObserver,
      SensesMeta
    },
    computed: {
      ...mapState('step', [
        'step',
        'text'
      ])
    },
    methods: {
      ...mapActions('step', [
        'setStep'
      ])
    },
    mounted () {
      this.$on('step', (step) => {
        this.setStep(step)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .page {
    @include center();
    flex-direction: column;
  }

  .container {
    width: 96vw;
    max-width: 1300px;
    margin: 4vh 2vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;

    .introduction, .conclusion {
      grid-column-start: 1;
      grid-column-end: 4;
      margin: 5vh 0;
    }

    .steps {
      display: grid;
      grid-row-gap: 8rem;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;

      .step {
        opacity: 0.3;
        transition: opacity 0.3s;

        &.isActive {
          opacity: 1;
        }

        header {
          margin-bottom: 2rem;
        }

        footer {
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .graphic {
      grid-column-start: 3;
      grid-column-end: 6;
    }

    .module-meta {
      grid-column-start: 1;
      grid-column-end: 6;
    }
  }
</style>
