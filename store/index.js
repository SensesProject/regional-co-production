import Vue from 'vue'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
import step from './modules/step'

Vue.use(Vuex)
Vue.use(VTooltip)

export const modules = {
  step
}
