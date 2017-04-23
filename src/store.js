import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {}
  },
  mutations: {
    setCurrentUser: function(state, user) {
      state.currentUser = user;
    },
    clearCurrentUser: function(state) {
      state.currentUser = {};
    }
  }
})
