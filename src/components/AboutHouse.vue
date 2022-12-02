<template>
  <div class="wraper d-flex col-5">

    <div class="photo-house">
      <img :src="require(`@/assets/${realtor.img}.png`)" alt="photo">
    </div>

    <div class="wrap-realtor">
      <div class="d-flex align-items-center">
        <div class="size-photo">
          <img :src="require(`@/assets/${realtor.photo}.png`)" alt="photo">
        </div>

        <h6 class="name">{{ realtor.fullName }}</h6>
      </div>

      <h4 class="header">{{ realtor.title }}</h4>
      <div>
        <img src="@/assets/clock.svg" alt="icon">
        <span class="time-visit">{{ realtor.inTime }} | {{ realtor.date }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutHouse',
  props: {
    realtor: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.photo-house {
  margin-right: 32px;
}

.name {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #3C4563;
  margin: 0 0 0 16px;
}

.header {
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  color: #1B1C57;
  margin-top: 12px;
}

.time-visit {
  margin-left: 14px;
}

.wraper {
  margin-bottom: 50px;
}
.size-photo img {
  width: 32px;
  height: 32px;
}
</style>