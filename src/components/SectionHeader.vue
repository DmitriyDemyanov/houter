<template>
  <div>
    <h2 class="title" :class="{'text-center': center, 'width': center}">{{title}}</h2>
    <slot name="buttons"></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    center: {
      type: Boolean,
      default: false,
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
.width {
  margin: 0 auto;
  max-width: 430px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;;
}
</style>