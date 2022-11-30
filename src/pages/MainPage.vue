<template>
  <div>
    <MainSection />
    <EstateSection />
    <TourSection />

  </div>
</template>

<script>
import MainSection from '@/components/MainSection';
import EstateSection from '@/components/EstateSection';
import TourSection from '@/components/TourSection';
export default {
  name: 'MainPage',
  components: {
    MainSection,
    EstateSection,
    TourSection,
  }
}
</script>




<style scoped>

</style>
