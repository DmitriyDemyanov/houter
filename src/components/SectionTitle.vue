<template>
  <div class="d-flex align-items-center title">
    <div class="bar"></div>
    <p class="text"> {{title}}</p>
  </div>

</template>

<script>


export default {
  neme: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    }
  },


};
</script>

<style scoped>
.bar {
  width: 32px;
  height: 1px;
  background-color: #F59E0B;
}
.text {
  color: #F59E0B;
  margin: 0 0 0 8px;
}
.title {
  margin-top: 128px;
  margin-bottom: 12px;
}

</style>