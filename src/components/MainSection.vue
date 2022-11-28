<template>
  <BRow class="main">
    <div class="col-5 p-0">
      <div class="main-text">
        <img src="@/assets/main-text.svg" alt="text">
      </div>
      <p class="main-description">Everything you need about finding your place to live will be here, where it will be easier for you</p>
    </div>
    <div class="offset-1 col-6 main-image"></div>
    <SearchLocation/>
    <p class="subtitle-main">Our Partnership</p>
    <div class="d-flex col-5 justify-content-between">
    <span v-for="(url, img) in partners" :key='img'>
      <PartnerLink :partnerList ='url.url' :partnerImg ='url.img'/>
    </span>
  </div>
  </BRow>
</template>

<script>
import PartnerLink from '@/components/PartnerLink';
import SearchLocation from '@/components/SearchLocation'
export default {

  name: 'MainSection',
  data() {
    return {
      partners: [
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
    };
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
  color: #626687;
  opacity: 0.75;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.main-image {
  background: #626687;
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