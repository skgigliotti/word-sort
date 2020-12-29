import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        words: ['la muleta', 'la apuesta', 'la historia']
    },
    getters: {
        getAllWords(state) {
            return state.words
        }
    }
});