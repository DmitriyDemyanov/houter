export default {
  namespaced: true,
  state: {
    list: {
      url: '',
      img: '',
    }

  },
  getters: {
    partnerList({ list }) {
      return list;
    }
  },
  mutations:{
    SAVE_PARTNERS(state, payload) {
      console.log(state);
      console.log(payload);
    }
  },
  actions: {},

};