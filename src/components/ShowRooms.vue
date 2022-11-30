<template>
  <div>
    <div>
      <img :src="require(`@/assets/${room.img}`)" alt="logo">
    </div>
    <p>{{room.place}}</p>
    
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

</style>