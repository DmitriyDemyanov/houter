export default {
  namespaced: true,
  state: {
    sectionTitle: 'Our Recommendation',
    houseName: 'Featured House',
    estatesList: [
      {
        id: 1,
        img: 'estate-1.png',
        tag: 'popular',
        name: 'Roselands House',
        price: 35000000,
        currency: '$',
        realtors: [
          {
            id: 1,
            photo: 'realtor-1.png',
            name: 'Dianne',
            secondName: 'Russell',
            city: 'Manchester, Kentucky'
          }
        ]
      },
      {
        id: 12,
        img: 'estate-2.png',
        tag: 'new',
        name: 'Woodlandside',
        price: 20000000,
        currency: '$',
        realtors: [
          {
            id: 2,
            photo: 'realtor-2.png',
            name: 'Robert',
            secondName: 'Fox',
            city: 'Dr. San Jose, South Dakota'
          }
        ]
      },
      {
        id: 3,
        img: 'estate-3.png',
        tag: 'best-deal',
        name: 'The Old Lighthouse',
        price: 44000000,
        currency: '$',
        realtors: [
          {
            id: 3,
            photo: 'realtor-3.png',
            name: 'Ronsld',
            secondName: 'Richards',
            city: 'Santa Ana, Illinois'
          }
        ]
      }
    ],
    houserooms: [
      {
        id: 1,
        img: 'bed.svg',
        place: '4 Bedrooms',
      },
      {
        id: 2,
        img: 'bathroom.svg',
        place: '2 Bathrooms',
      },
      {
        id: 3,
        img: 'carport.svg',
        place: '1 carport',
      },
      {
        id: 4,
        img: 'floor.svg',
        place: '2 floors',
      },
    ]
  },
  getters: {
    houseList({estatesList}) {
      return estatesList;
    },
    onSectionTitle(state) {
      return state.sectionTitle;
    },
    onHouseName({houseName}) {
      return houseName;
    },
    onHouseRooms({houserooms}) {
      return houserooms;
    },
  },


  mutations:{},
  actions: {},
  modules: {},
};