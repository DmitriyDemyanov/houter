<template>
  <div>
    <button class="header-button">
      <slot name="before-icon"></slot>
      {{title}}
      <slot name="after-icon"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'HeaderButton',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
.header-button,
.header-dropdown button {
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
}

.after-icon {
  margin-left: 14px;
}
</style>

