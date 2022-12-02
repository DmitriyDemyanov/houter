<template>
  <div>
    <SectionTitle title="See tips and trick from our partnership" :column="true" />
    <SectionHeader title="Find out more about
      selling and buying homes" :center="true" />
    <div class="d-flex justify-content-center">
      <button class="buy-home">More Artikel</button>
    </div>
    <AboutHouse :realtor="item" v-for="(item, index) in items" :key="index"/>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle';
import SectionHeader from './SectionHeader';
import AboutHouse from './AboutHouse';
export default {
  name: 'BuyHomes',
  components: {
    SectionTitle,
    SectionHeader,
    AboutHouse,
  },
  data() {
    return {
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
    }
  },
};
</script>

<style scoped>
.buy-home {
  background: #10B981;
  border-radius: 32px;
  padding: 12px 16px;
  border: none;
  color: #fff;
  margin-top: 24px;
}
</style>