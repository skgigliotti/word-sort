import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        words: []
    },
    getters: {
        getAllWords: (state) => {
            console.log('gettin')
            console.log(state.words)
            console.log('ok')
            return state.words
        }

    },
    actions: {
        async loadAllWords({ commit }) {
            await axios.get('/words').then(data => {
                commit("setWords", data.data)
            }).catch(error => {
                console.log("Error in load all. " + error)
            })
        }
    },
    mutations: {
        setWords(state, data) {
            let words = []
            words = words.concat(data)

            words.forEach(word => {
                const found = state.words.find(el => el.id == word.id)
                if (found) {
                    Object.assign(found, word)
                } else {
                    state.words.push(word)
                }
            })
        }
    }
});