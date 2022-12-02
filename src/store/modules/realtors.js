export default {
  namespaced: true,
  state: {
    items: [
      {
        img: 'inSideHouse',
        photo: 'realtor-1',
        fullName: 'Dianne Russell',
        title: 'The things we need to check when we want to buy a house',
        icon: 'clock',
        inTime: '4 min read',
        date: '25 Apr 2021',
      },
      {
        img: 'outSideHome-1',
        photo: 'realtor-2',
        fullName: 'Courtney Henry',
        title: '7 Ways to distinguish the quality of the house we want to buy',
        icon: 'clock',
        inTime: '6 min read',
        date: '24 Apr 2021',
      },
      {
        img: 'outSideHome-2',
        photo: 'realtor-3',
        fullName: 'Darlene Robertson',
        title: 'The best way to know the quality of the house we want to buy',
        icon: 'clock',
        inTime: '2 min read',
        date: '28 Apr 2021',
      }
    ]

  },
  getters: {
    realtorList({items}) {
      return items
    }
  },
  mutations:{},
  actions: {},
  modules: {}
}