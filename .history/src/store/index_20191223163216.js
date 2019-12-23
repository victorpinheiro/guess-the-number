import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlayer: '',
    statistics: []
  },
  mutations: {
    REGISTER_PLAYER(state, player) {
      state.currentPlayer = player;
    },
    SAVE_STATISTIC(state, statistics) {
      state.statistics.push(statistics)
    }
  },
  actions: {
    registerPlayer({ commit }, player) {
      commit('REGISTER_PLAYER', player)
    },
    saveStatistic({ commit }, statistics) {
      statistics.player = this.state.currentPlayer;
      commit('SAVE_STATISTIC', statistics)
    }
  },
  getters: {
    getStatistics: state => state.statistics,
  },
})
