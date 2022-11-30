import Vue from 'vue';
import Vuex from 'vuex';
import partners from '@/store/modules/partners';
import estate from '@/store/modules/estate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    partners,
    estate,
  },
});
