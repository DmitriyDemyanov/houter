<template>
  <div class="d-flex align-items-center showroom-wrapper">
    <div>
      <img :src="require(`@/assets/${room.img}`)" alt="logo">
    </div>
    <p class="text">{{room.place}}</p>

  </div>
</template>

<script>
export default {
  name: 'ShowRooms',
  props: {
    room: {
      type: Object,
      required: true,
    }
  },
}
</script>




<style scoped>
.showroom-wrapper {
  width: 50%;
  margin-bottom: 25px;
}
.text {
  margin: 0 0 0 20px;
  color: #3C4563;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;

}
</style>