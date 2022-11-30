export default {
  namespaced: true,
  state: {
    partnersList: [
      {
        url: 'https://google.com',
        img: 'partner-1.svg'
      },
      {
        url: 'https://bing.com',
        img: 'partner-2.svg'
      },
      {
        url: 'https://samsung.com',
        img: 'partner-3.svg'
      },
      {
        url: 'https://apple.com',
        img: 'partner-4.svg'
      },
    ]

  },
  getters: {
    partnerList({ partnersList }) {
      return partnersList;
    }

  },
  mutations:{},

  actions: {},

};