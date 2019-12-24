import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentPlayer: '',
        gameMode: '',
        statistics: []
    },
    mutations: {
        REGISTER_PLAYER(state, player) {
            state.currentPlayer = player;
        },
        SAVE_STATISTIC(state, statistics) {
            state.statistics.push(statistics)
        },
        SET_GAME_MODE(state, mode) {
            state.gameMode = mode;
        }
    },
    actions: {
        registerPlayer({commit}, player) {
            commit('REGISTER_PLAYER', player)
        },
        saveStatistic({commit}, statistics) {
            statistics.player = this.state.currentPlayer;
            commit('SAVE_STATISTIC', statistics)
        },
        setGameMode({commit}, mode) {
            commit('SET_GAME_MODE', mode)
        }
    },
    getters: {
        getStatistics: state => state.statistics,
        getGameMode: state => state.gameMode,
    },
})
