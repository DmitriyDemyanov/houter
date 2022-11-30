<template>
  <div>
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #1B1C57;
}
</style>