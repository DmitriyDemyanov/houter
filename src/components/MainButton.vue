<template>
  <button class="main-button" :class="classes">
    <slot name="icon"></slot>
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    classes: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.main-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #F0F3FD;
  margin-left: 24px;
  cursor: pointer;
  text-transform: capitalize;
}

.main-button.active {
  color: #10B981;
  background: #D1FAE5;
}
</style>