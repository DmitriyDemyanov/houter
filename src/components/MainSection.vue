<template>
  <BRow class="main">
    <div class="col-5 p-0">
      <div class="main-text">
        <img src="@/assets/main-text.svg" alt="text">
      </div>
      <p class="main-description">Everything you need about finding your place to live will be here, where it will be easier for you</p>

      <SearchLocation/>

    <p class="subtitle-main">Our Partnership</p>
    <div class="d-flex justify-content-between align-items-center">
    <span v-for="(item, idx) in partnerList" :key='idx'>
      <PartnerLink :partnerList ='item.url' :partnerImg ='item.img'/>
    </span>
  </div>



    </div>


    <div class="offset-1 col-6 main-image">
    </div>



  </BRow>
</template>

<script>
import PartnerLink from '@/components/PartnerLink';
import SearchLocation from '@/components/SearchLocation'
import { mapGetters } from 'vuex';

export default {
  name: 'MainSection',
  computed: {
      ...mapGetters('partners', ['partnerList'])
    },
  components: {
    SearchLocation,
    PartnerLink,
  }
}
</script>

<style scoped>
.main-text {
  padding-top: 175px;
  padding-left: 0;
}
.main-description {
  padding: 0;
  margin-top: 24px;
  margin-bottom: 32px;
  color: #626687;
  opacity: 0.75;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.main-image {
  background: url('@/assets/image6.png');
  border-radius: 0px 0px 0px 80px;
}
.subtitle-main {
  padding: 0;
  margin-top: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #888B97;
}
</style>