<template>
  <div>
    <SectionTitle :title="sectionTitle" />
    <div class='content-wrapper'>
      <SectionHeader :title="houseName"/>
      <p class="descr">Houses recommended by our partners that have been <br/> curated to become the home of your dreams!</p>
      <h5 class="title">House Detail</h5>

    </div>
  </div>
</template>

<script>

import SectionTitle from './SectionTitle';
import SectionHeader from './SectionHeader';

export default {
  neme: 'TourSection',
  components: {
    SectionTitle,
    SectionHeader,
  },
  data() {
    return {
      sectionTitle: 'Ready to Sell!',
      houseName: 'Let’s tour and see our house!',
    }
  }

}
</script>

<style scoped>
.descr{
  color: #626687;
  opacity: 0.75;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.title {
  color: #1B1C57;
  opacity: 0.75;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
}
</style>