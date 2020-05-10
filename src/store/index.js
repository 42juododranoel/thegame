import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT_COUNT: (state, value) => {
      state.count += value;
    },
    DECREMENT_COUNT: (state, value) => {
      state.count -= value;
    },
  },
  actions: {
  },
  modules: {
  },
});
