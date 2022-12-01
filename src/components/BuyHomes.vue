<template>
  <div>
    <SectionTitle title="See tips and trick from our partnership" :column="true" />
    <SectionHeader title="Find out more about
      selling and buying homes" :center="true" />
    <div class="d-flex justify-content-center">
      <button class="buy-home">More Artikel</button>
    </div>
    <AboutHouse/>
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
  }
}
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