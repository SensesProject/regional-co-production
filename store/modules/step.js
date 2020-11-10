import { has, get, set, isUndefined, isNaN, forEach } from 'lodash'

const steps = [
  {
    text: false,
    points: [],
    highlights: []
  },
  {
    text: 'start',
    points: [],
    highlights: []
  },
  {
    text: 'defined',
    points: ['what-should', 'what-could'],
    highlights: ['questions', 'title']
  },
  {
    text: 'well-defined',
    points: ['system-dynamics', 'visioning', 'wildcards', 'backcasting'],
    highlights: ['right']
  },
  {
    text: 'ill-defined',
    points: ['morphological', 'brainstorming', 'intuitive-logics'],
    highlights: ['left']
  }
]

const DEFAULTS = {
  points: [],
  step: 0,
  text: null,
  highlights: []
}

const state = () => {
  return {
    points: DEFAULTS.points,
    text: DEFAULTS.text,
    step: DEFAULTS.step,
    highlights: DEFAULTS.highlights,
    maxStep: steps.length - 1
  }
}

const mutations = {
  SETTINGS_CHANGE (state, changes) {
    forEach(changes, (value, key) => {
      if (has(state, key)) {
        let val = value
        if (isUndefined(value) || isNaN(value)) {
          val = get(DEFAULTS, key)
        }
        set(state, key, val)
      }
    })
  },
  CHANGE_STEP (state, step) {
    state.currentStep = step
  }
}

const actions = {
  setStep ({ state, commit, dispatch }, n) {
    const next = Math.max(Math.min(n, state.maxStep), 0)
    const changes = get(steps, next, {})
    commit('SETTINGS_CHANGE', changes)
    commit('CHANGE_STEP', next)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
