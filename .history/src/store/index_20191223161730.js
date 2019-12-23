import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlayer: '',
    statistics: [{
      player: '',
      wins: 0,
      winsPer: 0,
      losses: 0,
      lossesPer: 0,
      gamesPlayed: 0
    }]
  },
  mutations: {
    REGISTER_PLAYER(state, player) {
      state.currentPlayer = player;
    }
  },
  actions: {
    registerPlayer({ commit }, player) {
      commit('REGISTER_PLAYER', player)
    }
  },
  modules: {
  }
})
