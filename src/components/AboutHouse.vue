<template>
  <div class="wraper d-flex col-5" >

    <div class="photo-house">
      <img src="@/assets/inSideHouse.png" alt="photo">
    </div>

    <div class="wrap-realtor">
      <div class="d-flex align-items-center">
        <img src="@/assets/realtor-1.png" alt="photo">
        <h6 class="name">Dianne Russell</h6>
      </div>

      <h4 class="header">The things we need to check when we want to buy a house</h4>
      <div>
        <img src="@/assets/clock.svg" alt="icon">
        <span class="time-visit">4 min read | 25 Apr 2021</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutHouse',
}
</script>

<style scoped>
.photo-house{
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

</style>