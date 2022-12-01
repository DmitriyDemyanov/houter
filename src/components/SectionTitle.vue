<template>
  <div class="d-flex align-items-center title" :class="{ 'flex-column': column}">
    <div class="bar" :class="{ 'mb-2': column}"></div>
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
    },
    column: {
      type: Boolean,
      default: false
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