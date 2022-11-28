<template>
  <div class="">
    <a target="_blank" :href="partnerList">
      <img :src="require(`@/assets/${partnerImg}`)" alt="logo">
    </a>
  </div>


</template>

<script>
export default {
  name: 'PartnerLink',

  props: {
    partnerList: {
      type: String,
      required: true,
    },
    partnerImg: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>