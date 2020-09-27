<template>
  <main class="page">
    <div class="container">
      <IntersectionObserver :step="0" :noStyling="true" classes="introduction">
        <section id="introduction" class="step">
          <header>
            <h1>Developing robust adaptation in co-production with stakeholders</h1>
          </header>
          <p>While global scenarios inform country-scale decarbonisation plans and targets, in line with the Paris Agreement, adaptation to climate change is often implemented locally with potential trade-offs related to uneven impacts on livelihoods, winners and losers from the transition and interests playing at different policy levels. This learn module explores how to utilise co-production techniques to engage stakeholders in the implementation of robust adaptation plans, compatible with both local higher-level agendas and informed by both global socioeconomic climate scenarios as well as knowledge developed bottom-up from existing local scenarios and adaptation plans. We illustrate how techniques complement each-other in a stepwise manner with concrete examples from two cases in Kenya and the east of the Netherlands. This learn module is targeted at stakeholders interested in co-developing adaptation strategies consistent with the international climate policy.</p>
        </section>
      </IntersectionObserver>
      <Chart />
      <section class="steps">
        <IntersectionObserver :step="1" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'start' }">
            <header>
              <h2>Where to start?</h2>
            </header>
            <p>How effective adaptation will be, depends on the local socio-economic context. Therefore, adaptation strategies need to be designed with all those affected by and involved in the planning. This implies that global socioeconomic scenarios and climate projections, to be informative, need to be interpreted and tailored to address impacts relevant for the specific adaptation projects.</p>
            <p>When a formal impact model at the local scale does not exist to do this (so-called "regional integrated assessment models"), selected climate change impacts from global simulations can be used to inform the co-production process. This can happen during a broader brainstorming session or at a focused backcasting session to strengthen robustness.</p>
          </section>
        </IntersectionObserver>
        <IntersectionObserver :step="2" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'defined' }">
            <header>
              <h2>How well defined is the system?</h2>
            </header>
            <p>Local adaptation planning has different level of knowledge advancement, depending on resources, institutional implementation at multiple levels, coordination between actors in the public and private sectors etc. and these considerations need to weigh foremost to design an effective co-production process. Depending on the knowledge already generated, a question that can be asked is whether we need to first explore alternatives in the future (what could happen) or develop goal-oriented pathways (what should happen).</p>
          </section>
        </IntersectionObserver>
        <IntersectionObserver :step="3" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'well-defined' }">
            <header>
              <span class="caption">Netherlands Case</span>
              <h2>Building adaptation in a well-defined system</h2>
              <h3>Build with scenarios and decision co-production techniques</h3>
            </header>
            <p>When local adaptation planning is advanced, all knowledge from stakeholders and existing adaptation plans needs to be well integrated in the design of adaptation scenarios. In this case, scenario development and decision techniques can be used.</p>
            <p>First, an analysis of the system needs to be undertaken, based on literature and integrated with Delphi methods. Semi-quantitative techniques can be utilised to analyse and communicate the <a href="https://climatescenarios.org/finder/techniques?name=PARTICIPATORY%20SYSTEMS%20DYNAMICS&framing=Yes&scenario-development=Yes">system dynamics</a>, such as <a href="https://climatescenarios.org/finder/techniques?name=FUZZY%20COGNITIVE%20MAPPING">Fuzzy Cognitive Maps</a>.</p>
            <p>Second, in order to develop pathways, a shared vision of the future [link to the vision] needs to be co-designed with stakeholders. A vision needs to allow ambiguity and be inclusive. When several visions have been already developed at multiple levels and are relevant for the system, these can be integrated in the shared vision.</p>
            <p>Thirdly, a common participatory process involved backcasting [link to backcasting] from the vision to the present to in the development of short and long-term adaptation planning. Backcasting can work as an evidence-based technique, particularly when formal quantitative knowledge is integrated in the process and as a technique to increase creativity, for example when combined with wildcards [link to wild-cards] and consider and test the pathways with unexpected events. Quantitative knowledge can consist of (global or regional) impact modelling and wildcards can be scenario-based, for example global SSP-based wildcards.</p>
            <p>An example of this process can be found for the pathways developed for the Overrijsselse Vecht in the Netherlands.</p>
            <footer>
              <a href="" class="btn">Overrijsselse Vecht in the Netherlands <i>↗</i></a>
            </footer>
          </section>
        </IntersectionObserver>
        <IntersectionObserver :step="4" :noStyling="true">
          <section class="step" :class="{ isActive: text === 'ill-defined' }">
            <header>
              <span class="caption">Kenya Case</span>
              <h2>Building adaptation in an ill-defined system</h2>
              <h3>Build with framing and scenario co-production techniques</h3>
            </header>
            <p>When system dynamics driving local adaptation planning is ill-defined, the scope and context of the problem needs to be jointly framed with stakeholders and researchers using co-production scenarios techniques and methodologies, usually iteratively (such as the <a href="https://climatescenarios.org/finder/techniques?name=STORY%20AND%20SIMULATION">Story and Simulation approach</a>.</p>
            <p>Creative <a href="https://climatescenarios.org/finder/techniques?name=BRAINSTORMING">brainstorming</a> to identify scenario-independent drivers of change is often structured with scenario matrix-based methods and techniques such as (semi-) quantitative <a href="https://climatescenarios.org/finder/techniques?name=MORPHOLOGICAL%20ANALYSIS">morphological analysis</a> and <a href="https://climatescenarios.org/finder/techniques?name=INTUITIVE%20LOGICS">intuitive logic</a>. This combined process together links global climate and socioeconomic scenarios to bottom-up system drivers in so-called nested scenarios.</p>
            <p>Scenario products in different forms, such as narratives, quantifications or cartoons, can be used in brainstorming/clustering techniques to identify and cluster risks and develop robust adaptation strategies across scenarios.</p>
            <p>An example of this process can be found for adaptation options to address transnational climate risks developed for Kenya</p>
            <footer>
              <a href="" class="btn">Transnational climate risks developed for Kenya <i>↗</i></a>
            </footer>
          </section>
        </IntersectionObserver>
      </section>
    </div>
  </main>
</template>

<script>
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
      IntersectionObserver
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
  }

  .container {
    width: 96vw;
    max-width: 1300px;
    min-height: 96vh;
    margin: 4vh 2vw;

    img {
      width: 100%;
    }

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;

    .introduction {
      grid-column-start: 1;
      grid-column-end: 4;
      margin: 5vh 0;
    }

    .steps {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .steps {
      display: grid;
      grid-row-gap: 8rem;

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
      grid-row-start: 2;
    }

    .questionnaire {
      margin-top: 10vh;

      .questions {
        list-style: none;
      }
    }
  }
</style>
