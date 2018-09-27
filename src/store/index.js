/*
 * @Author: WuXiaohong 
 * @Date: 2018-09-13 14:29:03 
 * @Last Modified by: WuXiaohong_notebook
 * @Last Modified time: 2018-09-27 15:02:43
 */
import Vue from 'vue';
import Vuex from 'vuex'

import state from './state.js'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
