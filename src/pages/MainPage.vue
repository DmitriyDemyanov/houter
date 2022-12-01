<template>
  <div>
    <MainSection />
    <EstateSection />
    <TourSection />
    <BuyHomes/>

  </div>
</template>

<script>
import MainSection from '@/components/MainSection';
import EstateSection from '@/components/EstateSection';
import TourSection from '@/components/TourSection';
import BuyHomes from '@/components/BuyHomes';
export default {
  name: 'MainPage',
  components: {
    MainSection,
    EstateSection,
    TourSection,
    BuyHomes,
  }
}
</script>




<style scoped>

</style>
